#Import base image
FROM debian:trixie

#Prepare system

RUN apt update -y && apt upgrade && \
    apt install -y curl gnupg2 ca-certificates lsb-release debian-archive-keyring

# Curl the official nginx signing key

RUN curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

# Add the nginx repository

RUN echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
    https://nginx.org/packages/debian `lsb_release -cs` nginx" \
        | tee /etc/apt/sources.list.d/nginx.list

# Set up repository pinning

RUN printf "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" \
    | tee /etc/apt/preferences.d/99nginx

RUN apt update && apt install -y nginx

COPY index.html /usr/share/nginx/html/index.html

CMD [ "nginx", "-g", "daemon off;" ]
