# Yuanlong Ji — Academic Website

Bilingual academic website: https://yuanlongji.github.io

- English: `/`
- Chinese: `/cn/`
- Editable Jekyll source is at the repository root.
- GitHub Pages publishes the prebuilt `docs/` directory on `main`.
- The `docs/.nojekyll` file keeps deployment independent of GitHub Jekyll dependencies.

## Rebuild

Install the Ruby/Bundler versions compatible with `Gemfile.lock`, then:

```sh
bundle install
bundle exec jekyll build --destination docs
touch docs/.nojekyll
```

Commit source changes and rebuilt `docs/` together. Never commit local credentials, dependency caches, or personal application materials.
