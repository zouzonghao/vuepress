docker run -d --volume /home/zou/docker/jellyfin/config:/config --volume /home/zou/docker/jellyfin/cache:/cache --volume /media/zou/14t/download:/downlord --net=host --restart=always --device /dev/dri/renderD128:/dev/dri/renderD128 --device /dev/dri/card0:/dev/dri/card0 --name="jellyfin" jellyfin/jellyfin

进入 Jellyfin 控制台 > 插件 > 存储库，点击添加 
https://cdn.jsdelivr.net/gh/metatube-community/jellyfin-plugin-metatube@dist/manifest.json


```yml
version: "3"
services:
    metatube:
        image: metatube/metatube-server:latest
        container_name: metatube
        ports:
            - 37111:8080
        restart: unless-stopped
        depends_on:
            - postgres
        environment:
            - HTTP_PROXY=
            - HTTPS_PROXY=
        volumes:
            - run:/var/run
        command: -dsn "postgres://metatube:metatube@/metatube?host=/var/run/postgresql" -port 8080 -db-auto-migrate -db-prepared-stmt

    postgres:
        image: postgres:15-alpine
        container_name: metatube-postgres
        restart: unless-stopped
        environment:
            - POSTGRES_USER=metatube
            - POSTGRES_PASSWORD=metatube
            - POSTGRES_DB=metatube
        volumes:
            - ./db:/var/lib/postgresql/data
            - run:/var/run
        command: "-c TimeZone=Asia/Shanghai -c log_timezone=Asia/Shanghai -c listen_addresses='' -c unix_socket_permissions=0777"

volumes:
    run:

```