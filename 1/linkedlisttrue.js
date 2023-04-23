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
        return this.size==0;
    }
    add(value){    
    const node= new Node(value);
    if(this.isEmpty()){
        this.head=node;
        this.tail=node;
    }else{
        this.tail.next=node;
        this.tail=node;
    }
    this.size++
    }
    addAtposition(value,target){
    const node=new Node(value);
    let current=this.head;
    if(current.value==target){
        node.next=current.next;
        current.next=node;      
        
    }else{
       while(current.next.value!=target){
                current=current.next;
       }
       node.next=current.next;
       current.next=node
    }
    this.size++
    }
    removeatPosition(target){
        let current=this.head;
        if(current.value==target){
            this.head=this.head.next;
            this.size--
        }else{
            while(current.next.value!=target){
                current=current.next;
            }
            current.next=current.next.next
            this.size--
        }
        return "not found"
    }
    addatindex(value,index){
        const node=new Node(value)
        let current=this.head;
      if(index<0 || index >this.size){
        return false
      }
      if(index==0){
        this.head=this.head.next
        this.head=node
      }else{
        for(let i=1;i<=index-1;i++){
            current=current.next;
        }
        node.next=current.next;
        current.next=node
      }
      this.size++
    }
    removeat(index){
        if(index <0 || index>this.size){
            return false;
        }
        let removed
        if(index==0){
            this.head=this.head.next;
        }
        else{
            let current =this.head
            for(let i=0;i<=index-1;i++){
                current=current.next
            }
            removed=current.next
            current.next=removed.next
        }
        this.size--
        return removed.value
    }
    print(){
        let current=this.head;
        let listValues=""
        while(current){
            listValues+=`${current.value} `
            current=current.next
        }
        console.log(listValues)
    }
}
const list=new Linkedlist()
const arr=[1,2,3,4,5]
arr.forEach((x) =>list.add(x))
list.print()