import { ArrowLeft, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
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

        <div className="bg-surface-cream rounded-3xl shadow-soft-shadow border border-border-medium p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-pale-yellow p-3 rounded-2xl">
              <Mail className="w-6 h-6 text-accent-peach" />
            </div>
            <h1 className="text-3xl font-bold text-text-primary">お問い合わせ</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-text-secondary leading-relaxed mb-8">
              AI株式診断サービスをご利用いただき、誠にありがとうございます。
              ご質問、ご要望、不具合のご報告など、お気軽にお問い合わせください。
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-4">受付時間</h2>
              <div className="bg-pale-yellow rounded-2xl p-4 flex items-start gap-3 border border-border-medium">
                <Clock className="w-5 h-5 text-accent-coral mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-text-primary mb-1">平日 9:00-18:00</p>
                  <p className="text-sm text-text-muted">
                    ※お問い合わせは平日 9:00-18:00に受け付けております<br />
                    ※土日祝日、年末年始は休業となります<br />
                    ※返信には数営業日かかる場合がございます
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-4">お問い合わせフォーム</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-secondary mb-2">
                    お名前 <span className="text-accent-peach">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-pale-yellow border-2 border-border-medium rounded-2xl focus:ring-4 focus:ring-accent-coral/20 focus:border-accent-coral transition-all text-text-primary"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-secondary mb-2">
                    メールアドレス <span className="text-accent-peach">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-pale-yellow border-2 border-border-medium rounded-2xl focus:ring-4 focus:ring-accent-coral/20 focus:border-accent-coral transition-all text-text-primary"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-text-secondary mb-2">
                    件名 <span className="text-accent-peach">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-pale-yellow border-2 border-border-medium rounded-2xl focus:ring-4 focus:ring-accent-coral/20 focus:border-accent-coral transition-all text-text-primary"
                  >
                    <option value="">選択してください</option>
                    <option value="service">サービス内容について</option>
                    <option value="technical">技術的な問題</option>
                    <option value="feature">機能リクエスト</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-secondary mb-2">
                    お問い合わせ内容 <span className="text-accent-peach">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    className="w-full px-4 py-3 bg-pale-yellow border-2 border-border-medium rounded-2xl focus:ring-4 focus:ring-accent-coral/20 focus:border-accent-coral transition-all resize-none text-text-primary"
                    placeholder="お問い合わせ内容を詳しくご記入ください"
                  />
                </div>

                <div className="bg-pale-yellow rounded-2xl p-4 border border-border-medium">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-accent-coral border-border-medium rounded focus:ring-accent-coral"
                    />
                    <span className="text-sm text-text-secondary">
                      <Link to="/privacy" className="text-accent-coral hover:underline">プライバシーポリシー</Link>
                      に同意します <span className="text-accent-peach">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-peach-gradient text-white font-semibold py-3 px-6 rounded-full transition-all shadow-peach-glow hover:scale-[1.02] active:scale-[0.98]"
                >
                  送信する
                </button>
              </form>

              <div className="mt-6 p-4 bg-pale-yellow border border-yellow-500/30 rounded-2xl">
                <p className="text-sm text-yellow-400">
                  <strong>注意：</strong> このフォームは現在デモ版です。実際の送信機能は実装されていません。
                  本番環境では、適切なバックエンド処理を実装する必要があります。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-4">投資に関するご相談について</h2>
              <div className="bg-pale-yellow border-l-4 border-accent-peach p-4 rounded-r-2xl">
                <p className="text-accent-peach font-semibold mb-2">重要なお知らせ</p>
                <p className="text-text-secondary leading-relaxed">
                  当サービスは金融商品取引業者ではないため、個別の投資助言を行うことはできません。
                  投資に関する具体的なご相談は、証券会社等の金融商品取引業者にお問い合わせください。
                </p>
              </div>
            </section>

            <div className="bg-surface-light rounded-2xl p-6 border border-border-medium">
              <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent-coral" />
                運営会社情報
              </h3>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>
                  <strong className="text-text-primary">会社名:</strong> 株式会社イービット (Ebit Co., Ltd.)
                </p>
                <p>
                  <strong className="text-text-primary">所在地:</strong> 〒150-0043 東京都渋谷区道玄坂2-10-12 新大宗ビル3号館
                </p>
                <p className="text-text-muted">
                  Dogenzaka 2-10-12, Shibuya-ku, Tokyo
                </p>
                <p>
                  <strong className="text-text-primary">業種:</strong> AI技術を活用した情報提供サービス
                </p>
                <p>
                  <strong className="text-text-primary">電話:</strong> +81 03-5456-7890
                </p>
                <p>
                  <strong className="text-text-primary">メール:</strong> support@stockwl.jp
                </p>
                <p>
                  <strong className="text-text-primary">受付時間:</strong> 平日 9:00-18:00（土日祝日を除く）
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
