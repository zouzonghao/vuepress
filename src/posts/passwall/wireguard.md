---
# 这是文章的标题
title: 通过WireGuard加密网络传输
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: 三七
# 设置写作时间
date: 2024-06-03
# 一个页面可以有多个分类
category:
  - 网络安全
# 一个页面可以有多个标签
tag:
  - WireGuard
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在星标文章中
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
---
[[toc]]
## 1、下载WireGuard
  ```component VPCard
  title: 官网下载
  logo: https://www.wireguard.com/img/wireguard.svg
  link: https://www.wireguard.com/install/
  background: rgba(253, 230, 138, 0.15)
  ```
  <!-- ```component VPCard
  title: Windows
  logo: https://img.icons8.com/?size=100&id=OlmjyQ9zkRzF&format=png&color=000000
  link: https://wireguard.en.softonic.com/
  background: rgba(253, 230, 138, 0.15)
  ```
  ```component VPCard
  title: Android
  logo: https://img.icons8.com/?size=100&id=11138&format=png&color=000000
  link: https://wireguard.en.softonic.com/
  background: rgba(253, 230, 138, 0.15)
  ``` -->

  ## 2、设置配置
```conf
[Interface]
PrivateKey = 2BOHGBOGjMVWWdW62i8stM/qjFKwfo0UMjblRuueMnw=
Address = 172.16.0.2/32
Address = 2606:4700:110:8e3f:6c8e:4e14:966f:ce73/128
DNS = 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111, 2606:4700:4700::1001
MTU = 1280
[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
AllowedIPs = 0.0.0.0/0
AllowedIPs = ::/0
Endpoint = 162.159.195.49:3854
```
### 将上面的文本保存为wg.conf
### 导入wireguard客户端中
### 手机可以使用下面二维码导入
![](https://p.343700.xyz/file/52ef1b116183f8dab6c3d.png)
![备用二维码](https://wmimg.com/i/44/2024/06/665f0c2bdbdab.png)