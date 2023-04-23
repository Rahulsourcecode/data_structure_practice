function isPrime(num){
if(num<2){
    return false
}
   for(i=2;i<num;i++){
    if(num%2==0){
        return false;
    }
   }
   return true;

}

// console.log(isPrime(3))

//recc
function fact(n,i=2){
    if(n==2){
        return true;
    }
    if(n<2 || n%i==0){
        return false;
    }
    if(i*i >n){
        return true
    }
   return fact(n,i+1)
}

console.log(fact(35))