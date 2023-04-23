function pall(str){
let len=str.length;
 for(i=0;i<Math.floor(len/2);i++){
  if(str[i]!=str[len-1-i]){
    return false;
  }
  return true;
 }
}


const array=""
console.log(pall(array))