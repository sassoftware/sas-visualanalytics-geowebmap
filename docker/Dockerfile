# Deploying the sas-visualanalytics-geowebmap in an nginx webserver.
# By default, built code is pulled from github.
# Deployed to http://localhost:8081.

# docker image build -t <image_name> .
# docker run --name <container_name> -d -p 8081:80 <image_name>

FROM nginx AS deploy
RUN curl -L https://github.com/sassoftware/sas-visualanalytics-geowebmap/releases/download/1.3.1/sas-visualanalytics-geowebmap.tar.gz | tar -xzC /usr/share/nginx/html
# COPY . /usr/share/nginx/html/  