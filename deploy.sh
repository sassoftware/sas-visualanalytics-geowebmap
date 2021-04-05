#!/bin/sh

VERSION_NOTE="sas-visualanalytics-geowebmap v1.3.4"
DIST_DIR=../sas-visualanalytics-geowebmap/dist/

rm -r docs
mkdir docs
cp -r ${DIST_DIR} docs/
echo "User-agent: *\nDisallow: /\n" > docs/robots.txt
echo "${VERSION_NOTE}\n" > docs/version.html
echo "== Deployment complete =="