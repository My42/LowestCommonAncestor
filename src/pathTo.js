'use strict'

const pathTo = (root, nodeId, array) => {
    if (array == undefined) array = [];
    if (root && (root.left || root.right) && (root.id != nodeId)) {
	const right = root.right;
	const left = root.left;
	
	if (left) {
	    array.push[left.id];
	    pathTo(left, nodeId, array);
	}
	if (right) {
	    array.push[right.id];
	    pathTo(right, nodeId, array);
	}
	if (array.find((elem) => (left && elem === left.id) || (right && elem === right.id)))
	    array.push(root.id);
    } else if (root.id == nodeId) {
	array.push(root.id);
    }
    return array;
}

module.exports = pathTo;
