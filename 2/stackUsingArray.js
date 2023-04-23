class Stack{
    constructor(){
        this.item=[]
    }

    push(value){
        this.item.unshift(value)
    }
    pop(){
        return this.item.shift()
    }
    print(){
        console.log(this.item.join(' '))
    }
    largest(){
        let lar=this.item[0]
        for(let i=0;i<this.item.length;i++){
            if(this.item[i]>lar){
                lar=this.item[i]
            }
        }
        return lar
    }
}
const stack =new Stack()
stack.push(30)
stack.push(40)
stack.push(44)
stack.push(56)
console.log(stack.largest())
stack.pop()
stack.print()