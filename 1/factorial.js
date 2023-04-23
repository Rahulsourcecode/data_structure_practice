function fact(n){
    temp=1;
    for(let i=2;i<=n;i++){
        temp=temp*i
    }
    return temp;
}
console.log(fact(5))

//using recc

function factrec(n){
    if(n==0){
    return 1;
    }
    return n*factrec(n-1)
}
console.log(factrec(5))