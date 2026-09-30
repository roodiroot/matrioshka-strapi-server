#!/usr/bin/env bash
set -e

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$script_dir"

# Upload relative to the FTP account's root (already public_html).
deploy_url="${DEPLOY_FTP_URL:-ftp://s9xaqu8t.beget.tech/}"

npm run build
cd dist

uploads=()
while IFS= read -r -d '' file; do
  uploads+=(--upload-file "$file")
  uploads+=("${deploy_url%/}/${file#./}")
done < <(find . -type f -print0)

curl --netrc-file "$script_dir/../.netrc" \
  --ftp-create-dirs \
  --fail-early \
  --fail \
  --show-error \
  "${uploads[@]}"

echo "Сайт загружен!"
