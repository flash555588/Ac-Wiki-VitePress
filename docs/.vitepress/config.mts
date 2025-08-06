import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: 'Ac-Wiki',
    description: '学术生活百科 - 大学生的百科全书',
    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
        // https://vitepress.dev/zh/reference/default-theme-config
        logo: '/logo.svg',
        // siteTitle: '',
        nav: nav(),
        sidebar: sidebar(),
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ac-wiki/ac-wiki' },
        ],

        externalLinkIcon: true,
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        outline: { level: [2, 3], label: '目录' },
        returnToTopLabel: '返回顶部',
        editLink: {
            pattern: 'https://github.com/ac-wiki/ac-wiki/blame/main/docs/:path',
            text: '源代码',
        },
        lastUpdated: {
            text: '更新于',
            formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
        },
        docFooter: { prev: '上一篇', next: '下一篇' },

        footer: {
            message: '公益项目。与任何组织无关。Made with ❤.',
            copyright: `© ${new Date().getFullYear()} <a href="https://github.com/ac-wiki">Ac-Wiki 项目组</a>`,
        },
    },

    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
        // Iconify CDN - 提供更多图标支持
        ['script', { src: 'https://code.iconify.design/3/3.1.1/iconify.min.js' }],
    ],
    markdown: {
        math: true,
    },

    vite: {
        server: {
            allowedHosts: true,
        },
        optimizeDeps: {
            include: ['@iconify/vue']
        }
    },
})

function nav(): DefaultTheme.NavItem[] {
    return [

        { text: '校园生活', link: '/campus-life/', activeMatch: '^/campus-life/' },
        { text: '学术资源', link: '/academic-resources/', activeMatch: '^/academic-resources/' },
        { text: '通用技能', link: '/general-skills/', activeMatch: '^/general-skills/' },
        { text: '成长路径', link: '/growth-path/', activeMatch: '^/growth-path/' },
        { text: '博客', link: '/blog/blog', activeMatch: '^/blog/blog' },
        {
            text: '关于',
            items: [
                { text: '友情链接', link: '/links' },
                { text: '贡献指南', link: '/contribute' },
                { text: '更新日志', link: '/changelog' },
                { text: '关于我们', link: '/about' },
            ],
        },
    ]
}

