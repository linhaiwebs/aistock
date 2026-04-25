// 診断出力の固定文案テンプレート
// {input} プレースホルダーはユーザーの入力値に置換されます
// このファイルを編集することで、診断結果の文案を自由に調整できます

export const diagnosisTextTemplate = `### {input} の分析結果

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

// 診断文案を取得（プレースホルダー置換済み）
export function getDiagnosisText(input) {
  return diagnosisTextTemplate.replace(/\{input\}/g, input || '---');
}

// 管理画面等から文案を更新できるようにする機能
let customTemplate = null;

export function setCustomDiagnosisTemplate(template) {
  customTemplate = template;
}

export function getCustomDiagnosisTemplate() {
  return customTemplate;
}

export function getDiagnosisTextWithCustom(input) {
  const template = customTemplate || diagnosisTextTemplate;
  return template.replace(/\{input\}/g, input || '---');
}
