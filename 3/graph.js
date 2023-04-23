class Graph{
    constructor(){
        this.ajacencyList={}
    }

    addVertex(vertex){
        if(!this.ajacencyList[vertex]){
            this.ajacencyList[vertex]=new Set()
        }
    }
    
    addEdges(vertex1,vertex2){
        if(!this.ajacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.ajacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.ajacencyList[vertex1].add(vertex2)
        this.ajacencyList[vertex2].add(vertex1)
    }

    removeEdges(vertex1,vertex2){
        this.ajacencyList[vertex1].delete(vertex2)
        this.ajacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.ajacencyList[vertex]){
            return false
        }
            for(let adjacent of this.ajacencyList[vertex]){
                this.removeEdges(vertex,adjacent)
            }
            delete this.ajacencyList[vertex]
    }

    bfs(startingNode){
        let visited={}
        let queue=[]
        let result=[]
        visited[startingNode]=true;
        queue.push(startingNode)
        while(queue.length){
            let current =queue.shift()
            result.push(current)
            this.ajacencyList[current].forEach((item)=>{
                if(!visited[item])
                 visited[item]=true;
                 queue.push(item)
            })
        }
        return result
    }

    dfs(startingNode,visited={}){
        visited[startingNode]=true;
        console.log(startingNode)
        this.ajacencyList[startingNode].forEach((item)=>{
            if(!visited[item]){
                this.dfs(item,visited)
            }
        })
    }
    display(){
        for(let vertex in this.ajacencyList){
            console.log(vertex+'->'+[...this.ajacencyList[vertex]])
        }
    }

}
const q= new Graph()
q.addVertex('A')
q.addVertex('B')
q.addVertex('C')
q.addEdges('A','B')
q.addEdges('A','C')
q.removeEdges('A','B')
q.removeVertex('B')
q.display()