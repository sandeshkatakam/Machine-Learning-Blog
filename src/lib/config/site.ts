import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Off the Convex Path',
  subtitle: 'An Unorthodox Machine Learning Blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/websitedp_min.png',
    name: 'Sandesh Katakam',
    status: '🧠',
    bio: 'Unraveling the Nexus: Exploring Math, Machine Learning, and Programming'
    
  },
  themeColor: '#3D4451'
}
