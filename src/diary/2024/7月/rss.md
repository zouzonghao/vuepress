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

^(?:\[日本AV\]|(?:\[.*?\]\s*)?(?:100(\.\d+)?|10[1-9]|[1-9][0-9]{2,}|[2-9]\d{3,})\sGB)


<div class="hint-container tip">
  <p class="hint-container-title">提示</p>
  <p>链接扩展是由我们的内置插件支持的。</p>
  <p>配置参考: 
    <a href="https://vuejs.press/zh/reference/config.html#markdown-links" target="_blank" rel="noopener noreferrer">markdown.links</a>
  </p>
</div>

