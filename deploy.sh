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

VERSION_NOTE="sas-visualanalytics-geowebmap v1.4.0"
DIST_DIR=PATH_TO_PROJECT/sas-visualanalytics-geowebmap/build/

rm -r docs
mkdir docs
cp -r ${DIST_DIR} docs/
# echo "User-agent: *\nDisallow: /\n" > docs/robots.txt
echo "${VERSION_NOTE}\n" > docs/version.html
echo "${VERSION_NOTE}\n" > docs/index.md
echo "== Deployment complete =="