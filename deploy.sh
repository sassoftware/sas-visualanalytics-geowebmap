#!/bin/sh

# Note: Copies build from DIST_DIR to docs/ and
# adds a few files.
#
# To verify deployment, update the VERSION_NOTE
# before push.
#
# GitHub pages currently configured to publish
# from the "docs" directory of the "deploy" 
# branch.

VERSION_NOTE="sas-visualanalytics-geowebmap v1.5.0a"
DIST_DIR=../sas-visualanalytics-geowebmap/build/

rm -r docs
mkdir docs
cp -r ${DIST_DIR} docs/
# echo "User-agent: *\nDisallow: /\n" > docs/robots.txt
echo "${VERSION_NOTE}\n" > docs/version.html
echo "${VERSION_NOTE}\n" > docs/index.md
echo "== Deployment complete =="