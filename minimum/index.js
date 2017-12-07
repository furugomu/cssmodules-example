'use strict';

const style = require('./style.css');
// import style from './style.css'; // webpack のおかげでこちらでも OK

document.write(`<p class=${style.hoge}>こんにちは</p>`);
