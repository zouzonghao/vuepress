---
title: RSS正则表达式
icon: file
order: 3
author: 三七
date: 2024-07-09
category:
  - 计算机
tag:
  - RSS
---

<!-- more -->

## 1. 包含'我爱你'

```
\[我爱你\]
```

## 2. 包含大于'100 GB'的

```
\[(?:100(\.\d+)?|10[1-9]|[1-9][0-9]{2,}|[2-9]\d{3,})\sGB\]
```

^(?:\[日本 AV\]|(?:\[._?\]\s_)?(?:100(\.\d+)?|10[1-9]|[1-9][0-9]{2,}|[2-9]\d{3,})\sGB)
::: details html
<div class="hint-container tip">
  <p class="hint-container-title">提示</p>
  <p>链接扩展是由我们的内置插件支持的。</p>
  <p>配置参考:
    <a href="https://vuejs.press/zh/reference/config.html#markdown-links" target="_blank" rel="noopener noreferrer">markdown.links</a>
  </p>
</div>

<div class="hint-container warning">
    <p class="hint-container-title">注意</p>
    <p>VuePress v2 目前仍处于 RC (Release Candidate) 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，有可能会发生一些微小的 Breaking Changes。因此，在每次更新 RC 版本之后，请一定要仔细阅读 <a href="https://github.com/vuepress/core/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">更新日志</a>。</p>
</div>
:::