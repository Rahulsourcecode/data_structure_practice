function fib(n){
 const arr=[0,1]
 for(i=2;i<=n;i++){
    arr[i]=arr[i-2]+arr[i-1]
 }
 return arr
}

console.log(fib(10))

//using recursion 

function rec(n){
    if(n<2){
        return arr=n;
    }
    return rec(n-1)+rec(n-2)
}

console.log(rec(10))