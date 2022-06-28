#
# When making a deployment to an absolute URI, the URI must be hardcoded in 
# 2 places: package.json and src/settings.json.
#
# The absolute URI for the deployment, without a trailing slash:
ABSOLUTE_ROOT="https:\/\/sdkcontentstorage.z13.web.core.windows.net\/geowebmap\/1.5.0"
#
sed -i '' "s/\"homepage\"\: \".\"/\"homepage\": \"${ABSOLUTE_ROOT}\"/" package.json
sed -i '' "s/\"homepage\"\: \".\"/\"homepage\": \"${ABSOLUTE_ROOT}\"/" src/settings.json