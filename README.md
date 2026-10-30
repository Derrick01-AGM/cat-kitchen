# 小猫厨房

和猫猫主厨一起，从回转食堂、海上厨房，忙到街头小吃摊。

## 开始游戏

**[点击进入《小猫厨房》游戏首页](https://derrick01-agm.github.io/cat-kitchen/)**

从首页选择第一关、第二关或第三关。建议使用电脑和键盘试玩。

**[阅读游戏制作说明与操作指南](docs/game-guide.md)**

## 三家小店

- 第一关「猫猫回转食堂」：四道料理、回转出餐，新手练习。
- 第二关「浮木小厨房」：八道海鲜、随机捕鱼、鲨鱼预警。
- 第三关「猫猫风味街」：十六道料理、三辆推车、巡逻扣车与过街取车。

## 运行与上传

本地运行：解压后打开最外层的 index.html，再点击关卡卡片。整个文件夹应一起保留。

仓库根目录应当是下面这样：

```text
cat-kitchen/
├── index.html                     # 游戏首页，与 README.md 同级
├── README.md
├── .nojekyll
├── docs/
│   └── game-guide.md               # 游戏制作说明
├── level1/
│   ├── index.html
│   ├── level1.css
│   ├── level1.js
│   ├── sfx.js
│   └── assets/                     # BGM 与 sfx 音效目录
├── level2/
│   ├── index.html
│   ├── style.css
│   ├── game.js
│   ├── sfx.js
│   └── assets/
└── level3/
    ├── index.html
    ├── style.css
    ├── game.js
    ├── sfx.js
    └── assets/
```

把解压得到的文件夹里的内容上传到仓库根目录：index.html、README.md 和三个关卡文件夹在同一层。不要上传 ZIP 代替网页文件，也不要在仓库里再套一层 cat-kitchen-github 文件夹。

GitHub 网页上传：仓库 Code → Add file → Upload files，将这些文件与文件夹拖入，然后提交到用于发布的分支。

GitHub Pages：Settings → Pages → Build and deployment → Source 选择 Deploy from a branch；Branch 选择 main（或实际的发布分支），Folder 选择 /(root)，Save。等待本次 Pages 部署完成后，根链接会进入首页。网站地址以 Settings → Pages 显示的地址为准。

参赛作品的「可运行链接」以及 README 中的开始游戏入口，都应指向根首页：

https://derrick01-agm.github.io/cat-kitchen/

原有单关地址仍能直接访问，但比赛展示建议统一使用首页链接。

发布来源设置参考：[GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 制作团队

哈基米喵客松巨献

- 场景与美术：钟梓珩
- 操作与玩法：林乔志

两位同学共同创作，使用 AI 辅助开发。
