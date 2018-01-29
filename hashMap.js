class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._slots = [];
        this._capacity = initialCapacity;
    }

    static _hashString(string) {
        let hash = 5381; // a number came up with to help minimize collisions from happening within the hashmap when entering new data
        for (let i=0; i<string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i); // '<<' means to shift the hash however many numbers to the right which is specified and replace with 0's
            hash = hash & hash; 
        }
        return hash >>> 0;
    }

    // this function resizes the hashmap based on the max_load_ratio. 
    // it takes the length and divides it by the capacity which if this result exceeds the 
    // specified max_load_ratio then the resize method gets triggered

    set(key, value) {
        const loadRatio = (this.length + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }

        const index = this._findSlot(key);
        this._slots[index] = {
            key,
            value
        };
        this.length++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key); 
        const start = hash % this._capacity; 
        /* 
        taking the big number that we created in the _hashString function and 
        getting the remainer of it after being divided by the capacity
        the modular will then give us a number between 0-7 which will then 
        give us an index to put that value in (if its empty)(if its full we 
        move to the next empty index)
        */
        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._slots[index];
            if (slot === undefined || slot.key == key) {
                return index;
            }
        }
    }
}
HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;

