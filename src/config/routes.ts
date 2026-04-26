export interface RouteConfig {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  title: string;
}

export const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'daily',
    title: '株式情報分析ツール - 完全無料・登録不要・カード不要の株式分析'
  },
  {
    path: '/contact',
    priority: 0.6,
    changefreq: 'monthly',
    title: 'お問い合わせ - 株式情報分析ツール'
  },
  {
    path: '/privacy',
    priority: 0.5,
    changefreq: 'yearly',
    title: 'プライバシーポリシー - 株式情報分析ツール'
  },
  {
    path: '/terms',
    priority: 0.5,
    changefreq: 'yearly',
    title: '利用規約 - 株式情報分析ツール'
  },
  {
    path: '/specified-commercial-transaction-act',
    priority: 0.5,
    changefreq: 'yearly',
    title: '特定商取引法に基づく表記 - 株式情報分析ツール'
  },
  {
    path: '/company',
    priority: 0.6,
    changefreq: 'monthly',
    title: '会社情報 - 株式情報分析ツール'
  }
];

export const excludedPaths = [
  '/adsadmin',
  '/adsadmin/*',
  '/api',
  '/api/*'
];
