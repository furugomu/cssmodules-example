import React from 'react';
import {render} from 'react-dom';

const style = require('./style.css');

render(
  <p className={style.hoge}>こんにちは</p>,
  document.querySelector('main'));
