class Hashtable{
    constructor(size){
        this.table=new Array(size)
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
        let i=2
        let index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[[key,value]]
        }else{
            while(this.table[index]){
                index = index + (Math.pow(i,2)) % this.size;
                i++;
            }
            this.table[index]=[[key,value]]
        }
        
    }
    get(key){
        let index=this.hash(key)
        let collect =this.table[index]
        if(collect){
            let remains =collect.find((item)=> item[0]==key)
            if(remains){
                return remains[1]
            }
        }return null;
    }
    remove(key){
        let index= this.hash(key)
        let collect=this.table[index]
        if(collect){
            let remains = collect.find((item)=>item[0]==key)
            if(remains){
                return collect.splice(collect.indexOf(remains),1)
            }
        }
        return null;
    }
    print(){
        console.table(this.table)
    }
}
const hash=new Hashtable(10)
hash.set('name','Rahul')
hash.set('age',55)
console.log(hash.get('name'))
hash.remove('name')
hash.print()

