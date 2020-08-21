#!/usr/bin/env bash

cwd=$(pwd)
tempDir=$cwd/_temp
src=$tempDir/arizona-bootstrap/dist/css/img
dest=$cwd/dist

echo -e "Copying az-bootstrap img directory to dist directory..."

if [ -d $src ]; then
  if [ ! -d $dest/img ]; then    
    mkdir -p $dest
    cp -r $src $dest/img
  fi
else
  echo -e "$src directory for arizona-bootstrap doesn't exists"
fi

echo -e "Finished."
