import express from 'express';
import dotenv from 'dotenv';
import { getCachedDiagnosis, saveDiagnosisToCache } from '../utils/sqliteCache.js';
import { getRateLimitStatus } from '../utils/rateLimiter.js';
import { recordUsageStats } from '../utils/sqliteStats.js';
import { getDiagnosisTextWithCustom, setCustomDiagnosisTemplate, getCustomDiagnosisTemplate, diagnosisTextTemplate } from '../config/diagnosisText.js';

dotenv.config();

const router = express.Router();

router.post('/diagnosis', async (req, res) => {
  const startTime = Date.now();

  try {
    const { code } = req.body;

    console.log('Diagnosis request received for input:', code);

    if (!code) {
      console.error('Missing required parameter: code');
      await recordUsageStats({ cacheHit: false, apiCall: false, error: true, responseTime: Date.now() - startTime });
      return res.status(400).json({ error: 'Input is required' });
    }

    // Check cache
    const cachedResult = await getCachedDiagnosis(code);
    if (cachedResult) {
      console.log(`Returning cached result for ${code}`);
      const responseTime = Date.now() - startTime;
      await recordUsageStats({ cacheHit: true, apiCall: false, error: false, responseTime });
      return res.json({
        analysis: cachedResult.diagnosis_result,
        cached: true,
        cachedAt: cachedResult.created_at,
        expiresAt: cachedResult.expires_at
      });
    }

    // Use fixed diagnosis text (configurable via /diagnosis/config)
    const analysis = getDiagnosisTextWithCustom(code);

    await saveDiagnosisToCache(code, null, analysis, 'fixed-text');
    const responseTime = Date.now() - startTime;
    await recordUsageStats({ cacheHit: false, apiCall: false, error: false, responseTime });
    return res.json({ analysis, cached: false, mock: true });
  } catch (error) {
    console.error('Error in diagnosis function:', error);

    const responseTime = Date.now() - startTime;
    await recordUsageStats({ cacheHit: false, apiCall: false, error: true, responseTime });

    if (!res.headersSent) {
      res.status(500).json({
        error: '診断中にエラーが発生しました',
        details: error.message,
      });
    }
  }
});

// Get/Set diagnosis text config
router.get('/diagnosis/config', (req, res) => {
  res.json({
    template: getCustomDiagnosisTemplate() || diagnosisTextTemplate,
    isCustom: !!getCustomDiagnosisTemplate(),
  });
});

router.post('/diagnosis/config', (req, res) => {
  const { template } = req.body;
  if (template === undefined || template === null) {
    return res.status(400).json({ error: 'Template string is required' });
  }
  if (template === '') {
    // Empty string resets to default
    setCustomDiagnosisTemplate(null);
    return res.json({ success: true, message: 'Diagnosis template reset to default' });
  }
  setCustomDiagnosisTemplate(template);
  res.json({ success: true, message: 'Diagnosis template updated' });
});

router.get('/stats', async (req, res) => {
  try {
    const rateLimitStatus = getRateLimitStatus();
    const { getTodayStats } = await import('../utils/sqliteStats.js');
    const todayStats = await getTodayStats();

    res.json({
      rateLimit: rateLimitStatus,
      today: todayStats,
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ error: 'Failed to get statistics' });
  }
});

export default router;
