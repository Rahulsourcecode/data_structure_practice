class wGraph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] =new Set()
        }
    }
    addEdges(vertex1,vertex2,weight){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add({node:vertex2,weight:weight})
        this.adjacencyList[vertex2].add({node:vertex1,weight:weight})
    }

    removeEdges(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] =new Set(
                [...this.adjacencyList[vertex1]].filter(
                    (neighbour)=>neighbour.node!==vertex2
                )
            )
        }
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2]=new Set(
                [...this.adjacencyList[vertex2]].filter(
                    (neighbour)=>neighbour.node!==vertex1
                )
            )
        }
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return false;
        }
        for(let item of this.adjacencyList[vertex]){
            this.removeEdges(vertex,item.node)
        }
        delete this.adjacencyList[vertex]
    }

}

const g=new wGraph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addEdges('A','B',7)
g.addEdges('A','C',2)
g.removeEdges("A",'B')
g.removeVertex("B")
console.log(g.adjacencyList)
