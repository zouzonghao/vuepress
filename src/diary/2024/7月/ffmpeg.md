---
title: 使用 ffmpge 进行 av1 编码
icon: file
order: 3
author: 三七
date: 2024-07-04
category:
  - 计算机
tag:
  - ffmpge
  - av1
---
<!-- more --> 
## 1. libsvtav1_100fps

```
ffmpeg -i /Users/macm2/Documents/录屏/2024-07-03_21-18-00.mkv -c:v libsvtav1 -crf 32 -pix_fmt yuv420p -an -f avif output1.avif 
```

## 2. librav1e_3fps

```
ffmpeg -i /Users/macm2/Documents/录屏/2024-07-03_21-18-00.mkv -c:v librav1e -crf 32 -pix_fmt yuv420p -an -f avif output2.avif 
```

## 3. libaom-av1_0.3fps

```
ffmpeg -i /Users/macm2/Documents/录屏/2024-07-03_21-18-00.mkv -c:v libaom-av1 -crf 32 -pix_fmt yuv420p -an -f avif output3.avif 
```

## 4. 直接改变封装格式

```
ffmpeg -i 1.mp4 -c copy -f avif 1.avif
```
## 5. 倍速4倍

```
ffmpeg -i /Users/macm2/Documents/录屏/2024-07-05_16-54-12.mp4 -filter:v "setpts=0.25*PTS" 2024-07-05_16-54-12-4s.mp4
```
```
ffmpeg -i /Users/macm2/Documents/录屏/2024-07-05_16-54-12-4s.mp4 -s 0 -t 20 -c copy 2024-07-05_16-54-12-4s-y.mp4
```