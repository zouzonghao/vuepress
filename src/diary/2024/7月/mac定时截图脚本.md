---
title: mac定时截图脚本
icon: file
order: 3
author: 三七
date: 2024-07-19
category:
  - 计算机
tag:
  - mac脚本
---

<!-- more --> 
## 1. 创建截图脚本 
`/Users/macm2/Documents/日记/`为截图路径
```scpt
set timestamp to do shell script "date +%Y-%m-%d_%H-%M-%S"
set thePath to "/Users/macm2/Documents/日记/" & timestamp & ".png"
do shell script "screencapture -x " & quoted form of POSIX path of thePath
```
## 2. 设置定时任务

*创建任务配置文件*
```sh
nano ~/Library/LaunchAgents/com.macm2.screenshot.plist
```

*粘贴(`/Users/macm2/Documents/日记/screenshot.scpt`为脚本路径; `120`为间隔)*
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>com.yourname.screenshot</string>
	<key>ProgramArguments</key>
	<array>
		<string>/usr/bin/osascript</string>
		<string>-e</string>
		<string>do shell script \"/Applications/Script\ Editor.app/Contents/Resources/run.scpt -a /Users/macm2/Documents/日记/screenshot.scpt\"</string>
	</array>
	<key>StartInterval</key>
	<integer>120</integer>
	<key>RunAtLoad</key>
	<true/>
</dict>
</plist>
```

## 3. 运行任务
```sh
launchctl load  ~/Library/LaunchAgents/com.macm2.screenshot.plist
```

## 4. 停止任务
```sh
launchctl unload  ~/Library/LaunchAgents/com.macm2.screenshot.plist
```

>当你使用 launchctl load 命令加载了一个 launchd 作业（plist 文件），该作业将被添加到当前用户的启动代理列表中，并开始根据其配置运行。这意味着只要你的 Mac 在运行并且用户已登录，该作业就会保持活动状态，并按其设定的规则执行任务。
>重要的是要注意，launchd 作业不仅在你加载它们时开始运行，而且在系统重启或用户重新登录后也会自动恢复运行，前提是你在 plist 文件中设置了 RunAtLoad 键为 true。这是 launchd 的一大优势，因为它确保了即使在系统重启后，你的作业也能继续运行，而无需手动重新加载。