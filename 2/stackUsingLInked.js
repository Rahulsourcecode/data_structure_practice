class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Linkedlist{
    constructor(){
        this.top=null;
        this.size=0
    }

    push(value)
    {
    const node =new Node(value)
    if(!this.top){
        this.top=node;
    }else{
        node.next=this.top;
        this.top=node;
    }
    this.size++
    }

    pop(){
        if(!this.top){
            return null;
        }else{
            this.top=this.top.next;
            this.size--
        }
    }
    display(){
        let current=this.top;
        let listValues =''
        while(current){
            listValues+=`${current.value} `
            current=current.next;
        }
        console.log(listValues);
    }
}
const list= new Linkedlist()
list.push(20)
list.push(30)
list.push(40)
list.push(44)
list.pop()
list.display()