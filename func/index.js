'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var h = require('../h');
var Perro = require('./div');

var Vaca = exports.Vaca = function Vaca() {
  return h(
    'div',
    { 'class': 'perro' },
    'porque',
    h(Perro, { clase: 'pero', content: 'vaca' }),
    h(
      'div',
      null,
      h(
        'form',
        { id: 'form1' },
        h('input', { type: 'text', value: 'double' })
      )
    )
  );
};