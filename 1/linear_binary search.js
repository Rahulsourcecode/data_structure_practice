//linear search 
function linear(arr,target){
let len=arr.length;

for(i=0;i<len;i++){
    if(arr[i]==target){
        return i
    }
}
return false
}

// console.log(linear([1,2,3,4,5],5))

//binary search 

function binary(arr,target){
    let length=arr.length;
    let left=0;
    let right=length;
    while(left<=right){
    let middle =Math.floor((left+right)/2)
    if(arr[middle]==target){
        return middle;
    }
    if(target > arr[middle]){
        left =middle+1
    }else{
        right=middle-1
    }
}
return "not Found"
}

console.log(binary([1,2,3,4,5],5))

//
    