function sidebar(): DefaultTheme.Sidebar {
    return {
        '/': [
            {
                text: 'Ac-Wiki',
                items: [
                    { text: '写在开头', link: '/overview' },
                ],
            },
            {
                text: '校园生活',
                link: '/campus-life/',
                collapsed: true,
                items: [
                    { text: '开学第 0 课', link: '/campus-life/first-lesson-of-school' },
                    { text: '选课指南', link: '/campus-life/different-courses' },
                    { text: '签到考勤', link: '/campus-life/class-attendance' },
                    { text: '转专业指南', link: '/campus-life/major-transfer-guide' },
                    { text: '辅修双学位', link: '/campus-life/minor-or-dual-degree' },
                    { text: '学生邮箱', link: '/campus-life/student-email' },
                    { text: '图书馆使用', link: '/campus-life/library' },
                    { text: '冲突解决', link: '/campus-life/resolving-conflicts' },
                    { text: '人际关系', link: '/campus-life/social-connections' },
                    { text: '脱单指南', link: '/campus-life/getting-out-of-singleness' },
                    { text: '医保指南', link: '/campus-life/medical-insurance' },
                    { text: '国际交流', link: '/campus-life/international-exchange' },
                    {
                      text: '梦想帮扶',
                      items: [
                          { text: '奖/助学金申请', link: '/campus-life/dream-help/scholarship' },
                          { text: '勤工俭学申请', link: '/campus-life/dream-help/work-study-program' },
                          { text: '国家助学贷款', link: '/campus-life/dream-help/faq-national-student-loan' },
                      ],
                    },
                ],
            },
            {
                text: '学术资源',
                link: '/academic-resources/',
                collapsed: true,
                items: [
                    { text: '关键概念', link: '/academic-resources/some-key-concepts' },
                    {
                      text: '资源',
                      items: [
                          { text: '获取资源', link: '/academic-resources/how-to-get-resources' },
                          { text: '数学学习', link: '/academic-resources/math/learning-resources' },   
                      ],
                    },
                ],
            },
            {
                text: '通用技能',
                link: '/general-skills/',
                collapsed: true,
                items: [
                    { text: '学生优惠', link: '/general-skills/student-discounts' },
                    { text: '银行账户与信用卡', link: '/general-skills/bank-accounts-and-credit-cards' },
                    { text: '搜索引擎', link: '/general-skills/search-platforms' },
                    {
                      text: '工具',
                      items: [
                          {text: '效率软件', link: '/general-skills/tools'},
                          { 
                            text: '网络安全',
                            collapsed: true,
                            link: '/general-skills/cyber-security/',
                            items: [
                                { text: '密码管理', link: '/general-skills/cyber-security/password_manage' },
                                { text: '隐私保护', link: '/general-skills/cyber-security/privacy' },
                            ],
                           },
                           { 
                            text: '奇技淫巧',
                            collapsed: true,
                            link: '/general-skills/qi-ji-yin-qiao/',
                            items: [
                                { text: '校园跑', link: '/general-skills/qi-ji-yin-qiao/campus-running' },
                                { text: '刷课', link: '/general-skills/qi-ji-yin-qiao/pointless-courses' },
  
                            ],
                           },
                      ],
                  },
                    {
                      text: '学习',
                      items: [
                        { text: '考试和竞赛', link: '/general-skills/study/study' },
                      ],
                  },
                    {
                      text: '生活技巧',
                      items: [
                          { 
                            text: '生活技巧',
                            collapsed: true,
                            link: '/general-skills/',
                            items: [
                                { text: '生活实用技巧', link: '/general-skills/life-tips' },
                                { text: '保养手段', link: '/general-skills/health' },
                                { text: '流行健康手册', link: '/general-skills/health-when-travelling' },
                            ],
                           },
                      ],
                  },
                    {
                      text: '就业',
                      items: [{ text: '企业文化', link: '/' },],
                  },
                    {
                      text: '方法论',
                      items: [
                          { 
                            text: '计算机基础',
                            collapsed: true,
                            link: '/general-skills/computer-basic/',
                            items: [
                                { text: '上网教程', link: '/general-skills/computer-basic/SurfingTutorial' },
                            ],
                           },
                      ],
                  },
                ],
            },
            {
                text: '成长路径',
                link: '/growth-path/',
                collapsed: true,
                items: [
                    { text: '', link: '/' },
                ],
            },
            {
              text: '博客',
              link: '/blog/blog',
              collapsed: true,
              items: [
                  { text: '博客首页', link: '/blog/blog' },
                  { text: '博客列表',
                    items: [
                       {text: 'Hello Ac-Wiki!', link: '/blog/posts/hello-ac-wiki'},
                       {text: '计算机科学与技术专业的几种出路', link: '/blog/posts/future-paths-for-cs-students'},
                       {text: '脱单技巧', link: '/blog/posts/from-single-to-dating'},
                    ],
                },
            ],
        },
        {
          text: '贡献指南',
          link: '/community-hub/index.md',
          collapsed: true,
          items: [
              { text: '贡献指南', link: '/community-hub/about-wiki' },
              { text: '加入 Ac-Wiki 共建', link: '/community-hub/CONTRIBUTING' },

          ],
      },
            {
                text: '关于',
                items: [
                    { text: '友情链接', link: '/links' },
                    { text: '贡献指南', link: '/contribute' },
                    { text: '更新日志', link: '/changelog' },
                    { text: '关于我们', link: '/about' },
                    { text: '关于wiki', link: '/about-wiki' },
                ],
            },
        ],
    }
};
