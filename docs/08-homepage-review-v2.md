# PlayDude 首页审查与 V2 实施说明

## 结论

原首页的品牌方向没有错：`Nightlife Intelligence`、`Know Before You Go.` 和四城框架都应保留。主要问题是页面更像内部 MVP 展示，而不是一个让真实访客愿意继续阅读并信任的内容产品。

V2 不改变 PlayDude 的定位。它把首页从“介绍我们做什么”改成“帮助用户完成第一步决策”：先选城市，再理解区域、预算、氛围、入场规则与潜在意外。

## 原首页的关键问题

### 1. 内部项目语言暴露给了用户

- `Initial guides`
- `City landing pages`
- `Editorial MVP`
- `70% city guide. 30% visitor reality check.`

这些内容适合写在 PRD 或品牌规范中，不适合成为首页卖点。用户关心的是能否减少不确定性，而不是网站目前处于哪个开发阶段。

### 2. 核心价值正确，但表达不够具体

原文强调 `Reduce uncertainty`，但没有立刻展示 PlayDude 到底会告诉用户什么。V2 把价值拆成四个可以快速理解的问题：

1. Where should I go?
2. What will it cost?
3. What should I expect?
4. What could surprise me?

### 3. 四个城市权重相同，与 MVP 重点不一致

曼谷和芭提雅应承担当前的主要内容与转化任务；东京和大阪保留在品牌版图中，但明确标为 `Preview`。这样既不推翻四城规划，也避免让访客误以为四个城市的内容成熟度完全一致。

### 4. 城市卡片过长，首页扫描效率低

原卡片直接放入整段城市摘要，四张卡片视觉重量接近，用户需要阅读大量文字才能发现区别。V2 使用一句城市判断、首晚区域和建议到达时间，让访客在数秒内做出下一步选择。

### 5. 虚构 venue 占位内容会损害信任

`Signal Room`、`Afterglow Club` 等占位名称看起来像真实推荐。对于以“减少信息差”为核心的 PlayDude，这比内容不足更危险。V2 保留 venue 数据与页面框架，但在公开页面隐藏所有 `Placeholder profile`，直到价格、营业时间、入场要求和场所预期经过核实。

### 6. 移动端头部占用空间过大

原移动端把品牌和四个城市导航纵向堆叠。V2 保持单行紧凑头部，在小屏隐藏次要导航项，并保留主要入口。

## V2 首页结构

1. **Header** — 品牌、City guides、What you'll know、Our method、Bangkok CTA
2. **Hero** — 品牌承诺、清晰副标题、两个主要行动按钮
3. **Example briefing** — 用曼谷 Sukhumvit 示例让用户立刻理解信息产品形态
4. **Trust strip** — Area-first、价格信号、入场与礼仪、Founder-edited
5. **City guides** — 曼谷与芭提雅为 Launch guide；东京与大阪为 Preview
6. **Four questions** — 展示每篇指南回答的四类核心问题
7. **First-night playbook** — 把 PlayDude 的方法变成可执行的四步计划
8. **Editorial method** — 解释结构化判断、反炒作写法与发布边界
9. **Final CTA** — 进入曼谷或芭提雅指南
10. **Footer** — 城市入口与信息时效提醒

## 已实施的新版核心文案

### Hero

**Eyebrow**

Independent Nightlife Intelligence

**Headline**

Know Before You Go.

**Supporting copy**

Clear, practical guides for choosing the right area, venue, and time—with real-world context on prices, entry, etiquette, and what to expect.

**Primary CTA**

Explore Bangkok nightlife

**Secondary CTA**

Browse all city guides

### City section

**Headline**

Start with the place. Then choose the night.

**Supporting copy**

Bangkok and Pattaya lead the launch. Tokyo and Osaka are the next layer of the PlayDude city network.

### Knowledge section

**Headline**

Four questions every guide should answer.

**Supporting copy**

PlayDude is built for decisions, not endless browsing. Each guide turns a complicated nightlife scene into a plan you can actually use.

### Playbook section

**Headline**

A good night starts before the first venue.

**Supporting copy**

The most expensive mistake is rarely the drink. It is choosing the wrong area, arriving at the wrong time, or discovering the rules at the door.

### Editorial method

**Headline**

Useful enough to act on. Honest enough to trust.

### Final CTA

Choose the night with fewer unknowns.

## 定位一致性检查

- 保留 `Nightlife Intelligence`
- 保留 `Know Before You Go.`
- 保持英文公开网站
- 保持 Founder Editor 模式
- 保持冷静、实用、有判断但不低俗的语气
- 保留曼谷、芭提雅、东京、大阪四城框架
- 以曼谷和芭提雅作为当前 MVP 重点
- 不加入会员、登录、付款、广告、社区或后端功能
- 不把 PlayDude 扩展成泛旅游网站

## 上线前仍需完成

1. 用真实、经过核实的 venue 资料替换占位数据。
2. 为城市和区域内容增加明确的 `Last checked` 日期。
3. 在正式域名部署后补充 canonical URL、完整 Open Graph 图片与基础分析工具。
4. 使用真实手机和桌面浏览器完成一次视觉回归检查。
