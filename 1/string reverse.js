function rev(cred){
const toarray=cred.split("")
const len=toarray.length
for(i=0;i<Math.floor(len/2);i++){
    const temp=toarray[i]
    toarray[i]=toarray[len-1-i]
    toarray[len-1-i]=temp
}
return toarray.join("")
}

const cred="hello"

console.log(rev(cred))