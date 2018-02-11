const Node = require('./Node.js');


let root = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

root.setLeft(node1);
root.setRight(node2)
node1.left = node3;
node1.right = node4
node3.left = node5;

pathTo = (root, nodeId, array) => {
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

lca = (root, node1, node2) => {
    if (root && node1 && node2) {
	const pathForNode1 = pathTo(root, node1.id);
	const pathForNode2 = pathTo(root, node2.id);
	const ret = pathForNode1.map((node1Path) => pathForNode2.find((node2Path) => node1Path === node2Path));

	return ret.find((elem) => elem !== undefined);
    }
}

console.log('lca = ', lca(root, node5, node4));

