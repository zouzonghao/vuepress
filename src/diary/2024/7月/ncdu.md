---
title: 磁盘空间分析工具--ncdu
icon: file
order: 3
author: 三七
date: 2024-07-09
category:
  - 计算机
tag:
  - ncdu
---

<!-- more --> 
## 1. 安装
```
apt-get install ncdu
```
## 2. 使用
```
ncdu /path/to/directory
```
## 3. 效果
```
ncdu 1.18 ~ Use the arrow keys to navigate, press ? for help
-------------------------------------------------------------------------------------------------------------------------



  ┌───Scanning...────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │                                                                                                                  │
  │ Total items: 326662   size:  25.3 GiB                                                                            │
  │ Current item: /home/zzh/pastebin-worker/node_modules/sourcemap-codec/dist/sourcemap-codec.es.js                  │
  │                                                                                                                  │
  │ Warning: error scanning /proc/375689/fdinfo/3                                                                    │
  │  some directory sizes may not be correct                                                                         │
  │                                                                                                                  │
  │  Scann                                                                                          Press q to abort │
  └──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘





 No items to display.

```
```
ncdu 1.18 ~ Use the arrow keys to navigate, press ? for help
--- / -------------------------------------------------------------------------------------------------------------------
   18.3 GiB [#################] /home
    4.5 GiB [####             ] /var
    2.7 GiB [##               ] /usr
    2.0 GiB [#                ]  swapfile
  332.4 MiB [                 ] /root
   86.9 MiB [                 ] /boot
   16.9 MiB [                 ] /opt
    4.6 MiB [                 ] /etc
    1.3 MiB [                 ] /run
   48.0 KiB [                 ] /tmp
e  16.0 KiB [                 ] /lost+found
    8.0 KiB [                 ] /media
e   4.0 KiB [                 ] /srv
e   4.0 KiB [                 ] /mnt
.   0.0   B [                 ] /proc
    0.0   B [                 ] /sys
    0.0   B [                 ] /dev
@   0.0   B [                 ]  initrd.img
 Total disk usage:  28.0 GiB  Apparent size: 128.0 TiB  Items: 376460

```