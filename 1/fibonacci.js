function fibanocci(n){
    const ar=[0,1]
    for(let i=2;i<=n;i++){
        ar[i]=ar[i-1]+ar[i-2]
    }
    return ar
}
console.log(fibanocci(10))

//using recc
function fib(n){
    if(n<2){
        return n
    }
    return fib(n-1)+fib(n-2)
}
console.log(fib(10))
