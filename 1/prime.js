function isPrime(n){
    if(n<2){
        return false
    }
    else{
        for(let i=2;i<n;i++){
            if(n%i==0){
                return false
            }
        }

    }
    return true
}

console.log(isPrime(37))

//using recc

function prime(n,i=2){
    if(n==2){
        return true
    }
    if(n<2 || n%i==0){
        return false
    }
    if(i*i>n){
        return true
    }
    return prime(n,i+1)
}
console.log(prime(3))