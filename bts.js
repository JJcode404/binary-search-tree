class Node {
    constructor(d){
        this.node = d,
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