function pallindrome(value){
    let length=value.length;
    for(i=0;i<Math.floor(length/2);i++){
        if(value[i]!=value[length-1-i]){
            return false;
        }
    }
    return true;
}

const value="malayalam"
console.log(pallindrome(value))