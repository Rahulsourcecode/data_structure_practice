function str(value){
    let data=value.split('');
    let length=data.length;
    for(i=0;i<Math.floor(length/2);i++){
        const temp=data[i];
        data[i]=data[length-1-i];
        data[length-1-i]=temp
    }
    return data.join("");
}
const value="hello"
console.log(str(value))