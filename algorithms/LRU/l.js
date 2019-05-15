/**
 * var l = new LRU({ length: 10 })
 * l.append()
 * l.get()
 * l.print()
 * l.clear()
 */

class LRU {
    constructor(ops) {
        this.cfg = ops
        this.cache = []
    }

    append(val) {
        if (this.cache.length < this.cfg.length) {
            this.cache.unshift(val)
        } else {
            this.cache.pop()
            this.cache.unshift(val)
        }
    }

    get(k) {
        let idx = this.cache.findIndex(o => o.k === k)
        if (idx === -1) return undefined
        let result = this.cache.find(o => o.k === k)
        this.cache.splice(idx, 1)
        this.cache.unshift(result)
        return result
    }

    print() {
        console.log(this.cache)
    }
}

let l = new LRU({ length: 3 })

l.append({k: 'a', v: 'aa'})
l.append({k: 'b', v: 'bb'})
l.append({k: 'c', v: 'cc'})
l.print()
l.append({k: 'd', v: 'dd'})
l.print()
l.get('c')
l.print()
l.append({k: 'e', v: 'ee'})
l.print()