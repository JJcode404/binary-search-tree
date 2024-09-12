import { prettyPrint } from "./prettyprint.js";
import { Node } from "./bts.js";

function insertNode(root,data){
    if(root === null){
        return new Node(data)
    }
    if(root.data === data){
        return root;
    };
       
    if (data < root.data)
        root.left = insertNode(root.left, data);
    else if (data > root.data)
        root.right = insertNode(root.right, data);

    return root;
}
function inorder(root) {
    if (root !== null) {
        inorder(root.left);
        console.log(root.data + " ");
        inorder(root.right);
    }
}
// let root =  new Node(30);
// root = insertNode(root, 50);
// root = insertNode(root, 30);
//  root = insertNode(root, 20);
//  root = insertNode(root, 40);
//  root = insertNode(root, 70);
//  root = insertNode(root, 60);
//  root = insertNode(root, 80);
//  prettyPrint(root)

export{
    insertNode
}