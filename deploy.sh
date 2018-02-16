#!/bin/bash

# echo -e "Host github.com\n\tStrictHostKeyChecking no\nIdentityFile ~/.ssh/deploy.key\n" >> ~/.ssh/config

set -e # Exit with nonzero exit code if anything fails

eval "$(ssh-agent -s)"
chmod 600 /tmp/deploy_key
ssh-add /tmp/deploy_key

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

function doCompile {
    
    bundle exec jekyll build
    
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    doCompile
    exit 0
fi

ls

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into out/
# Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
echo "git clone $REPO out"
git clone $REPO out
cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
# cd ..

# # Clean out existing contents
# rm -rf out/**/* || exit 0

# Run our compile script
doCompile

# Now let's go have some fun with the cloned repo
# cd out
git config user.name "Shunsuke KITADA"
git config user.email "septemtrio.ager@gmail.com"

ls

# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if git diff --quiet; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add -A .
git commit -m "[Travis CI] Deploy to GitHub Pages: ${SHA}"

echo "git push $SSH_REPO $TARGET_BRANCH"
git push $SSH_REPO $TARGET_BRANCH
