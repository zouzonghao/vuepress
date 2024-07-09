---
title: netcup-qb
icon: file
order: 3
author: 三七
date: 2024-07-06
category:
  - 计算机
tag:
  - pt
---

```
docker run -d \
  --name=qbittorrent \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -e WEBUI_PORT=8080 \
  -e TORRENTING_PORT=37999 \
  -p 8080:8080 \
  -p 37999:37999 \
  -p 37999:37999/udp \
  -v /home/zzh/qb/appdata:/config \
  -v /home/zzh/qb/download:/downloads \
  --restart unless-stopped \
  lscr.io/linuxserver/qbittorrent:latest
  ```
```
docker run -d \
  --name=qbittorrent \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -e WEBUI_PORT=37001 \
  -e TORRENTING_PORT=37101 \
  -p 37001:37001 \
  -p 37101:37101\
  -p 37101:37101/udp \
  -v /home/zou/docker/qbittorrent:/config \
  -v /media/zou/14t:/media/zou/14t \
  --restart unless-stopped \
  lscr.io/linuxserver/qbittorrent:latest
  ```