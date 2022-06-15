# From project root:
#
# docker image build -t <image_name> .
# docker run --name <container_name> -d -p 8081:80 <image_name>
#
FROM nginx AS deploy
# Five mime types added to https://github.com/nginx/nginx/raw/master/conf/mime.types:
COPY docker/mime.types /etc/nginx
COPY docs/ /usr/share/nginx/html/ 
