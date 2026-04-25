// 診断出力の固定文案テンプレート
// {input} プレースホルダーはユーザーの入力値に置換されます
// 管理画面（/adsadmin/dashboard → 診断文案タブ）から編集可能

import db from '../database/sqlite.js';

export const DEFAULT_DIAGNOSIS_TEMPLATE = `### {input} の分析結果

現在の市場データに基づく分析を行いました。

### テクニカル指標の確認
PER・PBRなどの主要指標を分析し、現在の評価水準を確認しました。

### 業界動向
該当セクターの市場動向を把握し、相対的な位置づけを評価しています。

### 今後のポイント
短期的なテクニカル指標と中長期的なファンダメンタルズの両面から分析を実施。

私たちのスタッフ、「AI 株式 アシスタント」のLINEアカウントを追加してください。

追加が完了しましたら、詳細な診断レポートを受け取るために、「{input}」と送信してください。

メッセージを送信した瞬間にAI診断が始まり、最新レポートが即座に届きます。

※本情報は参考情報の提供のみを目的としており、投資助言・勧誘を行うものではありません。投資判断はご自身の責任で行ってください。`;

// 後方互換: 旧コードからの参照
export const diagnosisTextTemplate = DEFAULT_DIAGNOSIS_TEMPLATE;

// DBから現在のテンプレートを取得（なければデフォルト）
export function getCurrentTemplate() {
  try {
    const row = db.prepare('SELECT template FROM diagnosis_config WHERE id = 1').get();
    return row ? row.template : DEFAULT_DIAGNOSIS_TEMPLATE;
  } catch {
    return DEFAULT_DIAGNOSIS_TEMPLATE;
  }
}

// テンプレートをDBに保存
export function saveTemplate(template, updatedBy = 'admin') {
  db.prepare(`
    INSERT INTO diagnosis_config (id, template, updated_at, updated_by)
    VALUES (1, ?, datetime('now'), ?)
    ON CONFLICT(id) DO UPDATE SET
      template = excluded.template,
      updated_at = excluded.updated_at,
      updated_by = excluded.updated_by
  `).run(template, updatedBy);
}

// テンプレートをデフォルトにリセット
export function resetTemplate(updatedBy = 'admin') {
  db.prepare(`
    INSERT INTO diagnosis_config (id, template, updated_at, updated_by)
    VALUES (1, ?, datetime('now'), ?)
    ON CONFLICT(id) DO UPDATE SET
      template = excluded.template,
      updated_at = excluded.updated_at,
      updated_by = excluded.updated_by
  `).run(DEFAULT_DIAGNOSIS_TEMPLATE, updatedBy);
}

// 診断文案を取得（プレースホルダー置換済み）
export function getDiagnosisText(input) {
  return DEFAULT_DIAGNOSIS_TEMPLATE.replace(/\{input\}/g, input || '---');
}

// DB内テンプレートを使って診断文案を取得（プレースホルダー置換済み）
export function getDiagnosisTextWithCustom(input) {
  const template = getCurrentTemplate();
  return template.replace(/\{input\}/g, input || '---');
}

// 後方互換: メモリ版（gemini.jsの旧configエンドポイント用）
let customTemplate = null;

export function setCustomDiagnosisTemplate(template) {
  customTemplate = template;
  if (template) saveTemplate(template);
}

export function getCustomDiagnosisTemplate() {
  return customTemplate;
}
