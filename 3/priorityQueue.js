class PriorityQueue{
    constructor(){
        this.heap=[]
    }

    parentIndex(i){
        return Math.floor((i-1)/2)
    }
    leftChild(i){
        return 2*i+1
    }
    rightChild(i){
        return 2*i+2
    }

    enqueue(value,priority){
        this.heap.push({value,priority})
        let i=this.heap.length-1;
        while(i>0){
            let parentIndex =this.parentIndex(i)
            if(this.heap[i].priority < this.heap[parentIndex].priority){
                [this.heap[i],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[i]]
                i=parentIndex
            }else{
                return
            }
        }
    }

    dequeue(){
        if(this.heap.length ==0){
            return null;
        }else if(this.heap.length ==1){
            return this.heap.pop()
        }else{
            let min=this.heap[0]
            this.heap[0]=this.heap.pop()
            let i=0;
            this.heapifyDown(i,this.heap.length-1)
            return min
        }
    }

    heapifyDown(i,n){
        let smallest =i;
        let left =this.leftChild(i)
        let right =this.rightChild(i)

        if(left < n && this.heap[left] < this.heap[smallest]){
            smallest =left
        }
        if(right < n && this.heap[right] < this.this.heap[smallest]){
            smallest =right
        }
        if(smallest!=i){
            [this.heap[i],this.heap[smallest]]=[this.heap[smallest],this.heap[i]]
            this.heapifyDown(smallest,n)
        }
    }

    changePriority(heap,value,newPriority){
        let element =heap.find((item)=>item.value==value)
        element.priority =newPriority;
        heap.sort((a,b)=>a.priority-b.priority)
    }

    levelOrder(heap){
        let q=[0]
        let list=''
        while(q.length){
            let curr =q.shift()
            list+=`${heap[curr].value} `
            let left =this.leftChild(curr)
            let right =this.rightChild(curr)
            if(heap[left]){
                q.push(left)
            }
            if(heap[right]){
                q.push(right)
            }
        }
        console.log(list)
    }
}
const q =new PriorityQueue()
q.enqueue('task 1',2)
q.enqueue('task 2',1)
q.enqueue('task 3',2)
q.enqueue('task 4',1)
q.changePriority(q.heap,'task 3',5)
q.changePriority(q.heap,'task 1',6)
console.log(q.dequeue())
q.levelOrder(q.heap)