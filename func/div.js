'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var h = require('../h');

var DoubleContent = function DoubleContent(props) {
  return h(
    'span',
    null,
    props.children
  );
};

var Perro = function Perro(props) {
  return h(
    'div',
    { 'class': props.clase },
    h(
      DoubleContent,
      null,
      props.content
    )
  );
};

exports.default = Perro;