import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'zClub',
  description: '蹦跶个人网站',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  dest:'dist',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'zwf',
    // docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/theme-reco/': [
        {
          text: 'module one',
          children: ['home', 'theme']
        },
        {
          text: 'module two',
          children: ['api', 'plugin']
        }
      ],
      '/docs/nav/': [
        {
          text: '前端文档',
          children: ['frontEndCollect', 'frontEndCommon']
        },
        {
          text: '后端文档',
          children: ['frontEndCollect', 'frontEndCommon']
        },
      ]
    },
    navbar:
      [
        { text: '首页', link: '/' },
        { text: '文档', link: '/docs/nav/' },
        { text: '前端', link: '/tags/tag1/1/' },
        {
          text: '后端',
          children: [
            { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
            { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
          ]
        },
      ],
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
})
