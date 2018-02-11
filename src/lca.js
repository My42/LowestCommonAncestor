'use strict'

const pathTo = require('./pathTo');

const lca = (root, id1, id2) => {
    if (root && id1 && id2) {
	const pathForNode1 = pathTo(root, id1);
	const pathForNode2 = pathTo(root, id2);
	let ret = pathForNode1.map((node1Path) => pathForNode2
				     .find((node2Path) =>
					   node1Path === node2Path));
	ret = ret.find((elem) => elem !== undefined)
	return (ret) ? (ret) : (null);
    }
}

module.exports = lca;
