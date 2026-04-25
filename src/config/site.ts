export interface SiteConfig {
  domain: string;
  name: string;
  description: string;
  themeColor: string;
  backgroundColor: string;
}

export const getSiteConfig = (): SiteConfig => {
  return {
    domain: import.meta.env.VITE_SITE_DOMAIN || 'http://localhost:5173',
    name: import.meta.env.VITE_SITE_NAME || 'AI株式情報ツール',
    description: import.meta.env.VITE_SITE_DESCRIPTION || '完全無料・登録不要のAI株式情報分析ツール。AI技術を活用して株式市場データを可視化、情報提供。※投資助言ではありません。',
    themeColor: '#FF6F61',
    backgroundColor: '#030712'
  };
};

export const siteConfig = getSiteConfig();
