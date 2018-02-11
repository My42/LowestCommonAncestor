'use strict'

class Node {
    constructor(id) {
	if (id === undefined) throw Error('Invalid id node.');
	this.id = id;
	this.left = null;
	this.right = null;
    }

    setRight(child) {
	this.right = child;
    }

    setLeft(child) {
	this.left = child;
    }

}

module.exports = Node;
