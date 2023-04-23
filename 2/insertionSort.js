function inserion(arr){
    for(let i=1;i<arr.length;i++){
        let toinsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>toinsert){
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=toinsert
    }
    return arr;
}
const arr=[5,4,3,2,1]
console.log(inserion(arr))