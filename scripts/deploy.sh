#!/bin/bash

# skip if build is triggered by pull request
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

set -e # Exit with nonzero exit code if anything fails

echo -e "Host github.com\n\tStrictHostKeyChecking no\nIdentityFile ~/.ssh/deploy.key\n" >> ~/.ssh/config

openssl aes-256-cbc -K $encrypted_0c5788daacb5_key -iv $encrypted_0c5788daacb5_iv -in deploy_paper-survey_key.enc -out ~\/.ssh/deploy_paper-survey_key -d

# cleanup "_site"
rm -rf _site
mkdir _site


git clone git@github.com:shunk031/paper-survey -b gh-pages _site

# build with Jekyll into "_site"
bundle exec jekyll build

cd _site
git config user.email "septemtrio.ager@gmail.com"
git config user.name "Shunsuke KITADA"
git add --all
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --force origin gh-pages
