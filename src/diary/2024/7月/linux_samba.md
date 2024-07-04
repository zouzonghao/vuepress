---
title: linux_samba
icon: file
order: 3
author: 三七
date: 2024-07-05
category:
  - 计算机
tag:
  - samba
---

[[toc]]
## 配置文件
```
sudo nano /etc/samba/smb.conf
```
确保系统中有名为zou的用户
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
```

## 添加用户密码
```
sudo smbpasswd -a zou
```

## 设置目录权限
```
sudo chown -R zou:zou /media/zou/14t/download
sudo chmod -R 0775 /media/zou/14t/download
```

## 重启服务
```
sudo systemctl restart smbd
sudo systemctl restart nmbd
```