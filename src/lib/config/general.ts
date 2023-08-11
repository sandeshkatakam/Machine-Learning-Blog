import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light'
  },
  {
    name: 'dracula',
    text: '🧛 Dark'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade'
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake'
  },
  {
    name: 'garden',
    text: '🏡 Garden'
  },
  {
    name: 'retro',
    text: '🌇 Retro'
  },
  {
    name: 'black',
    text: '🖤 Black'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Portfolio',
      link: '/porfolio/'
    },
    {
      text: 'Reinforcement Learning',
      children: [
        {
          text: 'David Silver Reinforcement Learning Course Notes',
          link: '/reinforcement-learning/'
        },
        {
          text: 'Model-Based Reinforcement Learning: A Survey',
          link: '/model-based-reinforcement-learning/'
        }
      ]
    },
    {
      text: 'Neural DEs',
      children: [
        {
          text: 'Survey Blog post on Neural DEs',
          link: '/neuralodes/neuralode-post/'
        }
      ]
    },

    {
      text: 'Software',
      children: [
        {
          text: 'Introduction to NeoVim',
          link: '/intro-to-nvim/'
        }
      ]
    },
    {
      text: 'Deep Generative Models',
      link: '/deep-generative-models/'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
