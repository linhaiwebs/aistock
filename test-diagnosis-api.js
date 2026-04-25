#!/usr/bin/env node
/**
 * aistock API Test Script
 * Tests the backend diagnosis API endpoint
 * 
 * Usage: node test-diagnosis-api.js [BASE_URL]
 * Default BASE_URL: http://localhost:8011
 */

const BASE_URL = process.argv[2] || 'http://localhost:8011';

let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log(`✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.log(`❌ FAIL: ${name}`);
    console.log(`   Error: ${err.message}`);
    failed++;
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

async function fetchJSON(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await response.json();
  return { status: response.status, data };
}

async function main() {
  console.log(`\n🧪 aistock Diagnosis API Test Suite`);
  console.log(`   Base URL: ${BASE_URL}\n`);

  // Test 1: Health check
  await test('Health check endpoint', async () => {
    const { status, data } = await fetchJSON('/health');
    assert(status === 200, `Expected 200, got ${status}`);
    assert(data.status === 'ok', `Expected status ok, got ${data.status}`);
  });

  // Test 2: Diagnosis with Japanese input
  await test('Diagnosis with Japanese input (トヨタ)', async () => {
    const { status, data } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({ code: 'トヨタ_' + Date.now() }),
    });
    assert(status === 200, `Expected 200, got ${status}`);
    assert(data.analysis, 'Missing analysis field');
    assert(data.analysis.includes('テクニカル'), 'Analysis should contain technical section');
    assert(data.analysis.includes('LINE'), 'Analysis should contain LINE CTA');
    assert(data.mock === true || data.cached === true, 'Should be mock/fixed or cached response');
  });

  // Test 3: Diagnosis with stock code
  await test('Diagnosis with stock code (7203)', async () => {
    const { status, data } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({ code: '7203' }),
    });
    assert(status === 200, `Expected 200, got ${status}`);
    assert(data.analysis, 'Missing analysis field');
    assert(data.analysis.includes('7203'), 'Analysis should contain input code');
  });

  // Test 4: Diagnosis with random English input
  await test('Diagnosis with random English input (abc)', async () => {
    const { status, data } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({ code: 'abc' }),
    });
    assert(status === 200, `Expected 200, got ${status}`);
    assert(data.analysis, 'Missing analysis field');
    assert(data.analysis.includes('abc'), 'Analysis should contain input');
  });

  // Test 5: Diagnosis with empty code should fail
  await test('Diagnosis with empty code returns 400', async () => {
    const { status, data } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({ code: '' }),
    });
    assert(status === 400, `Expected 400, got ${status}`);
    assert(data.error, 'Should have error field');
  });

  // Test 6: Diagnosis without code should fail
  await test('Diagnosis without code returns 400', async () => {
    const { status, data } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    assert(status === 400, `Expected 400, got ${status}`);
  });

  // Test 7: Cache - same request should return cached
  await test('Diagnosis cache works (second request cached)', async () => {
    const code = 'キャッシュテスト_' + Date.now();
    // First request
    const { data: first } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
    assert(first.cached === false, 'First request should not be cached');

    // Second request
    const { data: second } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
    assert(second.cached === true, 'Second request should be cached');
    assert(second.analysis === first.analysis, 'Cached analysis should match');
  });

  // Test 8: Diagnosis no longer requires stockData
  await test('Diagnosis works without stockData parameter', async () => {
    const { status, data } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({ code: 'ノンストックデータ' }),
    });
    assert(status === 200, `Expected 200, got ${status}`);
    assert(data.analysis, 'Should return analysis without stockData');
  });

  // Test 9: Config GET endpoint
  await test('Diagnosis config GET endpoint', async () => {
    const { status, data } = await fetchJSON('/api/gemini/diagnosis/config');
    assert(status === 200, `Expected 200, got ${status}`);
    assert(data.template, 'Should return template');
    assert(data.template.includes('{input}'), 'Template should have {input} placeholder');
    assert(typeof data.isCustom === 'boolean', 'isCustom should be boolean');
  });

  // Test 10: Config POST endpoint - set custom template
  await test('Diagnosis config POST - set custom template', async () => {
    const customTemplate = '### {input} カスタムテスト\n\nテスト文案です。';
    const { status, data } = await fetchJSON('/api/gemini/diagnosis/config', {
      method: 'POST',
      body: JSON.stringify({ template: customTemplate }),
    });
    assert(status === 200, `Expected 200, got ${status}`);
    assert(data.success === true, 'Should return success');

    // Verify custom template is active
    const { data: configData } = await fetchJSON('/api/gemini/diagnosis/config');
    assert(configData.isCustom === true, 'Should show custom template active');

    // Verify custom template is used
    const { data: diagData } = await fetchJSON('/api/gemini/diagnosis', {
      method: 'POST',
      body: JSON.stringify({ code: 'カスタム確認' }),
    });
    assert(diagData.analysis.includes('カスタムテスト'), 'Should use custom template');
  });

  // Test 11: Config POST - reset to default
  await test('Diagnosis config POST - reset to default', async () => {
    const { status, data } = await fetchJSON('/api/gemini/diagnosis/config', {
      method: 'POST',
      body: JSON.stringify({ template: '' }),
    });
    assert(status === 200, `Expected 200, got ${status}`);

    // Verify default is back
    const { data: configData } = await fetchJSON('/api/gemini/diagnosis/config');
    assert(configData.isCustom === false, 'Should show default template active');
  });

  // Test 12: Stock data API still exists but is optional
  await test('Stock data endpoint still accessible', async () => {
    const response = await fetch(`${BASE_URL}/api/stock/data?code=7203`);
    // May return 200 or error depending on kabutan availability
    assert(response.status !== 404, 'Stock endpoint should still exist');
  });

  // Summary
  console.log(`\n${'='.repeat(50)}`);
  console.log(`📊 Results: ${passed} passed, ${failed} failed, ${passed + failed} total`);
  if (failed === 0) {
    console.log('🎉 All tests passed!\n');
  } else {
    console.log('⚠️  Some tests failed.\n');
  }

  process.exit(failed > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Test runner error:', err);
  process.exit(2);
});
