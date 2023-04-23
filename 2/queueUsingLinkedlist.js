class Node{
 constructor(value){
    this.value=value;
    this.next=null;
 }
}

class Linkedlist{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0;
    }

    enqueue(value){
        const node =new Node(value)
        if(!this.front){
            this.front=node;
            this.rear=node;
        }else{
            this.rear.next=node;
            this.rear=node
        }
        this.size++
    }

    dequeue(){
        if(!this.front){
            return null;
        }else{
             this.front=this.front.next
            this.size--
        }
    }

    print(){
        let current=this.front;
        let listValues=''
        while(current){
            listValues+=`${current.value} `
            current=current.next;
        }
        console.log(listValues)
    }
}
const list=new Linkedlist()
list.enqueue(20)
list.enqueue(40)
list.enqueue(50)
list.enqueue(70)
list.dequeue()
list.print()