class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size==0
    }
    addstart(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }
    addend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node
        }else{
            this.tail.next=node;
            this.tail=node
        }
        this.size++
    }
    print(){
        let current=this.head;
        let listValues=""
        while(current){
            listValues+=`${current.value} `
            current=current.next;
        }
        console.log(listValues)
    }
}
const list =new Linkedlist()
const arr=[1,2,3,4,5]
arr.forEach((x)=>list.addend(x))
list.print()