#!/bin/bash

REMOTE=$(git config --get-regex remote\..+\.url | cut -d . -f 2)
BRANCH=${1:-dev}

git fetch --tags $REMOTE
git merge --ff-only $REMOTE/$BRANCH

last_tag="$(expr "$(git describe --tags)" : "\(.*\)-[0-9]*-g[0-9a-f][0-9a-f][0-9a-f].*")"

git log --pretty=tformat:"• %b (%s)" --merges $last_tag.. --grep "pull request" | perl -pe 's/Merge pull request (#\d+) from [^\)]+/$1/; s/\b([A-Z]+-\d+)\b/`\1`/g'
