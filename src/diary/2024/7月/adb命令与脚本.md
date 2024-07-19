---
title: adb命令与脚本
icon: file
order: 3
author: 三七
date: 2024-07-19
category:
  - 计算机
tag:
  - adb
---

<!-- more --> 
## 1. 手机自动拍照adb.sh
```sh
#!/bin/bash

# 相机应用的包名
CAMERA_PACKAGE="com.sonyericsson.android.camera"
SCREENSHOT_DIR="/Users/macm2/Documents/日记"
# FTP server details
FTP_SERVER="192.168.2.65"
FTP_PORT=7275
REMOTE_DIR="/device/DCIM/100ANDRO"
LOCAL_DIR="/Users/macm2/Documents/日记/拍照"

while true; do

    # 记录当前时间
    START_TIME=$(date +%s)

    # 亮屏
    screen_state=$(adb shell "dumpsys window policy | grep 'screenState='")
    if [[ $screen_state == *"screenState=2"* ]]; then
        echo "屏幕已点亮"
    else
        echo "屏幕未点亮"
        echo 亮屏
        adb shell input keyevent 26
        echo sleep 3
        sleep 3
    fi


    # 检查相机应用是否在运行
    if ! adb shell dumpsys activity top | grep -q "TASK com.sonyericsson.android.camera"; then
        # 如果不在运行，则进入拍照模式
        echo 进入拍照模式
        adb shell am start -a android.media.action.IMAGE_CAPTURE
        # 等待直到照片被拍摄，这里我们简单地等待5秒
        echo sleep 3
        sleep 3
    fi

    # 模拟点击快门按钮
    echo 快门
    adb shell input keyevent 24
    # 等待照片保存完成
    echo sleep 3
    sleep 3
    # 获取当前时间戳作为文件名
    TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S)
    # 构建完整的文件路径
    FILEPATH="$SCREENSHOT_DIR/$TIMESTAMP.png"
    # 执行截图并保存
    screencapture -x "$FILEPATH"

    echo 息屏
    adb shell input keyevent 26
    date +"%Y-%m-%d %H:%M:%S"
    lftp -c "open -u anonymous,anonymous $FTP_SERVER:$FTP_PORT; mirror $REMOTE_DIR $LOCAL_DIR"
    
    # 计算本次循环的实际用时
    ELAPSED_TIME=$(( $(date +%s) - START_TIME ))
    echo 本轮耗时:$ELAPSED_TIME

    # 计算还需要等待多少时间才能达到60秒
    WAIT_TIME=$((60 - ELAPSED_TIME))

    # 如果WAIT_TIME是正数，说明还没到一分钟，需要等待
    if [ $WAIT_TIME -gt 0 ]; then
        sleep $WAIT_TIME
    fi

done
done
```

## 2. 命令
== 删除照片 == (从6到73)
```bash
for i in $(seq 6 73); do num=$(printf "%04d" $i); adb shell "rm /sdcard/DCIM/100ANDRO/DSC_${num}.JPG"; done
```
== 安装apk == (把安装包拖进来)
```bash
 adb install -r -g 
```
