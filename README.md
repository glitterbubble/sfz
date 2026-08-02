# 嵊州数字方志平台（"嵊方志"）

> 存史以数、资政以智、育人以趣  
> 把沉睡的方志，做成人人爱用的"口袋里的嵊州"。

## 项目简介

嵊州数字方志平台（"嵊方志"）是面向社会公众的嵊州省情、地情一站式服务平台。采用 **"1+5+N"** 服务体系：

- **"1" 一个核心**：数字方志馆 —— 省、市、县三级志书与年鉴全文检索
- **"5" 五大板块**（统一"剡"字品牌前缀）：
  - 剡好读：志书、年鉴、史料全文在线阅读
  - 剡好游：剡溪地图（GIS）+ 浙东唐诗之路 + 名胜古迹一键导览
  - 剡好看：越剧、书圣文化、非遗影像等视听内容
  - 剡好听：嵊州讲堂、口述史、方言音频
  - 剡好礼：方志文创、地情书单、村史家谱
- **"N" 项创新专题**：浙东唐诗之路、越剧之乡、书圣故里、领带之乡、嵊州茶叶

## 技术架构

- **纯前端 SPA**：Vanilla JS + Hash 路由，无构建步骤
- **设计语言**：墨青 #1f3a34 / 朱红 #c0392b / 金色 #b8860b / 纸色 #f6f2e9
- **字体**：Noto Serif SC（标题）+ Noto Sans SC（正文）
- **数据**：内置模拟数据（data.js），可对接后端 API
- **存储**：LocalStorage（收藏、阅读历史、搜索历史、阅读设置、主题）
- **PWA**：支持安装到手机桌面，离线可用

## 目录结构

```
嵊方志-web/
├── index.html          # 主页面（SPA入口）
├── manifest.json       # PWA清单
├── nginx.conf          # Nginx配置
├── Dockerfile          # Docker部署
├── README.md           # 本文件
└── assets/
    ├── css/
    │   └── main.css    # 全部样式
    └── js/
        ├── data.js     # 模拟数据（志书/专题/地图/视听/文创）
        ├── app.js      # 核心引擎（路由/组件/存储/主题）
        └── pages.js    # 页面模块（1+5+N全部页面）
```

## 部署方式

### 方式一：直接部署到 Nginx 服务器

```bash
# 1. 将整个 嵊方志-web 目录上传到服务器
scp -r 嵊方志-web/ user@your-server:/usr/share/nginx/html/

# 2. 复制 Nginx 配置
sudo cp /usr/share/nginx/html/嵊方志-web/nginx.conf /etc/nginx/conf.d/sfz.conf

# 3. 修改配置中的 root 路径
sudo vim /etc/nginx/conf.d/sfz.conf
# 将 root 改为实际路径：root /usr/share/nginx/html/嵊方志-web;

# 4. 重载 Nginx
sudo nginx -s reload
```

### 方式二：Docker 部署（推荐）

```bash
# 1. 进入项目目录
cd 嵊方志-web

# 2. 构建镜像
docker build -t shengzhou-fangzhi .

# 3. 运行容器
docker run -d --name sfz -p 8080:80 shengzhou-fangzhi

# 4. 访问 http://your-server:8080
```

### 方式三：Python 简易服务器（本地测试）

```bash
cd 嵊方志-web
python -m http.server 8080
# 访问 http://localhost:8080
```

### 方式四：Node.js 简易服务器（本地测试）

```bash
cd 嵊方志-web
npx serve -p 8080
# 访问 http://localhost:8080
```

## 功能清单

| 页面 | 路由 | 功能 |
|------|------|------|
| 首页 | `#/home` | Banner轮播 + 智能搜索 + 金刚区 + 数字方志馆入口 + 推荐流 + 专题滚动 |
| 数字方志馆 | `#/search` | 全文检索 + 分类筛选 + 结果列表 + 热门搜索 + 搜索历史 + 馆藏统计 |
| 地情地图 | `#/map` | GIS剡溪地图 + 分类筛选 + 地点marker + 详情卡片 + 唐诗之路 |
| 我的 | `#/mine` | 用户信息 + 收藏/历史/订阅统计 + 菜单 + 方志足迹 |
| 剡好读 | `#/read` | 志书列表 + 搜索 + 分类筛选 + 年鉴列表 |
| 阅读器 | `#/reader/:bookId` | 在线阅读 + 目录跳转 + 字号调节 + 日/夜间模式 |
| 剡好看 | `#/watch` | 越剧/书圣/唐诗/非遗分类视频列表 |
| 剡好听 | `#/listen` | 讲堂/口述史/方言/越剧音频列表 |
| 剡好礼 | `#/gift` | 文创商品 + 地情书单 |
| 专题详情 | `#/topic/:id` | 专题简介 + 历史脉络时间线 + 关联志书 + 相关地点 |
| 志书详情 | `#/book/:id` | 志书信息 + 内容摘要 + 目录 + 收藏/阅读 |

## 数据说明

所有数据均为模拟数据，定义在 `assets/js/data.js` 中，包含：
- 6 部志书（嵊县志、嵊州市志、嵊县地名志、嵊州年鉴、嵊州春秋、剡录）
- 5 个专题（唐诗之路、越剧之乡、书圣故里、领带之乡、嵊州茶叶）
- 5 个地图点位（王羲之故居、百丈飞瀑、越剧发源地、剡溪漂流、马寅初故居）
- 6 个视频、6 个音频、6 个文创产品
- 热门搜索、Banner、人物等

对接后端 API 时，只需修改 `data.js` 中的数据获取逻辑，替换为 fetch 请求即可。

## 浏览器兼容

- Chrome / Edge 90+
- Safari 14+
- Firefox 88+
- 移动端 iOS Safari 14+ / Android Chrome 90+

## 许可

© 2025 嵊州市史志研究室 保留所有权利
