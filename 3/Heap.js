class MaxHeap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        let i =this.heap.length-1
         this.heapifyUp(i)
    }
    heapifyUp(i){
       while(i>0){
        let parentIndex = Math.floor((i-1)/2)
        if(this.heap[i] > this.heap[parentIndex]){
         [this.heap[i],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[i]]
         i=parentIndex
        }else{
            return
        }
       }
    }

    remove(){
        this.heap[0]=this.heap.pop()
        let i=0;
        this.heapifyDown(i,this.heap.length)
    }

    heapifyDown(i,n){
        let largest =i;
        let left =2*i+1;
        let right=2*i+2;

        if(left < n && this.heap[left] > this.heap[largest]){
            largest =left
        }
        if(right <n && this.heap[right] > this.heap[largest]){
            largest =right
        }
        if(largest!=i){
            [this.heap[i],this.heap[largest]]=[this.heap[largest],this.heap[i]]
            this.heapifyDown(largest,n)
        }
    }

    buildheap(arr)
    {
        this.heap=arr
        for(let i=Math.floor((arr.length-1)/2);i>=0;i--){
            this.heapifyDown(i,arr.length)
        }
        for(let i=arr.length-1;i>0;i--){
            [this.heap[0],this.heap[i]] =[this.heap[i],this.heap[0]]
            this.heapifyDown(0,i)
        }
    }
    display(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i])
        }
    }
}

const n= new MaxHeap()
n.insert(45)
n.insert(77)
n.insert(32)
n.insert(12)
n.insert(89)
n.remove()
// n.buildheap([56,74,23,56,12,80])
n.display()