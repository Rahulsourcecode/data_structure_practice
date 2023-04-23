class Hashtable{
    constructor(size){
        this.table= new Array(size);
        this.size=size;
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index=this.hash(key)
        let collect=this.table[index]
        if(!collect){
            this.table[index]=[[key,value]]
        }else{
            let remains = collect.find((item)=> item[0]==key)
            if(remains){
                remains[1]=value;
            }else{
                collect.push([key,value])
            }
        }
    }
    
    get(key){
        let index= this.hash(key)
        let collect=this.table[index]
        if(collect){
            let remains = collect.find((item)=> item[0]==key)
            if(remains){
                return remains[1]
            }
        }
    }

    remove(key){
        let index=this.hash(key)
        let collect=this.table[index]
        if(collect){
            let remains = collect.find((item)=> item[0]==key)
            if(remains){
                return collect.splice(collect.indexOf(remains),1)
            }
        }
    }
    print(){
        console.table(this.table)
    }

}

const hash =new Hashtable(10)
hash.set('name','rahul')
hash.set('age','20')
console.log(hash.get('age'))
hash.remove('name')
hash.print()