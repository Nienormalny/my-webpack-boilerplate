// LOAD JSON FILE
const json = require('../../../assets/hello.json');
// ADD LODASH TO YOUR PROJECTS
const _ = require('lodash');
// TEMPLATE STRING
const template = (value, key) => `
    <b>__${key.toUpperCase()}__${value.toUpperCase()}__</b>
`;
// GENERATED WITH npm run add-page
console.log("__HELLO__FRIEND__ON__example__PAGE");

window.onload = () => {
    // USE LODASH TO MAP THROW THE JSON FILE
    _.map(json, (value, key) => {
        // IMPLEMENT TEMPLATE STRING TO DOM
        document.getElementById('example').insertAdjacentHTML('beforeend', template(value, key));
    });
}