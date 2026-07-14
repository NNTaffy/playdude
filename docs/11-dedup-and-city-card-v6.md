# PlayDude v6 去重与城市卡优化说明

## 本次结果

- Venue Intel 从 273 条原始记录整理为 **214 个独立场所档案**。
- 合并了 58 组同城同名重复记录，以及 1 组别名记录：Bangkok 的 `Baccara` 与 `Baccara Soi Cowboy`。
- 合并不是删除：编辑档案、PDF 名称、页码、观察价格、原始笔记、状态和链接会共同保留在同一个场所详情页的 `Merged field notes` 区域。
- 搜索结果中同一个场所只出现一次；有多条资料的卡片会标注 `N field records merged`。

## 六城市 Venue Intel 数量

| 城市 | 独立场所档案 |
|---|---:|
| Bangkok | 103 |
| Pattaya | 45 |
| Hanoi | 22 |
| Ho Chi Minh City | 30 |
| Jakarta | 8 |
| Kuala Lumpur | 6 |
| **合计** | **214** |

## 界面调整

- 城市卡将深色视觉区与白色正文区拆开，城市名固定在 17rem 高的视觉区内；Ho Chi Minh City 和 Kuala Lumpur 使用独立的长标题字号规则。
- 移除全站页头右侧的 `Explore six cities` 按钮，保留 Cities、Playbooks、Venue intel 三个主导航。
- 首页城市介绍改为 `Explore Southeast Asia`，用具体城市与夜生活场景说明产品价值，去掉难理解的 `Different systems` 表述。

## 内容边界

本次只合并可以确认属于同一城市、同一场所的重复档案，没有替用户筛除场所。所有独立场所继续保留，来源中的不同观察也不会因为去重而消失。
