# docker/nginx/Dockerfile
FROM nginx:1.20
ADD backend-portal.nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=build /app/build /usr/share/nginx/html