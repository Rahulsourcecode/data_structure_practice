class Node{
    constructor(){
        this.children={}
        this.isWordEnd  =false
    }
}

class Trie{
    constructor(){
        this.root =new Node()
    }

    insert(word){
        let current=this.root
        for(let i=0;i<word.length;i++){
            let charToinsert = word[i]
            if(!current.children[charToinsert]){
                current.children[charToinsert] =new Node()
            }
            current=current.children[charToinsert]
        }
        current.isWordEnd =true;
    }
    traverse(){
        let words=[]
        function traverseHelper(node,word){
        if(node.isWordEnd){
            words.push(word)
        }
        for(let [char,childindex] of Object.entries(node.children)){
            traverseHelper(childindex,word+char)
    }
    }
    traverseHelper(this.root,'');
    return words
    }

    contains(word){
        let current =this.root;
        for(let i=0;i<word.length;i++){
            let charToFind= word[i]
            if(!current.children[charToFind]){
                return false
            }
            current =current.children[charToFind]
        }
        return current.isWordEnd
    }
    startWithPrefix(prefix){
        let current =this.root;
        for(let i=0;i<prefix.length;i++){
            let charToFind =prefix[i]
            if(!current.children[charToFind]){
                return false
            }
            current=current.children[charToFind]
        }
        return true;
    }

    delete(word){
        this.deleteHelper(this.root,word,0)
    }

    deleteHelper(current,word,index){
        if(index==word.length){
            return Object.keys(current.children).length==0
        }
        let char =word[index]
        if(!current.children[char]){
            return null
        }
        let shouldDelete =this.deleteHelper(current.children[char],word,index+1)
        if(shouldDelete){
            delete current.children[char]
            return Object.keys(current.children).length==0
        }
        return false;
    }
}
const q= new Trie()
q.insert("Malayalam")
q.insert("Malayali")
q.insert("Books")
q.delete('Books')
console.log(q.startWithPrefix('Books'))
console.log(q.contains('Malayalam'));
console.log(q.traverse())