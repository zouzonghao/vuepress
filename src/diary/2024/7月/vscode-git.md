---
title: 在 VS code 中禁止使用系统代理, 解决 github 无法访问
icon: file
order: 3
author: 三七
date: 2024-07-09
category:
  - 计算机
tag:
  - vscode
  - github
---
在使用代理软件的情况下, git 的代理端口和系统代理端口不一致, 导致开启系统代理时, 无法通过 vs code 连上 github. 解决方法一是改变 git 的代理. 本文是方法二: 关闭系统代理.
<!-- more --> 
## 1. 配置 hosts 文件
访问:[https://ip.tool.chinaz.com/github.com](https://ip.tool.chinaz.com/github.com)
将获取到的 ip 填入 hosts 文件中
Linux \ macOS
```
sudo nano /etc/hosts
```
Windows
```
%SystemRoot%\System32\drivers\etc\hosts
```

## 2. 关闭系统代理

然后git push