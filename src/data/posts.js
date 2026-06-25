export const author = {
  name: '氢氧化钙',
  role: '前端开发者 / 内容创作者',
  location: 'Inteface, CN',
  avatar: 'ca(Ho)2',
  bio: 'vue-cli展示',
  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'Email', url: '18276322632@163.com' }
  ]
}

export const posts = [
  {
    id: 1,
    slug: 'vue-cli-blog-from-zero',
    title: '从 0 到 1 搭建一个 Vue CLI 动态博客',
    excerpt: '用 Vue Router、组件化结构和本地数据源搭建一个个人博客。',
    cover: 'url("images/covers/vue.svg") center/cover',
    date: '2026-06-18',
    readTime: 6,
    featured: true,
    tags: ['Vue', 'Vue CLI', 'GitHub Pages'],
    content: [
      {
        heading: '为什么选择 Vue CLI',
        body: 'Vue CLI 对初学者非常友好，目录结构清晰，构建命令稳定，适合快速做一个个人主页、博客或作品集。'
      },
      {
        heading: '核心模块',
        body: '博客由首页、文章详情页、关于页、搜索筛选、标签云、评论区和暗色模式组成。'
      },
      {
        heading: '部署思路',
        body: '项目内置 GitHub Actions 配置'
      }
    ]
  },
  {
    id: 2,
    slug: 'build-a-writing-system',
    title: '给个人博客设计',
    excerpt: '设计一套能持续输出、持续维护、持续沉淀的内容系统，此处给于建议。',
    cover: 'url("images/covers/notes.svg") center/cover',
    date: '2026-06-10',
    readTime: 5,
    featured: true,
    tags: ['写作', '效率', '内容系统'],
    content: [
      {
        heading: '先确定栏目',
        body: '建议把博客拆成 3 到 5 个固定栏目，例如技术笔记、项目复盘、工具分享、生活随笔。'
      },
      {
        heading: '文章模板化',
        body: '每篇文章可以遵循固定结构：问题背景、解决过程、踩坑记录、最终方案、可复用清单。'
      },
      {
        heading: '让首页动态起来',
        body: '首页不只是展示文章，还可以根据标签、阅读量、精选状态和更新时间自动组织内容。'
      }
    ]
  },
  {
    id: 3,
    slug: 'front-end-performance-checklist',
    title: '前端性能优化清单',
    excerpt: '图片、路由、首屏、CSS 动效、构建产物，这些小细节会明显影响博客质感。',
    cover: 'url("images/covers/static.svg") center/cover',
    date: '2026-05-29',
    readTime: 7,
    featured: false,
    tags: ['性能优化', '前端', '体验'],
    content: [
      {
        heading: '控制首屏资源',
        body: '首页不要加载过多图片和第三方脚本。'
      },
      {
        heading: '合理使用动效',
        body: '动效要服务于信息层级，不抢正文注意力。'
      },
      {
        heading: '构建后检查',
        body: '检查 dist 目录是否正常生成。'
      }
    ]
  },
    
  {
    id: 4,
    slug: 'deploy-vue-to-github-pages',
    title: '把 Vue 项目部署到 GitHub Pages 的常见坑',
    excerpt: 'publicPath、路由模式、Actions 权限、仓库 Pages 设置。',
    cover: 'url("images/covers/deploy.svg") center/cover',
    date: '2026-04-30',
    readTime: 8,
    featured: true,
    tags: ['部署', 'GitHub Pages', 'Vue'],
    content: [
      {
        heading: '路径问题',
        body: '如果静态资源 404，通常是 publicPath 不对。这个模板默认生产环境使用 ./，多数项目页能直接工作；'
      },
      {
        heading: '路由刷新问题',
        body: 'GitHub Pages 是静态托管，不会把任意路径回退到 index.html。'
      },
      {
        heading: '自动发布',
        body: '仓库 Settings → Pages 里把 Source 设为 GitHub Actions，然后推送 main 分支。'
      }
    ]
  },
  {
    id: 5,
    slug: 'small-ui-details',
    title: '让博客更高级的 12 个 UI 细节',
    excerpt: '真正有质感的网页，往往赢在间距、层级、反馈、排版和状态设计。',
    cover: 'url("images/covers/cms.svg") center/cover',
    date: '2026-04-12',
    readTime: 5,
    featured: false,
    tags: ['UI', '设计', '体验'],
   content: [
  {
    heading: '间距系统',
    body: '统一间距比盲目加装饰更有效。使用 CSS 变量定义间距阶梯，页面外边距、卡片内边距、标题与正文距离都应形成固定节奏。'
  },
  {
    heading: '状态反馈',
    body: '按钮 hover、标签选中、空状态提示、搜索结果数量，这些反馈让用户感觉页面是活的。'
  },
  {
    heading: '移动端适配',
    body: '博客最常被手机打开，移动端导航、卡片间距和字体大小必须认真处理。'
  },
  {
    heading: '暗黑模式',
    body: '使用 CSS 变量定义语义化颜色，在 :root 和 .dark 中切换变量值，配合 transition 实现平滑过渡。'
  },
  {
    heading: '加载骨架屏',
    body: '文章列表加载时显示骨架屏，使用 CSS 渐变条纹动画模拟内容占位，避免页面内容突变带来的视觉跳跃。'
  }
]
  },
{
  id: 6,
  slug: 'project-tech-stack-guide',
  title: '项目技术栈与使用说明',
  excerpt: '介绍项目中用到的 Vue 3、Vue Router、localStorage 和 GitHub Actions。',
  cover: 'url("images/covers/notes.svg") center/cover',
  date: '2026-05-06',
  readTime: 6,
  featured: false,
  tags: ['Vue 3', 'Vue Router', '技术栈'],
  content: [
    {
      heading: 'Vue 3',
      body: '项目使用 Vue 3 编写页面和组件。文章列表、搜索框、标签筛选、主题切换等功能都由 Vue 的响应式数据控制。修改页面内容时，主要查看 src 目录中的组件文件。'
    },
    {
      heading: 'Vue Router',
      body: 'Vue Router 负责页面之间的跳转，例如从首页进入文章详情页。当前项目使用 Hash 路由，因此地址中会带有 #，这种方式部署到 GitHub Pages 后比较稳定，也不容易遇到刷新页面后出现 404 的问题。'
    },
    {
      heading: '本地数据保存',
      body: '浏览量、点赞、评论和主题模式保存在浏览器的 localStorage 中。这些数据只存在当前浏览器里，清理浏览器缓存或更换设备后不会保留。'
    },
    {
      heading: '样式与静态资源',
      body: '页面样式由 CSS 文件控制，图片放在 public 目录中。文章封面可以使用本地图片，也可以填写网络图片地址。修改图片路径后，需要确认 GitHub Pages 上的访问路径是否正确。'
    },
    {
      heading: '项目启动',
      body: '进入项目目录后，先运行 npm install 安装依赖，再运行 npm run serve 启动本地开发环境。完成修改后，可以运行 npm run build 检查项目是否能够正常打包。'
    },
    {
      heading: '自动部署',
      body: '项目通过 GitHub Actions 发布到 GitHub Pages。代码推送到 main 分支后，工作流会自动安装依赖、执行构建，并把 dist 目录中的文件发布到网站。'
    }
  ]
}

]

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug)
}

export function getAllTags() {
  return [...new Set(posts.flatMap(post => post.tags))].sort((a, b) => a.localeCompare(b, 'zh-CN'))
}

export function getFeaturedPosts() {
  return posts.filter(post => post.featured)
}
