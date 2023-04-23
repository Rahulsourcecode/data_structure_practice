function fact(n){
    let temp=1
    for(i=2;i<=n;i++){
        temp=temp*i
    }
    return temp;
}

console.log(fact(5))


//recursion

function rec(n){
    if(n==0){
        return 1
    }
    return n* rec(n-1)
}
console.log(rec(5))