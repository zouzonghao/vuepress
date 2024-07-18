---
title: ffmpeg生成关键帧
icon: file
order: 3
author: 三七
date: 2024-07-16
category:
  - 计算机
tag:
  - ffmpge
---

<!-- more --> 
```bash
ffmpeg -i "input.mp4" -vf "select='eq(pict_type\,I)'" -vsync vfr output_%03d.png
```