---
title: nginx反向代理设置证书
icon: file
order: 3
author: 三七
date: 2024-07-03
category:
  - 计算机
tag:
  - nginx
---

[[toc]]
本文分享了如何在Nginx中配置SSL证书以实现安全的HTTPS连接，适用于需要反向代理和加密通信的开发者。

```
server {
	listen 443 ssl http2;
	server_name file.san.sanqiz.de;
	ssl_certificate /root/.acme.sh/file.san.sanqiz.de_ecc/fullchain.cer; #证书位置
	ssl_certificate_key /root/.acme.sh/file.san.sanqiz.de_ecc/file.san.sanqiz.de.key; #私钥位置

	location / {
		proxy_pass http://127.0.0.1:37001;
		proxy_redirect off;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto http;
	}
}
```