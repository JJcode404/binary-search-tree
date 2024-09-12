import { sortedArraytoBts } from "./bts.js";
import { prettyPrint } from "./prettyprint.js";

function randomNumberBts(){
    const randomArray = [];
    for(let i = 1; i < 100; i++){
        randomArray.push(i);
    }
    const n = randomArray.length
    const node = sortedArraytoBts(randomArray,0,n-1)
    return node
}

const radomBts = randomNumberBts();

prettyPrint(randomNumberBts())