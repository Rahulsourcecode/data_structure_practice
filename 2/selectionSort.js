function selection(arr){
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!=i){
            const temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp;
        }
    }
    return arr;
}
const arr=[5,4,3,2,1]
console.log(selection(arr))