function heapSort(arr){
    buildheap(arr)
    for(let i=arr.length-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        shiftDown(arr,0,i)
    }
}

function buildheap(arr){
    const n= arr.length
    for(let i=Math.floor((n)/2)-1;i>=0;i--){
        shiftDown(arr,i,n)
    }
}

function shiftDown(arr,i,n){
    let largest =i
    let left=2*i+1;
    let right=2*i+2
    if(left < n && arr[left] > arr[largest]){
        largest =left
    }
    if(right <n && arr[right] > arr[largest]){
        largest=right
    }
    if(largest!=i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        shiftDown(arr,largest,n)

    }
}

const arr=[34,61,23,18,19,45]
heapSort(arr)
console.log(arr)