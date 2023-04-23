function binary(array,target){
    let len=array.length
    let left=0;
    let right=len
    while(left<=right){
        const middle= Math.floor((left+right)/2)
        if(target==array[middle]){
            return middle;
        }
        if(target > array[middle]){
            left=middle+1;
        }else{
            right=middle-1;
        }
    }
    return -1;
}
console.log(binary([1,2,3,4,5],0))

//linear search

function linear(array,target){
    let len=array.length;
    for(i=0;i<len;i++){
        if(target==array[i]){
            return i
        }
    }
    return -1;
}

console.log(linear([1,2,3,4,5],3))