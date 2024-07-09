---
title: xseed修改种子
icon: file
order: 3
author: 三七
date: 2024-07-06
category:
  - 计算机
tag:
  - pt
---

使用xseed工具修改种子文件的技术过程。文章从克隆GitHub仓库开始，通过环境配置、依赖安装到批量修改种子文件的命令行操作，为读者提供了一个完整的种子编辑解决方案，是PT（Private Tracker）用户和种子管理爱好者的实用指南。
```
git clone https://github.com/whatbox/xseed  

ln -s /usr/local/bin/python3 /usr/local/bin/python

pip install bencode.py 

# 批量修改目录下torrent文件的track服务器
./xseed -ea http://test.com/announce ./*.torrent 
```