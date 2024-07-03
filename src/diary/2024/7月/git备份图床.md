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

### 1.2、在github官网上添加密钥
上一步生成成功后，把 .ssh文件夹下的 id_rsa.pub 内容拷贝到 github  新建的 SSH keys 中

![](https://i.730307.xyz/202407040237022.avif)



## 2、github连接
电脑上终端运行:
```bash
git init
 
git remote origin set-url git@github.com:sanqi730/images2.git
#  git remote add main git@github.com:sanqi730/images2.git

git clone git@github.com:sanqi730/images2.git
```

