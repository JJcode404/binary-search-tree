import { prettyPrint } from "./prettyprint.js";
import { sortedUniqueArr } from "./mergesort.js";
class Node {
    constructor(d){
        this.data = d,
        this.left = null,
        this.right = null
    }
};

function sortedArraytoBts(array,start,end){
    if(start > end){
        return null;
    }
    const mid = parseInt((start + end)/2)
    const node = new Node(array[mid])
    node.left = sortedArraytoBts(array,start,mid-1)
    node.right = sortedArraytoBts(array,mid+1,end)
    
    return node;
};
function findNOde(root, node){
    if (root === null || root.data === node) {
        return root;
    }
    if(node < root.data){
        return findNOde(root.left, node)
    }else if (node > root.data){
        return findNOde(root.right, node);
    }
    return node;
}
function levelOder(root,cb){
    if(cb == null){
        throw new Error ("callback required")
    }
    if(root === null){
        return
    }

    const queue = [];
    queue.push(root)

    while(queue.length > 0){
        const visit = queue.shift();
        cb(visit.data)
    
        if(visit.left !== null ){
            queue.push(visit.left);
        }
        if(visit.right !== null){
            queue.push(visit.right);
        }
        
    }

}
function postOrder(root, cb){
    if(cb == null){
        throw new Error ("callback required")
    }
    if(root == null) return
    postOrder(root.left, cb);
    postOrder(root.right, cb);
    cb(root.data);
} 
function preOrder(root, cb){
    if(cb == null){
        throw new Error ("callback required")
    }
    if(root == nul) return

    console.log(root.data, cb);
    preOrder(root.left, cb)
    preOrder(root.rightm, cb)

}

let root = null;
const n = sortedUniqueArr.length;
root = sortedArraytoBts(sortedUniqueArr,0,n-1);
prettyPrint(root); 
// findNOde(root, 8);
const node4 = findNOde(root, 5)
// prettyPrint(node4);
postOrder(root, (node) => console.log(node));