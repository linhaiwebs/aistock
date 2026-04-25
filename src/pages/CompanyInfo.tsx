import { ArrowLeft, Building, MapPin, Mail, Phone, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-light-gradient">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent-coral hover:text-accent-coral-light mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </Link>

        <div className="bg-surface-cream rounded-xl shadow-soft-shadow border border-border-medium p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-pale-yellow p-3 rounded-lg">
              <Building className="w-6 h-6 text-accent-coral" />
            </div>
            <h1 className="text-3xl font-bold text-text-primary">会社概要</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="bg-pale-yellow rounded-lg p-6 border-l-4 border-accent-coral">
                <h2 className="text-2xl font-bold text-text-primary mb-4">有限会社 藍デザイン工房</h2>
                <p className="text-lg text-text-secondary mb-2">Aidokobo Co., Ltd.</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-surface-light rounded-lg p-6 border border-border-medium">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-accent-coral mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-text-primary mb-2">所在地</h3>
                      <p className="text-text-secondary leading-relaxed">
                        〒150-8136<br />
                        東京都渋谷区道玄坂二丁目10番5号<br />
                        新大宗大厦3号館 4B
                      </p>
                      <p className="text-text-muted text-sm mt-2">
                        4B, Building 3, New Daisho Building,<br />
                        2-10-5 Dogenzaka, Shibuya-ku, Tokyo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-light rounded-lg p-6 border border-border-medium">
                  <div className="flex items-start gap-3 mb-3">
                    <Mail className="w-5 h-5 text-accent-peach mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-text-primary mb-3">連絡先</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Phone className="w-4 h-4 text-accent-coral mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-text-muted text-xs">電話</p>
                            <p className="text-text-secondary">+81 03-8732-9568</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Mail className="w-4 h-4 text-accent-coral mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-text-muted text-xs">メール</p>
                            <p className="text-text-secondary break-all">wusegut647@gmail.com</p>
                          </div>
                        </div>
                        <p className="text-text-muted text-xs mt-2">
                          受付時間: 平日 9:00-18:00（土日祝日を除く）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-pale-yellow rounded-lg p-6 border-l-4 border-accent-coral">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-accent-coral mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">業種</h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      AI技術を活用した株式情報提供サービス／デジタルマーケティング支援
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-6 h-6 text-accent-coral mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-text-primary">事業内容</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-surface-light border-2 border-border-medium rounded-lg p-5 hover:border-accent-coral transition-colors">
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-coral text-dark-navy rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    AI株式情報分析サービスの提供
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed ml-10">
                    人工知能技術を活用した株式市場データの分析・情報提供サービス（情報提供のみ、投資助言には該当しません）
                  </p>
                </div>

                <div className="bg-surface-light border-2 border-border-medium rounded-lg p-5 hover:border-accent-coral transition-colors">
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-coral text-dark-navy rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    デジタルマーケティング支援
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed ml-10">
                    Google・Yahoo! JAPAN等の広告プラットフォームを活用したマーケティング支援
                  </p>
                </div>

                <div className="bg-surface-light border-2 border-border-medium rounded-lg p-5 hover:border-accent-coral transition-colors">
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-coral text-dark-navy rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Webサービス開発・運営
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed ml-10">
                    情報提供型Webサービスの企画・開発・運営
                  </p>
                </div>

                <div className="bg-surface-light border-2 border-border-medium rounded-lg p-5 hover:border-accent-coral transition-colors">
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-coral text-dark-navy rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    データ分析サービス
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed ml-10">
                    市場データの収集・分析・レポート作成サービス
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-surface-light rounded-lg p-6 border border-border-medium">
                <h3 className="text-xl font-bold text-text-primary mb-4">企業理念</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  有限会社 藍デザイン工房は、AI技術を活用した情報提供サービスを通じて、
                  投資家の皆様により良い情報アクセスを提供することを使命としています。
                </p>
                <p className="text-text-secondary leading-relaxed">
                  最新のテクノロジーを活用し、分かりやすく信頼性の高い情報提供サービスを目指してまいります。
                </p>
                <div className="mt-4 p-4 bg-pale-yellow border-l-4 border-accent-peach rounded">
                  <p className="text-sm text-accent-peach">
                    <strong>重要:</strong> 当社は金融商品取引業者ではありません。提供する情報は投資判断の参考情報としてご活用ください。
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-pale-yellow rounded-lg p-6 border-2 border-accent-coral mt-8">
              <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent-coral" />
                お問い合わせ
              </h3>
              <div className="space-y-3 text-sm text-text-secondary mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-coral" />
                  <div>
                    <span className="text-text-muted">電話:</span>
                    <span className="ml-2">+81 03-8732-9568</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent-coral" />
                  <div>
                    <span className="text-text-muted">メール:</span>
                    <span className="ml-2">wusegut647@gmail.com</span>
                  </div>
                </div>
                <p className="text-text-muted text-xs">受付時間: 平日 9:00-18:00（土日祝日を除く）</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-coral text-dark-navy rounded-lg hover:bg-accent-coral-light transition-colors font-semibold"
              >
                お問い合わせフォームへ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
