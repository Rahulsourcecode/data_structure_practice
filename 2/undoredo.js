class Stack{
    constructor(){
        this.item=[];
    }

    push(value){
        this.item.unshift(value)
    }
    pop(){
        return this.item.shift()
    }
    print(){
        console.log(this.item.join(" "))
    }
}

const stack1= new Stack()
const stack2= new Stack()

function undo(){
    stack2.push(stack1.pop())
}

function redo(){
    stack1.push(stack2.pop())
}

stack1.push(10)
stack1.push(20)

stack1.push(30)

stack1.push(40)
undo()
undo()
redo()
stack1.print()
stack2.print()

