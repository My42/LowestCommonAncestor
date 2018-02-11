const Node = require('./Node');

module.exports = () => {
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
    return root;
}
