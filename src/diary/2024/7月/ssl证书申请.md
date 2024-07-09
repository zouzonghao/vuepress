---
title: ssl 证书申请
icon: file
order: 3
author: 三七
date: 2024-07-05
category:
  - 计算机
tag:
  - 证书
---
SSL证书申请指南，详细步骤从安装工具到证书获取，涵盖80端口和DNS验证方法
<!-- more --> 
## 1. 安装socat：
```
apt install socat
```

## 2. 安装acme：
```
curl https://get.acme.sh | sh
```

## 3. 添加软链接：
```
ln -s  /root/.acme.sh/acme.sh /usr/local/bin/acme.sh
```

## 4. 注册账号： 
```
acme.sh --register-account -m my@example.com
```

## 5.1 通过80端口申请证书：
```
ufw allow 80
```
``` 
acme.sh  --issue -d 替换为你的域名  --standalone -k ec-256
```

 
## 5.2 如果默认CA无法颁发，则可以切换下列CA：
```
#切换 Let’s Encrypt：
acme.sh --set-default-ca --server letsencrypt
#切换 Buypass：
acme.sh --set-default-ca --server buypass
#切换 ZeroSSL：
acme.sh --set-default-ca --server zerossl
```

## 6.1 通过DNS申请证书
```
acme.sh --issue -d 替换为你的域名 --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please
```
根据提示, 到DNS平台添加一条TXT解析
稍等片刻后,更新
```
acme.sh --renew -d 替换为你的域名 --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please
```