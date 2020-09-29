function requireAll(req) {req.keys().forEach(req);}

console.time = () => {};
console.timeEnd = () => {};

// requireAll(require.context('./components/', true, /\.js$/));
// requireAll(require.context('./components/', true, /\.html$/));
require('./styles/styles.scss');
require('./pages/homepage/page.js');

if (module.hot) {module.hot.accept();}