import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
              <Shield className="w-6 h-6 text-accent-coral" />
            </div>
            <h1 className="text-3xl font-bold text-text-primary">プライバシーポリシー</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-text-muted mb-6">最終更新日: 2025年10月21日</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">1. 基本方針</h2>
              <p className="text-text-secondary leading-relaxed">
                AI株式分析サービス（以下「当サービス」）の運営者である株式会社イービット（以下「当社」）は、利用者の個人情報の重要性を認識し、
                個人情報の保護に関する法律（個人情報保護法）を遵守し、適切に取り扱い、保護することに努めます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">2. 収集する情報</h2>
              <p className="text-text-secondary leading-relaxed mb-3">
                当社は、当サービスの提供にあたり、以下の情報を収集する場合があります：
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>アクセスログ情報（IPアドレス、ブラウザの種類、アクセス日時等）</li>
                <li>Cookie および類似の技術を使用して収集される情報</li>
                <li>サービス利用履歴（閲覧した銘柄、実行した診断等）</li>
                <li>お問い合わせ時に提供される情報（メールアドレス、氏名等）</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">3. 情報の利用目的</h2>
              <p className="text-text-secondary leading-relaxed mb-3">
                収集した情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>当サービスの提供、維持、改善</li>
                <li>利用者からのお問い合わせへの対応</li>
                <li>サービスの利用状況の分析および統計データの作成</li>
                <li>不正利用の防止およびセキュリティの確保</li>
                <li>利用規約違反への対応</li>
                <li>新機能やサービスに関する情報提供（利用者の同意がある場合）</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">4. Google AdSense について</h2>
              <div className="bg-pale-yellow border-l-4 border-accent-coral p-4 mb-4">
                <p className="text-text-primary font-semibold mb-2">第三者配信事業者による広告配信</p>
                <p className="text-text-secondary leading-relaxed mb-3">
                  当サービスでは、Google AdSense を使用して広告を配信しています。
                  Google AdSense は Cookie を使用して、利用者が当サイトや他のサイトにアクセスした際の情報に基づいて広告を配信します。
                </p>
                <p className="text-text-secondary leading-relaxed">
                  利用者は、<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent-coral hover:underline">Googleの広告設定ページ</a>で、
                  パーソナライズド広告を無効にすることができます。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">5. Cookie の使用について</h2>
              <p className="text-text-secondary leading-relaxed mb-3">
                当サービスでは、利用者の利便性向上およびサービス改善のため、Cookie を使用しています。
              </p>
              <p className="text-text-secondary leading-relaxed mb-3">
                Cookie とは、ウェブサイトが利用者のコンピュータに送信する小さなテキストファイルで、
                利用者のブラウザに保存されます。Cookie を使用することで、利用者の設定を記憶し、より快適にサービスをご利用いただけます。
              </p>
              <p className="text-text-secondary leading-relaxed">
                利用者は、ブラウザの設定により Cookie の受け取りを拒否することができますが、
                その場合、当サービスの一部機能が正常に動作しない可能性があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">6. 第三者への情報提供</h2>
              <p className="text-text-secondary leading-relaxed mb-3">
                当社は、以下の場合を除き、利用者の同意なく個人情報を第三者に提供することはありません：
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">7. セキュリティ</h2>
              <p className="text-text-secondary leading-relaxed">
                当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                ただし、インターネット上での情報伝達には一定のリスクが伴うため、当社は完全な安全性を保証するものではありません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">8. 個人情報の開示・訂正・削除</h2>
              <p className="text-text-secondary leading-relaxed">
                利用者は、当社に対して、個人情報の開示、訂正、追加、削除、利用停止等を請求することができます。
                請求を希望される場合は、お問い合わせフォームよりご連絡ください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">9. 未成年者の利用</h2>
              <p className="text-text-secondary leading-relaxed">
                当サービスは、未成年者が利用する場合、保護者の同意を得た上でご利用ください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-4">10. プライバシーポリシーの変更</h2>
              <p className="text-text-secondary leading-relaxed">
                当社は、必要に応じて本ポリシーを変更することがあります。
                変更後のポリシーは、当サービス上に掲載された時点から効力を生じるものとします。
              </p>
            </section>

            <div className="bg-surface-light rounded-lg p-6 mt-8 border border-border-medium">
              <h3 className="font-bold text-text-primary mb-3">お問い合わせ</h3>
              <p className="text-sm text-text-secondary mb-2">
                本ポリシーに関するご質問、個人情報の取り扱いに関するご相談は、お問い合わせフォームよりご連絡ください。
              </p>
              <p className="text-sm text-text-secondary mb-2">
                <strong>株式会社イービット (Ebit Co., Ltd.)</strong>
              </p>
              <p className="text-sm text-text-secondary mb-2">
                〒150-0043 東京都渋谷区道玄坂2-10-12 新大宗ビル3号館
              </p>
              <p className="text-sm text-text-secondary mb-2">
                Dogenzaka 2-10-12, Shibuya-ku, Tokyo
              </p>
              <p className="text-sm text-text-secondary mb-2">
                設立: 2015年4月
              </p>
              <p className="text-sm text-text-secondary mb-2">
                電話: +81 03-5456-7890
              </p>
              <p className="text-sm text-text-secondary mb-2">
                メール: support@stockwl.jp
              </p>
              <p className="text-sm text-text-secondary">
                受付時間: 平日 9:00-18:00（土日祝日を除く）
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
