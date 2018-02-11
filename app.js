'use strict'

const lca = require('./src/lca');
const initTree = require('./src/initTree');

const root = initTree();

console.log('lca = ', lca(root, 5, 8));
