#!/usr/bin/env bash
set -e

npm run build
cd dist

uploads=()
while IFS= read -r -d '' file; do
  uploads+=(--upload-file "$file")
  uploads+=("ftp://s9xaqu8t.beget.tech/public_html/${file#./}")
done < <(find . -type f -print0)

curl --netrc-file "/Users/maxim/Desktop/мой сайт/matryoshka/.netrc" \
  --ftp-create-dirs \
  --fail-early \
  --fail \
  --show-error \
  "${uploads[@]}"

echo "Сайт загружен!"