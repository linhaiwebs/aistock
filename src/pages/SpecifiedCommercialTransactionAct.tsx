import { ArrowLeft, FileText, Building, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecifiedCommercialTransactionAct() {
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
              <FileText className="w-6 h-6 text-accent-coral" />
            </div>
            <h1 className="text-3xl font-bold text-text-primary">特定商取引法に基づく表記</h1>
          </div>

          <p className="text-text-secondary leading-relaxed mb-8">
            特定商取引法（特定商取引に関する法律）に基づき、以下の通り表記いたします。
          </p>

          <div className="space-y-6">
            <section className="border-b border-border-medium pb-6">
              <div className="flex items-start gap-4">
                <div className="bg-pale-yellow p-3 rounded-lg flex-shrink-0">
                  <Building className="w-5 h-5 text-accent-coral" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-text-primary mb-4">販売業者情報</h2>
                  <dl className="space-y-3">
                    <div className="grid sm:grid-cols-3 gap-2">
                      <dt className="font-semibold text-text-primary">会社名</dt>
                      <dd className="sm:col-span-2 text-text-secondary">有限会社 藍デザイン工房</dd>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2">
                      <dt className="font-semibold text-text-primary">会社名（英語）</dt>
                      <dd className="sm:col-span-2 text-text-secondary">Aidokobo Co., Ltd.</dd>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2">
                      <dt className="font-semibold text-text-primary">所在地</dt>
                      <dd className="sm:col-span-2 text-text-secondary">
                        〒150-8136<br />
                        東京都渋谷区道玄坂二丁目10番5号 新大宗大厦3号館 4B<br />
                        4B, Building 3, New Daisho Building, 2-10-5 Dogenzaka, Shibuya-ku, Tokyo
                      </dd>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2">
                      <dt className="font-semibold text-text-primary">設立</dt>
                      <dd className="sm:col-span-2 text-text-secondary">2015年4月</dd>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2">
                      <dt className="font-semibold text-text-primary">業種</dt>
                      <dd className="sm:col-span-2 text-text-secondary">AI技術を活用した情報提供サービス</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <section className="border-b border-border-medium pb-6">
              <div className="flex items-start gap-4">
                <div className="bg-pale-yellow p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent-peach" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-text-primary mb-4">連絡先</h2>
                  <dl className="space-y-3">
                    <div className="grid sm:grid-cols-3 gap-2">
                      <dt className="font-semibold text-text-primary">電話</dt>
                      <dd className="sm:col-span-2 text-text-secondary">+81 03-8732-9568</dd>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2">
                      <dt className="font-semibold text-text-primary">メールアドレス</dt>
                      <dd className="sm:col-span-2 text-accent-coral">wusegut647@gmail.com</dd>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2">
                      <dt className="font-semibold text-text-primary">受付時間</dt>
                      <dd className="sm:col-span-2 text-text-secondary">平日 9:00-18:00（土日祝日を除く）</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <section className="border-b border-border-medium pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">サービス内容</h2>
              <div className="bg-surface-light rounded-lg p-5 border border-border-medium">
                <h3 className="font-bold text-text-primary mb-3">提供サービス</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>AI技術を活用した株式情報の提供および分析サービス</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>株価データ、チャート、テクニカル指標の表示</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>AI分析レポートの生成と提供</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>投資情報の提供（情報提供のみ、投資助言には該当しません）</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-b border-border-medium pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">サービス料金</h2>
              <div className="bg-pale-yellow rounded-lg p-5 border-2 border-accent-coral">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">基本サービス</h3>
                      <p className="text-sm text-text-secondary">
                        株価情報の閲覧、AI診断機能、レポートダウンロード
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-2xl font-bold text-accent-coral">無料</p>
                    </div>
                  </div>
                  <div className="bg-surface-cream rounded p-3">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      現在、当サービスは基本機能を無料で提供しております。
                      今後、プレミアム機能を追加する場合は、事前にお知らせいたします。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-b border-border-medium pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">お支払い方法</h2>
              <div className="bg-surface-light rounded-lg p-5 border border-border-medium">
                <p className="text-text-secondary leading-relaxed">
                  現在、有料サービスは提供しておりません。
                  今後、有料プランを導入する際は、以下の決済方法を予定しております。
                </p>
                <ul className="mt-3 space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>クレジットカード決済（Visa、Mastercard、JCB、American Express等）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>銀行振込</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>コンビニ決済</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-b border-border-medium pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">サービス提供時期</h2>
              <div className="bg-surface-light rounded-lg p-5 border border-border-medium">
                <p className="text-text-secondary leading-relaxed">
                  サービスはお申し込み後、即時ご利用いただけます。
                  AI診断結果の生成には、通常数秒から数十秒程度のお時間をいただきます。
                </p>
              </div>
            </section>

            <section className="border-b border-border-medium pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">返品・キャンセルについて</h2>
              <div className="bg-surface-light rounded-lg p-5 border border-border-medium">
                <h3 className="font-bold text-text-primary mb-3">無料サービスについて</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  現在提供している無料サービスについては、
                  いつでもご利用を停止いただけます。
                </p>
                <h3 className="font-bold text-text-primary mb-3">今後提供予定の有料サービスについて</h3>
                <p className="text-text-secondary leading-relaxed">
                  デジタルコンテンツの性質上、原則として返品・返金はお受けできません。
                  ただし、以下の場合は返金対応を検討いたします。
                </p>
                <ul className="mt-3 space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>システムの不具合により、サービスが正常に提供されなかった場合</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-coral mt-1">•</span>
                    <span>当社の責に帰すべき事由により、サービス提供が不可能となった場合</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-b border-border-medium pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">個人情報の取り扱い</h2>
              <div className="bg-surface-light rounded-lg p-5 border border-border-medium">
                <p className="text-text-secondary leading-relaxed mb-3">
                  お客様の個人情報は、個人情報保護法に基づき適切に管理いたします。
                  詳細は
                  <Link to="/privacy" className="text-accent-coral hover:underline font-semibold mx-1">
                    プライバシーポリシー
                  </Link>
                  をご確認ください。
                </p>
              </div>
            </section>

            <section className="border-b border-border-medium pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">免責事項</h2>
              <div className="bg-pale-yellow border-l-4 border-accent-peach p-5 rounded-r-lg">
                <p className="text-accent-peach font-semibold mb-3">重要なお知らせ</p>
                <div className="space-y-2 text-text-secondary text-sm leading-relaxed">
                  <p>
                    当サービスは、AI技術を活用した株式情報の提供および分析ツールであり、
                    投資助言業務、投資一任業務、金融商品仲介業務には該当しません。
                  </p>
                  <p>
                    提供される情報は参考情報としてご活用ください。
                    株式投資には価格変動リスク、信用リスク、流動性リスク等が伴い、
                    投資元本を割り込む可能性があります。
                  </p>
                  <p>
                    最終的な投資判断は、必ずご自身の責任において行ってください。
                    当サービスの利用により生じたいかなる損害についても、
                    当社は一切の責任を負いません。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4">お問い合わせ</h2>
              <div className="bg-pale-yellow rounded-lg p-6 border-2 border-accent-coral">
                <p className="text-text-secondary leading-relaxed mb-4">
                  特定商取引法に関するご質問、その他お問い合わせは、
                  以下の方法でご連絡ください。
                </p>
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="w-5 h-5 text-accent-coral mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-text-primary mb-1">連絡先</p>
                    <p className="text-text-secondary">電話: +81 03-5456-7890</p>
                    <p className="text-accent-coral">support@stockwl.jp</p>
                    <p className="text-sm text-text-muted mt-1">平日 9:00-18:00（土日祝日を除く）</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-coral text-dark-navy rounded-lg hover:bg-accent-coral-light transition-colors font-semibold"
                >
                  お問い合わせフォームへ
                </Link>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-border-medium">
            <p className="text-sm text-text-muted text-center">
              最終更新日: 2025年1月15日
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
