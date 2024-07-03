---
title: git备份图床
icon: file
order: 3
author: 三七
date: 2024-07-03
category:
  - 计算机
tag:
  - github
  - 图床
---

## 1、**设置SSH密钥对**

### 1.1、终端运行，生成密钥对

```bash
ssh-keygen -t rsa -b 4096
```

passphrase 为空即可

### 1.2、将公钥

## 1、github设置

```bash
git init
 
git remote origin set-url git@github.com:sanqi730/images2.git
#  git remote add main git@github.com:sanqi730/images2.git

git clone git@github.com:sanqi730/images2.git

```

