import { useState, useEffect, useRef } from 'react';
import SoftBackground from '../components/SoftBackground';
import SoftHeader from '../components/SoftHeader';
import DisclaimerBanner from '../components/DisclaimerBanner';
import DiagnosisTickerBanner from '../components/DiagnosisTickerBanner';
import SoftDivider from '../components/SoftDivider';
import SoftFormCard from '../components/SoftFormCard';
import SoftStockInput from '../components/SoftStockInput';
import SoftActionButton from '../components/SoftActionButton';
import SoftLoadingAnimation from '../components/SoftLoadingAnimation';
import SoftModal from '../components/SoftModal';
import AnalysisRenderer from '../components/AnalysisRenderer';
import { Sparkles } from 'lucide-react';
import { DiagnosisState } from '../types/diagnosis';
import { useUrlParams } from '../hooks/useUrlParams';
import { apiClient } from '../lib/apiClient';
import { userTracking } from '../lib/userTracking';
import { trackConversion, trackDiagnosisButtonClick, trackConversionButtonClick } from '../lib/googleTracking';

const diagnosisRecords = [
  { time: '1分前', stock: 'トヨタ自動車 (7203)', icon: '👨' },
  { time: '3分前', stock: 'ソニーグループ (6758)', icon: '👩' },
  { time: '5分前', stock: '任天堂 (7974)', icon: '👨' },
  { time: '7分前', stock: 'ソフトバンクグループ (9984)', icon: '👩' },
  { time: '10分前', stock: 'キーエンス (6861)', icon: '👨' },
  { time: '12分前', stock: '三菱UFJフィナンシャル (8306)', icon: '👩' },
  { time: '15分前', stock: 'ファーストリテイリング (9983)', icon: '👨' },
  { time: '18分前', stock: '東京エレクトロン (8035)', icon: '👩' },
  { time: '20分前', stock: 'リクルートホールディングス (6098)', icon: '👨' },
  { time: '23分前', stock: 'KDDI (9433)', icon: '👩' },
  { time: '25分前', stock: '信越化学工業 (4063)', icon: '👨' },
  { time: '28分前', stock: '第一三共 (4568)', icon: '👩' },
  { time: '30分前', stock: '三菱商事 (8058)', icon: '👨' },
  { time: '33分前', stock: 'ダイキン工業 (6367)', icon: '👩' },
  { time: '35分前', stock: '村田製作所 (6981)', icon: '👨' },
  { time: '38分前', stock: 'オリエンタルランド (4661)', icon: '👩' },
  { time: '40分前', stock: '日本電信電話 (9432)', icon: '👨' },
  { time: '43分前', stock: 'エムスリー (2413)', icon: '👩' },
  { time: '45分前', stock: 'ダイキン工業 (6367)', icon: '👨' },
  { time: '48分前', stock: '日立製作所 (6501)', icon: '👩' },
];

