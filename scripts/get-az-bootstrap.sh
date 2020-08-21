#!/usr/bin/env bash

# repo setting
repo=git@github.com:az-digital/arizona-bootstrap.git
cwd=$(pwd)
tempDir=$cwd/_temp
dest=$tempDir/arizona-bootstrap/

mkdir -p $tempDir

# download repo
if [ -d $dest ]; then
  echo -e "Directory $dest already exists, skipping..."
else
  mkdir $dest
  git clone $repo $dest

  echo -e "Running $cloneCmd..."
fi

echo -e "Finished."
