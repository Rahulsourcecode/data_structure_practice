function rev(str){
    let array=str.split('')
    let len= array.length
    for(i=0;i<=Math.floor(len/2);i++){
        const temp=array[i];
        array[i]=array[len-1-i]
        array[len-1-i]=temp;
    }
    return array.join('')
}

const str="hello"
console.log(rev(str))