# My webpack boilerplate

This is my setting for webpack boilerplate.
You are able to make modules with html tags.
It is very easy to use for begginers.

### What inside?
1. Hot reloading on changes or save. (HTML/JS/SASS).
2. Importing HTML files in HTML files with new **tag** `<require path="./path/to/your/html/file"></require>`.
3. Posibility to use packages inside `.js` files with `require('package')`.
4. Minify code in build process.
5. And more... just check it out in packages.json to get more info about packeges i added to it. Same for webpack.config.js

### Do you see any problems?
Make new issue and i will look at it.

## How to use?
💾 1. `git clone` - Standard :-)

⚙️ 2. `npm install` - to install all packages.

🧰 3. `npm start` - to start your `http://localhost:3000`

💚 4. `npm build` - to build your product.

## A little bit automation for you.

Create new page:
1. `npm run add-page <your page name>`:
 - it will create new directory inside `./src/pages/` with name of your defined page.
 - it will create inside your **new** directory files: `yourpagename.html`, `yourpagename.js`, `yourpagename.scss`
 - it will add `<script>` inside **yourpagename.html** with src to **yourpagename.js**
 - it will add `@import "../pages/yourpagename/yourpagename.scss";` to `./src/styles/imports.scss`;
 - it will add `<require path="../pages/yourpagename/yourpagename.html"></require>` to `./src/pages/homepage/homepage.html`
 
2. `npm run remove-page <your page name>`:
 - it will remove directory with **yourpagename** inside `./src/pages/`
 - it will remove `@import "../pages/yourpagename/yourpagename.scss"` from `./src/styles/imports.scss`
 - it will remove `<require path="../pages/yourpagename/yourpagename.html"></require>` from `./src/pages/homepage/homepage.html`
