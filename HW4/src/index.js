
//import {ChatApp} from './ChatApp'

var ChatApp = require('./ChatApp');
var ReactDom = require('react-dom');
var React = require('react');
var sytle = require('./style.css');

ReactDom.render(<ChatApp />, document.getElementById('root'));
