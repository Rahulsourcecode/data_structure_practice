class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class binaryTree{
    constructor(){
        this.root =null;
    }
    isEmpty(){
        return this.root ==null;
    }
    insert(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertN(this.root,node)
        }
    }

    insertN(root,node){
        if(node.value<root.value){
            if(root.left ==null){
                root.left=node;
            }else{
                this.insertN(root.left,node)
            }
        }else{
            if(root.right ==null){
                root.right=node;
            }else{
                this.insertN(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(value == root.value){
                return true
            }else{
                if(value < root.value){
                    return this.search(root.left,value)
                }else{
                    return this.search(root.right,value)
                }
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let current =queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
    min(root){
        let array=[]
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root =this.deleteN(this.root,value)
    }
    deleteN(root,value){
        if(root ==null){
            return root
        }
        if(value <root.value){
            root.left =this.deleteN(root.left,value)
        }else if(value > root.value){
            root.right =this.deleteN(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return  root.right
            }else if(!root.right){
                return root.left
            }
            root.value =this.min(root.right)
            root.right =this.deleteN(root.right,root.value)
        }
        return root;
    }
}
const bi =new binaryTree()
bi.insert(20)
bi.insert(50)
bi.insert(78)
bi.insert(45)
bi.insert(32)
bi.delete()
// console.log(bi.max(bi.root))
// console.log(bi.min(bi.root));
bi.levelOrder()