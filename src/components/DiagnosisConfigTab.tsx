import { useState, useEffect } from 'react';
import { Save, RotateCcw, CheckCircle, AlertCircle, FileText, Eye } from 'lucide-react';
import { apiClient } from '../lib/apiClient';

interface DiagnosisConfig {
  template: string;
  defaultTemplate: string;
  isCustom: boolean;
  updatedAt: string | null;
  updatedBy: string | null;
}

const PREVIEW_INPUT = 'トヨタ';

export default function DiagnosisConfigTab() {
  const [config, setConfig] = useState<DiagnosisConfig | null>(null);
  const [editTemplate, setEditTemplate] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get('/api/admin/diagnosis-config');
      if (!response.ok) throw new Error('認証エラー');
      const data = await response.json();
      setConfig(data);
      setEditTemplate(data.template);
    } catch (err) {
      setError(err instanceof Error ? err.message : '読み込み失敗');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editTemplate.trim()) {
      setError('テンプレートを空にすることはできません');
      return;
    }
    setSaving(true);
    setSaveSuccess(false);
    setError(null);
    try {
      const response = await apiClient.put('/api/admin/diagnosis-config', { template: editTemplate });
      if (!response.ok) throw new Error('保存失敗');
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
      await loadConfig();
    } catch (err) {
      setError(err instanceof Error ? err.message : '保存に失敗しました');
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!confirm('デフォルトのテンプレートにリセットしますか？')) return;
    setSaving(true);
    setError(null);
    try {
      const response = await apiClient.post('/api/admin/diagnosis-config/reset');
      if (!response.ok) throw new Error('リセット失敗');
      const data = await response.json();
      setEditTemplate(data.template);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
      await loadConfig();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'リセットに失敗しました');
    } finally {
      setSaving(false);
    }
  };

  const renderPreview = (template: string) => {
    return template.replace(/\{input\}/g, PREVIEW_INPUT);
  };

  const hasChanges = config && editTemplate !== config.template;

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-300 border-t-slate-900"></div>
        <p className="mt-4 text-slate-600">読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">診断文案管理</h2>
        <p className="text-sm text-slate-600 mt-1">
          診断結果の文案テンプレートを編集します。{' '}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">{'{input}'}</code>{' '}
          はユーザーの入力値に置換されます。
        </p>
      </div>

      {/* Status */}
      <div className={`rounded-xl shadow-sm border p-4 ${
        config?.isCustom
          ? 'bg-amber-50 border-amber-200'
          : 'bg-green-50 border-green-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${config?.isCustom ? 'bg-amber-100' : 'bg-green-100'}`}>
            <FileText className={`w-5 h-5 ${config?.isCustom ? 'text-amber-600' : 'text-green-600'}`} />
          </div>
          <div>
            <div className={`font-bold ${config?.isCustom ? 'text-amber-900' : 'text-green-900'}`}>
              {config?.isCustom ? 'カスタムテンプレート使用中' : 'デフォルトテンプレート使用中'}
            </div>
            {config?.updatedAt && (
              <div className="text-sm text-slate-600">
                最終更新: {config.updatedAt} ({config.updatedBy})
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="bg-surface-light rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-slate-700">
              診断文案テンプレート
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition ${
                  showPreview
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Eye className="w-4 h-4" />
                プレビュー
              </button>
            </div>
          </div>

          <textarea
            value={editTemplate}
            onChange={(e) => setEditTemplate(e.target.value)}
            rows={16}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-mono text-sm leading-relaxed resize-y"
            placeholder="テンプレートを入力してください..."
          />

          <p className="text-xs text-slate-500">
            💡 <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">{'{input}'}</code> を入力すると、ユーザーが入力した銘柄名・コードに自動置換されます。
          </p>

          {/* Preview */}
          {showPreview && (
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                <span className="text-xs font-medium text-slate-600">
                  プレビュー（入力: 「{PREVIEW_INPUT}」の場合）
                </span>
              </div>
              <div className="p-4 bg-white">
                <div className="prose prose-sm max-w-none text-slate-800 whitespace-pre-wrap">
                  {renderPreview(editTemplate)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Info box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold mb-2">使い方：</p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>テンプレートを編集し「保存」をクリック</li>
              <li>変更は即座に診断結果に反映されます</li>
              <li>デフォルトに戻す場合は「リセット」をクリック</li>
              <li>Markdown形式で記述可能（見出し・太字など）</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving || !hasChanges}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-lg font-medium transition"
        >
          {saving ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              保存中...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              保存
            </>
          )}
        </button>

        <button
          onClick={handleReset}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition"
        >
          <RotateCcw className="w-4 h-4" />
          デフォルトにリセット
        </button>

        {saveSuccess && (
          <div className="flex items-center gap-2 text-green-600 font-medium">
            <CheckCircle className="w-5 h-5" />
            保存しました！
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-red-600 font-medium">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}
      </div>

      {/* Default template reference */}
      {config?.isCustom && (
        <details className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
          <summary className="px-6 py-3 cursor-pointer text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
            デフォルトテンプレートを表示
          </summary>
          <div className="px-6 pb-4">
            <pre className="text-xs font-mono text-slate-600 whitespace-pre-wrap bg-white p-4 rounded-lg border border-slate-200">
              {config.defaultTemplate}
            </pre>
          </div>
        </details>
      )}
    </div>
  );
}
