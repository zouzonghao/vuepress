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
在使用代理软件的情况下, git 的代理端口和系统代理端口不一致, 导致开启系统代理时, 无法通过 vs code 连上 github. 解决方法一是改变 git 的代理. 本文是方法二: 禁止 vs code 使用系统代理.
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

## 2. 禁用 VS code 代理
设置(齿轮) -> 配置文件 -> 显示配置文件内容 -> setting.json
在后面添加:
```
,
    "http.proxy": "",
    "https.proxy": ""
```
保存后导出
再导入
再根据导入的配置文件创建