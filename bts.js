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

let root = null;
const n = sortedUniqueArr.length;
root = sortedArraytoBts(sortedUniqueArr,0,n-1);
prettyPrint(root); 
// findNOde(root, 8);
const node4 = findNOde(root, 5)
prettyPrint(node4);