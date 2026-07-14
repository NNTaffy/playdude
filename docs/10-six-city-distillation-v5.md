# PlayDude v5 六城市资料蒸馏说明

更新日期：2026-07-14

## 最终产品结构

新版只保留三个核心入口：

1. **Cities**：Bangkok、Pattaya、Hanoi、Ho Chi Minh City、Jakarta、Kuala Lumpur 六座城市。
2. **Playbooks**：把入境、住宿、交通、换钱、区域选择、预算与避坑内容整理成决策攻略。
3. **Venue Intel**：统一承载全部编辑档案和 PDF 场所记录。

独立 `/source-ledger/` 路由已经取消，首页 Method 区块已经移除。访问 `/source-ledger/` 不会再显示资料页面。

## 数据规模

| 城市 | Venue Intel | Playbooks | 主要资料月份 |
|---|---:|---:|---|
| Bangkok | 125 | 7 | 2025-07 / 2026-05 |
| Pattaya | 82 | 7 | 2026-02 |
| Hanoi | 22 | 3 | 2026-02 |
| Ho Chi Minh City | 30 | 3 | 2026 |
| Jakarta | 8 | 3 | 2025-06 |
| Kuala Lumpur | 6 | 3 | 2025-05 |
| **合计** | **273** | **26** | — |

273 条 Venue Intel 由两部分组成：原有 59 条 Bangkok / Pattaya 编辑档案，加上 214 条逐 PDF、逐页整理的来源记录。此前的 170 条没有删除或放在隐藏页面，而是完整进入 Venue Intel；新资料再增加 Ho Chi Minh City 30 条、Jakarta 8 条、Kuala Lumpur 6 条。

## 八份完整来源

- 《曼谷（保姆级）探店指南 2026年5月》
- 《曼谷日按 2025年7月全网最全介绍》完整 29 页重传版
- 《蛇美咖啡和 Thaniya 日本街（保姆级）探店指南 2025年5月》
- 《芭堤雅探店指南 2026年2月3日》
- 《越南河内探店指南 20260208》完整 16 页重传版
- 《胡志明探店指南 2026》
- 《印尼雅加达（保姆级）探店指南 2025年6月》
- 《吉隆坡（马来西亚）夜生活攻略 2025年5月》

## 新城市 Playbook 蒸馏

### Hanoi

- Arrival, Base and Cash：住宿区域、Grab、现金准备与 Fortuna Hotel 场所组合。
- Korean Town Comparison：8 家韩式全套/半套的时间、价格与比较方式。
- KTV Bill Control：房费、低消、酒水、坐台与小费拆分。

### Ho Chi Minh City

- Arrival and Stay：签证、District 1 / Landmark 81 住宿思路、Grab 与财物管理。
- Massage Formats：固定价全套、韩式半套与 Bồng Lai 单人房/别墅的选择。
- KTV Format and Budget：韩 K、中 K、薄纱与全裸格式的费用层级和账单控制。

### Jakarta

- Arrival, Transport and Cash：落地签/电子签、机场 Grab、收费公路、换钱与酒店区域。
- Choose the Complex：Classic、Travel、The Pool、Malioboro、VFour 的价格与环境取舍。
- First-Night Route：Gajah Mada 价值路线、白天 Spa 与交通退出计划。

### Kuala Lumpur

- Reality Check：法律环境、Jalan Alor 拉客风险与实体店核验。
- Kepong Comparison：Bi Hai Qing Tian、Yangguang、Apple 三店比较路线。
- City Centre vs Spa Complex：Hokkaido / Genesis 与 Four Seasons 的便利性、设施和价格差异。

## 信息处理规则

- 场所名称、区域、来源月份、PDF 页码含义、观察价格、营业时间、作者正负面判断和主要操作风险被保留。
- 原文的绝对结论被标注为 source observation，不包装成实时事实。
- 涉及未成年人的场所没有从数据中静默删除，而是保留场所记录并显示年龄风险；不提供涉及未成年人的交易指导。
- 私人中介、返佣暗号和个人微信没有进入产品。
- 违法药物教程、歧视性语言和无保护性行为建议没有进入 Playbook 或 Venue Intel。
- 所有公开内容继续执行 20+、明确同意、遵守当地法律与现场再次确认价格的底线。
