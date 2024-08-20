import { prettyPrint } from "./prettyprint.js";
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
let root = null;
const array = [1,2,3,4,5,6,7]
const n = array.length;
root = sortedArraytoBts(array,0,n-1);
prettyPrint(root);