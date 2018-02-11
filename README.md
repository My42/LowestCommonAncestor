# LowestCommonAncestor
In graph theory and computer science, the lowest common ancestor (LCA) of two nodes v and w in a tree T is the lowest node that has both v and w as descendants

# Launch LCA app
`node app.js`

# Init your binary tree

- Edit src/initTree.js

```
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
```

- Describes this schema: </br>
![alt text](https://github.com/My42/LowestCommonAncestor/blob/master/binaryTree.png)
