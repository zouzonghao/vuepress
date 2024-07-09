---
title: smb
icon: file
order: 3
author: 三七
date: 2024-07-09
category:
  - 计算机
tag:
  - smb
---
文章通过具体的配置文件示例，教授如何设置工作组、安全性选项、用户映射和DNS代理。进一步介绍了如何为特定用户配置共享目录、权限，以及如何安全地添加用户密码并重启Samba服务，确保文件共享既方便又安全。
## 1. 安装smb
```
apt-get install -y samba 
```
## 2. 修改配置文件
```
nano /etc/samba/smb.conf
```
```
[global]
   workgroup = WORKGROUP
   security = user
   map to guest = bad user
   dns proxy = no

[download]
   path = /media/zou/14t/download
   browseable = yes
   writable = yes
   read only = no
   valid users = zou
   create mask = 0775
   directory mask = 0775

[temp]
   path = /home/zou/docker/qbittorrent/temp
   browseable = yes
   writable = yes
   read only = no
   valid users = zou
   create mask = 0775
   directory mask = 0775
```
## 3. 创建Samba用户和密码
```
smbpasswd -a zou
```
## 4. 重启服务
```
systemctl restart smbd
systemctl restart nmbd
```