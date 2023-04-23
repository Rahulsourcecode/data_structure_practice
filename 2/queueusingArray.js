class Queue{
    constructor(){
        this.item=[];
    }
    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
        return this.item.shift()
    }
    print(){
        console.log(this.item.join(" "))
    }
}
const q=new Queue()
q.enqueue(20)
q.enqueue(30)
q.enqueue(50)
q.enqueue(70)
console.log(q.dequeue())
q.print()