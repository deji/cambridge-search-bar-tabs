#!/usr/bin/env bash
if [ -e '/tmp/release.npm' ]; then
   rm -Rf /tmp/release.npm
fi

mkdir -p /tmp/release.npm/js
mkdir -p /tmp/release.npm/css

cp package.json /tmp/release.npm
cp README.md /tmp/release.npm
cp js/custom.js /tmp/release.npm/js/primo-explore-cambridge.js
cp css/custom1.css /tmp/release.npm/css

cd /tmp/release.npm

npm pack

#Enable commands below if you wish to publish to Npm
npm publish
cd -
#rm -Rf /tmp/release.npm
