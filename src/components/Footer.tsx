import { Link } from 'react-router-dom';
import { Shield, Scale, FileText, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-20 bg-light-yellow border-t border-border-medium">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="hidden md:block bg-surface-cream border border-border-medium rounded-3xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-pale-yellow p-3 rounded-2xl flex-shrink-0">
              <Shield className="w-6 h-6 text-accent-peach" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-accent-peach" />
                金融商品取引法に基づく重要事項
              </h3>

              <div className="space-y-3 text-sm leading-relaxed text-text-secondary">
                <div className="bg-pale-yellow rounded-2xl p-4 border-l-4 border-accent-coral">
                  <p className="font-semibold text-text-primary mb-2">【サービスの性質】</p>
                  <p>
                    本サービスは、AI技術を活用した株式情報の提供および分析ツールです。
                    <strong className="text-accent-peach">投資助言業務、投資一任業務、金融商品仲介業務には該当せず、特定の金融商品の売買を推奨・勧誘するものではありません。</strong>
                  </p>
                </div>

                <div className="bg-pale-yellow rounded-2xl p-4 border-l-4 border-yellow-500">
                  <p className="font-semibold text-text-primary mb-2">【投資リスクに関する警告】</p>
                  <p>
                    株式投資には価格変動リスク、信用リスク、流動性リスク等が伴い、
                    <strong className="text-accent-peach">投資元本を割り込む可能性があります。</strong>
                    過去の運用実績は将来の運用成果を保証するものではありません。
                    市場環境の変化により、予想外の損失が発生する可能性があります。
                  </p>
                </div>

                <div className="bg-pale-yellow rounded-2xl p-4 border-l-4 border-accent-coral">
                  <p className="font-semibold text-text-primary mb-2">【情報の正確性について】</p>
                  <p>
                    提供される情報は、信頼できると判断した情報源から取得していますが、
                    その正確性、完全性、適時性を保証するものではありません。
                    AI分析結果は参考情報として提供されるものであり、投資判断の唯一の基準とすべきではありません。
                  </p>
                </div>

                <div className="bg-pale-yellow rounded-2xl p-4 border-l-4 border-accent-peach">
                  <p className="font-semibold text-text-primary mb-2">【投資判断の責任】</p>
                  <p>
                    <strong className="text-accent-peach">最終的な投資判断は、利用者ご自身の責任において行ってください。</strong>
                    本サービスの利用により生じたいかなる損害についても、当社は一切の責任を負いません。
                    投資を行う際は、証券会社等の金融商品取引業者にご相談ください。
                  </p>
                </div>

                <div className="bg-surface-light rounded-2xl p-4 mt-4">
                  <p className="font-semibold text-text-primary mb-1">【登録情報】</p>
                  <p className="text-xs text-text-muted">
                    当サービス提供者は金融商品取引業者（投資助言・代理業、投資運用業等）ではありません。
                    金融商品取引法第29条の登録を受けた事業者ではないため、個別の投資助言を行うことはできません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden bg-surface-cream border border-accent-peach rounded-2xl p-4 text-center mb-8">
          <p className="text-sm text-accent-peach font-semibold mb-1">⚠️ 重要なお知らせ</p>
          <p className="text-xs text-text-secondary leading-relaxed">
            当サービスは情報提供のみを目的としており、投資助言や投資勧誘を行うものではありません。投資判断は必ずご自身の責任で行ってください。
          </p>
        </div>

        <div className="border-t border-border-medium pt-8">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent-coral" />
                法的文書
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/company"
                    className="text-text-secondary hover:text-accent-coral transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-coral/50 group-hover:bg-accent-coral transition-colors"></span>
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-text-secondary hover:text-accent-coral transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-coral/50 group-hover:bg-accent-coral transition-colors"></span>
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-text-secondary hover:text-accent-coral transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-coral/50 group-hover:bg-accent-coral transition-colors"></span>
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link
                    to="/specified-commercial-transaction-act"
                    className="text-text-secondary hover:text-accent-coral transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-coral/50 group-hover:bg-accent-coral transition-colors"></span>
                    特定商取引法表記
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-peach" />
                お問い合わせ
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="text-text-secondary hover:text-accent-peach transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-peach/50 group-hover:bg-accent-peach transition-colors"></span>
                    お問い合わせフォーム
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border-medium pt-6 text-center">
            <p className="text-sm text-text-primary mb-2 font-medium">
              &copy; {currentYear} 有限会社 藍デザイン工房. All rights reserved.
            </p>
            <p className="text-xs text-text-muted leading-relaxed max-w-3xl mx-auto">
              当サイトで提供される情報は投資勧誘を目的としたものではありません。
              投資に関する最終決定は、利用者ご自身の判断でなさるようお願いいたします。
              掲載されている情報の正確性については万全を期しておりますが、その内容の正確性、安全性、有用性を保証するものではありません。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
