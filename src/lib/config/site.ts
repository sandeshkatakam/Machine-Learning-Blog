import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Sandesh Katakam',
  subtitle: 'My Machine Learning Blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/profile_pic.png',
    name: 'Sandesh Katakam',
    status: '🌸',
    bio: 'Loves to write about latest research in Machine Learning and Deep Learning'
  },
  themeColor: '#3D4451'
}
