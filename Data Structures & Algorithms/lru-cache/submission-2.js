class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cach = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cach.has(key)){
            let value = this.cach.get(key);

            this.cach.delete(key)
            this.cach.set(key, value)
            return this.cach.get(key)
        }else 
        {
            return -1
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cach.has(key)){
            this.cach.delete(key)
            this.cach.set(key, value)
             if(this.cach.size > this.capacity){
             let Oldestkey = this.cach.keys().next().value;
             this.cach.delete(Oldestkey);
             }
            
        }else{
             this.cach.set(key , value)
             if(this.cach.size > this.capacity){
             let Oldestkey = this.cach.keys().next().value;
             this.cach.delete(Oldestkey);
        }
        }
        
        
    }
}
