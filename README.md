# binary-search-tree

function depth(root, node){
if(root == null){
return -1; // return -1 if the tree is empty
}

    let queue = [];
    let depth = 0;

    queue.push(root);

    while(queue.length > 0){
        let levelSize = queue.length; // Number of nodes at the current level

        // Process all nodes at the current level
        for(let i = 0; i < levelSize; i++){
            const visit = queue.shift();

            if(visit.data == node){
                return depth;
            }

            if(visit.left !== null){
                queue.push(visit.left);
            }
            if(visit.right !== null){
                queue.push(visit.right);
            }
        }

        depth++;
    }

    return -1;

}
