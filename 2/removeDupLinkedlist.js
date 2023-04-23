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

    append(value){
        const node= new Node(value)
        if(!this.head){
            this.head=node;
            this.tail=node;
        
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++
    }
    removedup(){
        if(!this.head){
            return null;
        }else{
            const set =new Set()
            set.add(this.head.value)
            let current=this.head;
            while(current.next){
                if(set.has(current.next.value)){
                    current.next=current.next.next
                    this.size--
                }else{
                    set.add(current.next.value);
                    current=current.next
                }
            }
        }
    }
    print(){
        let current= this.head;
        let listValues=''
        while(current){
            listValues+=`${current.value} `
            current=current.next;
        }
        console.log(listValues)
    }
}

const list =new Linkedlist()
const arr=[1,2,3,4,5,5,4,3,2,1]
arr.forEach((x)=>list.append(x))
list.removedup()
list.print()