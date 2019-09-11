#!/usr/bin/env bash

#"theo design-tokens/themes/platform.yml --dest design-tokens/.dist --transform web --format sass,map.scss,module.js,html,raw.json",

echo '# Building Design Tokens'

themeDir=design-tokens/themes
themeName=${1:-base}

parse () {
  local filePath="$themeDir/$1/$2"
  # echo "TARGET: $filePath"
  # echo "$1 --- $2"

  npx theo $filePath \
    --dest src/design-tokens/$1 \
    --transform web \
    --format module.js,raw.json

  npx theo $filePath \
    --dest src/sass/design-tokens/$1 \
    --transform web \
    --format sass,map.scss
}

echo "# Parsing .yml in design-tokens/global for $themeName ..."
if [ $themeName == "all" ]; then
  for THEME in $(ls $themeDir); do
    SUBDIR="$themeDir/$THEME"
    rm -rf design-tokens/.dist/$THEME
    rm -rf src/sass/design-tokens/$THEME

    for FILE in $(ls $SUBDIR); do
      parse "$THEME" "$FILE"
    done
  done
else
  THEME_DIR="$themeDir/$themeName"
  rm -rf design-tokens/.dist/$themeName
  rm -rf src/sass/design-tokens/$themeName

  for FILE in $(ls $THEME_DIR); do
    parse "$themeName" "$FILE"
  done
fi
