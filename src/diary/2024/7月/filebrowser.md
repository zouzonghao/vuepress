docker run -d\
    -v /:/srv \
    -v /home/zzh/filebrowser/database:/database \
    -v /home/zzh/filebrowser/config:/config \
    -e PUID=$(id -u) \
    -e PGID=$(id -g) \
    -p 37102:80 \
    --restart unless-stopped \
    --name=fb \
    filebrowser/filebrowser