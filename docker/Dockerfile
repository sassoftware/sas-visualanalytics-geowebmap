# Deploying the sas-visualanalytics-geowebmap in an nginx webserver.
# By default, built code is pulled from github.
# Deployed to http://localhost:8081.

# EITHER:
#
# docker image build -t <image_name> .
# docker run --name <container_name> -d -p 8081:80 <image_name>
#
# OR:
#
# docker-compose up
#

FROM nginx AS deploy
# Five mime types added to https://github.com/nginx/nginx/raw/master/conf/mime.types:
COPY ./mime.types /etc/nginx
RUN curl -L https://github.com/sassoftware/sas-visualanalytics-geowebmap/releases/download/v1.5.0/sas-visualanalytics-geowebmap.tar.gz | tar -xzC /usr/share/nginx/html
# Or, from ../build :
# COPY . /usr/share/nginx/html/ 