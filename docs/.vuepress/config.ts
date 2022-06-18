import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Serverless合集',
    description: '这是我的第一个 VuePress 站点',
    base: '/',
    theme: defaultTheme({
        docsRepo: 'https://github.com/mapxn/serverless',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        editLinkText: '在Github上编辑',
        lastUpdated: true,
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
        ],
        sidebar: {
            '/': [
                {
                    text: '介绍',
                    link: '/',
                },
            ],
        }
    })
})