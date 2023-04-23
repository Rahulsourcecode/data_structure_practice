function Bubble(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                const temp=arr[i];
                arr[i]=arr[j]
                arr[j]=temp;
            }
        }
    }
    return arr;
}
const arr=[5,4,3,2,1]
console.log(Bubble(arr))