# Vue CLI Dynamic Blog

一个可以直接运行、可以部署到 GitHub Pages 的 Vue CLI 个人博客模板。

## 功能

- Vue CLI + Vue 3 + Vue Router
- 首页 Hero 区、文章卡片、精选文章
- 动态搜索、标签筛选、排序
- 文章详情页、目录锚点
- 暗色 / 亮色模式，状态保存在 localStorage
- 背景图片可自定义，支持透明度、遮罩深度、模糊度动态调节
- 本地浏览量、点赞、评论功能
- 响应式布局，适配移动端
- GitHub Actions 自动部署到 GitHub Pages

## 本地运行

```bash
npm install
npm run serve
```

打开终端提示的本地地址即可预览。

## 打包

```bash
npm run build
```

构建结果会输出到 `dist/`。

## 修改博客内容

文章数据在：

```txt
src/data/posts.js
```

你可以新增、删除或修改文章对象：

```js
{
  id: 7,
  slug: 'my-new-post',
  title: '我的新文章',
  excerpt: '文章摘要',
  cover: 'url("images/covers/vue.svg") center/cover',
  date: '2026-06-24',
  readTime: 5,
  featured: false,
  tags: ['Vue', '生活'],
  content: [
    { heading: '小标题', body: '正文内容' }
  ]
}
```

作者信息也在 `src/data/posts.js` 的 `author` 对象中。

## 修改背景图片和透明度

默认背景配置在：

```txt
src/config/site.js
```

你可以直接改：

```js
background: {
  image: 'url("images/backgrounds/study-desk.svg")',
  opacity: 0.34,        // 背景图片透明度，0 到 1
  overlayOpacity: 0.72, // 页面遮罩深度，越大越压暗背景
  blur: 0,              // 背景模糊 px
  position: 'center center',
  size: 'cover',
  fixed: true
}
```

页面右下角也有「背景」按钮，可以直接输入图片地址并拖动透明度滑块。设置会保存在本地 localStorage。

如果要换成本地图片，把图片放到：

```txt
public/images/backgrounds/你的图片.jpg
```

然后把配置改成：

```js
image: 'url("images/backgrounds/你的图片.jpg")'
```

## 部署到 GitHub Pages

### 方式 A：推荐，GitHub Actions 自动部署

1. 在 GitHub 创建新仓库，例如 `vue-cli-dynamic-blog`。
2. 把本项目上传到仓库，并推送到 `main` 分支。
3. 打开仓库 `Settings → Pages`。
4. 在 `Build and deployment` 中，把 `Source` 设为 `GitHub Actions`。
5. 推送后 Actions 会自动构建并发布 `dist`。

### 方式 B：手动发布到 gh-pages 分支

```bash
npm install
npm run deploy
```

如果你的资源路径需要仓库子路径，可以创建 `.env.local`：

```env
VUE_APP_PUBLIC_PATH=/你的仓库名/
```

这个模板默认使用 hash 路由，所以部署到 GitHub Pages 后刷新文章页也不容易 404。

## 目录结构

```txt
vue-cli-dynamic-blog
├─ public
│  ├─ index.html
│  ├─ favicon.svg
│  └─ images
│  └─ .nojekyll
├─ src
│  ├─ components
│  ├─ config
│  ├─ data
│  ├─ router
│  ├─ styles
│  ├─ utils
│  └─ views
├─ .github/workflows/deploy.yml
├─ package.json
└─ vue.config.js
```

## 后续可增强

- 把文章内容改成 Markdown 文件
- 接入 GitHub Issues 做评论系统
- 接入 Notion / Supabase / Headless CMS
- 增加文章归档页、RSS、SEO metadata
- 增加后台发布入口