export default function RefactoredHome() {
  const urlParams = useUrlParams();
  const [inputValue, setInputValue] = useState('');

  const [diagnosisState, setDiagnosisState] = useState<DiagnosisState>('initial');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [diagnosisStartTime, setDiagnosisStartTime] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoadingScene, setShowLoadingScene] = useState<boolean>(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Auto-fill from URL params
  useEffect(() => {
    if (urlParams.code) {
      setInputValue(urlParams.code);
    }
  }, [urlParams.code]);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const runDiagnosis = async () => {
    if (diagnosisState !== 'initial') return;
    if (!inputValue.trim()) return;

    trackDiagnosisButtonClick();

    setDiagnosisState('connecting');
    setDiagnosisStartTime(Date.now());
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingScene(true);
    setError(null);

    const minimumLoadingTime = 2000;
    const startTime = Date.now();

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 85) {
          return prev + Math.random() * 15;
        } else if (prev < 95) {
          return prev + Math.random() * 2;
        }
        return prev;
      });
    }, 100);

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/gemini/diagnosis`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 50000);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: inputValue.trim(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      if (!response.ok) {
        throw new Error('AI分析に失敗しました');
      }

      const result = await response.json();

      if (!result.analysis || result.analysis.trim() === '') {
        throw new Error('分析結果が生成されませんでした');
      }

      setAnalysisResult(result.analysis);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

      setTimeout(() => {
        setShowLoadingScene(false);
        setDiagnosisState('results');
      }, remainingTime + 300);

      const durationMs = Date.now() - diagnosisStartTime;
      await userTracking.trackDiagnosisClick({
        stockCode: inputValue,
        stockName: inputValue,
        durationMs: durationMs
      });
    } catch (err) {
      console.error('Diagnosis error:', err);
      let errorMessage = '分析中にエラーが発生しました';

      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = 'リクエストがタイムアウトしました';
        } else {
          errorMessage = err.message;
        }
      }

      setError(errorMessage);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);

      setTimeout(() => {
        setDiagnosisState('error');
        setShowLoadingScene(false);
        setLoadingProgress(0);
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      }, remainingTime);
    }
  };

  const handleLineConversion = async () => {
    try {
      const userConfirmed = window.confirm(
        '【外部サイトへの移動】\n\n' +
        'これからLINE公式アプリまたはLINE公式サイト(第三者サービス)に移動します。\n\n' +
        'LINEは当サービスとは独立した別のサービスです。\n\n' +
        'LINE公式アカウントを友だち追加すると、毎日最新の株式分析レポートを受け取ることができます。\n\n' +
        '※ 当サービスは完全無料です。LINEへの移動後も追加料金は一切かかりません。\n\n' +
        'LINEアプリに移動しますか？'
      );

      if (!userConfirmed) {
        console.log('User cancelled LINE redirect');
        return;
      }

      trackConversionButtonClick();

      const response = await apiClient.get('/api/line-redirects/select');

      if (!response.ok) {
        console.error('Failed to get LINE redirect link');
        alert('LINEリンクの取得に失敗しました。しばらくしてからもう一度お試しください。');
        return;
      }

      const data = await response.json();

      if (!data.success || !data.link) {
        console.error('No active LINE redirect links available');
        alert('現在利用可能なLINEリンクがありません。');
        return;
      }

      const lineUrl = data.link.redirect_url;

      trackConversion();

      if (navigator.sendBeacon) {
        const trackingData = JSON.stringify({
          sessionId: sessionStorage.getItem('sessionId') || '',
          eventType: 'conversion',
          gclid: urlParams.gclid,
          eventData: {
            conversion_time: new Date().toISOString()
          }
        });
        navigator.sendBeacon('/api/tracking/event', trackingData);
      } else {
        await userTracking.trackConversion({
          gclid: urlParams.gclid
        });
      }

      console.log('LINE conversion tracked successfully');
      window.location.href = lineUrl;
    } catch (error) {
      console.error('LINE conversion error:', error);
      alert('操作に失敗しました。しばらくしてからもう一度お試しください。');
    }
  };

  const handleReportDownload = async () => {
    try {
      const response = await apiClient.get('/api/line-redirects/select');
      let lineRedirectUrl = '';

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.link) {
          lineRedirectUrl = data.link.redirect_url;
        }
      }

      const { generateDiagnosisReport } = await import('../lib/reportGenerator');
      await generateDiagnosisReport({
        stockCode: inputValue,
        stockName: inputValue,
        analysis: analysisResult,
        lineRedirectUrl: lineRedirectUrl
      });

      await userTracking.trackEvent({
        sessionId: sessionStorage.getItem('sessionId') || '',
        eventType: 'report_download',
        stockCode: inputValue,
        stockName: inputValue,
        eventData: {
          reportFormat: 'docx',
          timestamp: new Date().toISOString()
        }
      });

      console.log('Report download tracked successfully');
    } catch (error) {
      console.error('Report download error:', error);
      alert('レポートのダウンロードに失敗しました。もう一度お試しください。');
    }
  };

  const closeModal = () => {
    setDiagnosisState('initial');
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingScene(false);
    setDiagnosisStartTime(0);
    setError(null);
    setInputValue('');

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  return (
    <div className="relative flex flex-col">
      <SoftBackground />

      <div className="relative z-10 flex flex-col">
        <SoftHeader />
        <DisclaimerBanner />

        {!showLoadingScene ? (
          <div className="flex-1 flex flex-col py-2">
            <div className="container mx-auto space-y-2">

              <DiagnosisTickerBanner records={diagnosisRecords} />

              <SoftDivider />

              <SoftFormCard>
                <SoftStockInput
                  value={inputValue}
                  onChange={setInputValue}
                />

                {diagnosisState === 'initial' && (
                  <div className="mt-2">
                    <SoftActionButton
                      onClick={runDiagnosis}
                      disabled={!inputValue.trim()}
                      icon={<Sparkles size={20} />}
                    >
                      無料で情報を取得
                    </SoftActionButton>
                  </div>
                )}

                {diagnosisState === 'error' && (
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-400 rounded-2xl p-4 text-center animate-fadeIn mt-2">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">分析エラー</h3>
                    <p className="text-red-600 text-sm mb-4 whitespace-pre-line">{error}</p>
                    <button
                      onClick={() => {
                        setDiagnosisState('initial');
                        setError(null);
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full transition-all shadow-soft-shadow-lg hover:scale-105 active:scale-95"
                    >
                      もう一度試す
                    </button>
                  </div>
                )}
              </SoftFormCard>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center py-4">
            <SoftLoadingAnimation progress={loadingProgress} />
          </div>
        )}
      </div>

      <SoftModal
        isOpen={diagnosisState === 'streaming' || diagnosisState === 'results'}
        onClose={closeModal}
        title="AI分析情報"
      >
        <div className="p-4">
          <div className="flex items-center justify-center gap-3 mb-3 pb-3 border-b border-border-light">
            <h3 className="text-2xl font-bold text-text-primary mb-1">{inputValue}</h3>
          </div>

          <div className="prose max-w-none">
            <AnalysisRenderer text={analysisResult} />
          </div>

          {diagnosisState === 'results' && (
            <div className="mt-4 pt-4 border-t border-border-light space-y-2">
              <button
                onClick={handleLineConversion}
                className="w-full h-14 px-8 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #06C755 0%, #00B900 100%)',
                  boxShadow: '0 4px 16px rgba(6, 199, 85, 0.4)',
                }}
              >
                LINE公式アカウントで最新情報を受け取る
              </button>
              <button
                onClick={handleReportDownload}
                className="w-full h-14 px-8 rounded-full font-semibold text-gray-700 text-base border-2 border-gray-200 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50"
              >
                分析レポートをダウンロード
              </button>
            </div>
          )}
        </div>
      </SoftModal>
    </div>
  );
}
