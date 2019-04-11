FROM ubuntu:18.10

RUN apt-get update \
    && apt-get install -y \
        git \
        build-essential libpcre3 libpcre3-dev libssl-dev zlib1g zlib1g-dev gcc

# Dependencies additional 
RUN apt-get install -y \
        sudo wget time ffmpeg nodejs npm sshpass net-tools nvme-cli

WORKDIR /github

# Clone the git repo
RUN git clone https://github.com/sergey-dryabzhinsky/nginx-rtmp-module.git

# Download nginx
RUN wget http://nginx.org/download/nginx-1.12.2.tar.gz
RUN tar -xf nginx-1.12.2.tar.gz
RUN cd nginx-1.12.2 && sed -i 's/CFLAGS="$CFLAGS -Wno-unused-parameter"/CFLAGS="$CFLAGS -Wno-unused-parameter -Wno-cast-function-type"/' auto/cc/gcc && ./configure --with-http_ssl_module --add-module=../nginx-rtmp-module && make && make install

# Install videojs components
RUN npm install --save-dev video.js && npm install videojs-playlist && npm install videojs-playlist-ui && npm install --save videojs-mux

# Clean Up
RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir -p /var/log/nginx/
RUN mkdir -p /var/www/html/
RUN mkdir -p /var/nginx-streaming/
RUN mkdir -p /var/www/html/css/
RUN mkdir -p /var/www/html/js/
RUN mkdir -p /var/www/html/img/
RUN mkdir -p /var/www/html/vendor/videojs-playlist-ui/

# Copy app specific files
COPY nginx.conf /usr/local/nginx/conf/
COPY mime.types /usr/local/nginx/conf/
COPY cors_support /usr/local/nginx/conf/
COPY *.html /var/www/html/
COPY ./css/* /var/www/html/css/
COPY ./js-work/advanced-*.js /var/www/html/js/
COPY ./img/* /var/www/html/img/
COPY ./vendor/* /var/www/html/vendor/videojs-playlist-ui/

RUN ln -s /github/node_modules/ /var/www/html/node_modules
RUN ln -s /github/node_modules/videojs-playlist-ui/dist/ /var/www/html/dist

# Add run script
COPY run .
RUN chmod +x run

ENTRYPOINT ["./run"]
