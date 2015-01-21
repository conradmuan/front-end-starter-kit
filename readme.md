# Gulp Front End Starter Kit

This is a boilerplate I clone when I want to build something quick without having to set up gulp to build js and less.

No bower - since I npm everything anyway, I opt for browserify to bundle a javascript file (which is why there's jquery and bootstrap in `package.json`)

Tasks are separated out on their own in `gulp/<name>-task.js`

## Usage

- `$ gulp js`: browserify bundles `dist/main.js` (with sourcemaps) and `dist/main.min.js`
- `$ gulp less`: less to `dist/main.css` (with `dist/main.css.map` sourcemaps), `dist/main.min.css`, auto-prefixed
- browsersync for autoreload, `$ gulp browser-sync` to start browser-sync server manually for whatever reason
- `$ gulp` runs everything above
- `$ gulp watch`: watches any `src/js/**/*.js` and `src/less/**/*.less` for changes and runs their respective tasks