class Node{
constructor(value){
this.value=value;
this.next=null;
}
}

class Linkedlist {
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
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
    addEnd(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++
    }
    addvaluebefore(value,target){
        const node =new Node(value)
        let current=this.head;
        if(current.value==target){
            node.next=this.head;
            this.head=node;
        }else{
            while(current.next.value!=target){
                current=current.next;
            }
            node.next=current.next
            current.next=node
        }
        this.size++
    }
    removeat(target){
        let current=this.head;
        if(current.value==target){
            this.head=this.head.next
            this.size--;
        }else{
            while(current.next){
                if(current.next.value==target){
                    current.next=current.next.next;
                    this.size--
                }
                current=current.next
            }

        }
        
    }
    print(){
        let current =this.head;
        let listValues=''
        while(current){
            listValues+=`${current.value} `
            current=current.next
        }
        console.log(listValues);
    }
}
const list =new Linkedlist()
const arr=[1,2,3,4,5]
arr.forEach((x)=>list.addstart(x))
list.addEnd(20)
list.addEnd(30)
list.addvaluebefore(22,20)
list.removeat(22)
list.print()
