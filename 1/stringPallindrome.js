function pallindrome(str){
    const length=str.length
    for(i=0;i<=Math.floor(length/2);i++){
        if(str[i]!=str[length-1-i]){
            return false
        }
    }
    return true
}
const str="malayalam"
console.log(pallindrome(str))
