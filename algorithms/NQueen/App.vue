<template>
    <div>
        <input type="text" v-model="val" placeholder="请输入大于等于4的正整数" @keyup.enter="handleClick" /> <button @click="handleClick">走你</button>
        <p>共有 {{ all.length }} 种排列</p>
        <div>
            <Block
                class="item"
                v-for="(item, idx) in all"
                :key="idx"
                :n="n"
                :arr="item"
            />
        </div>
    </div>
</template>

<script>
import Block from './component/Block.vue'

export default {
    components: { Block },
    data() {
        return {
            val: 4,
            n: 4,
            all: [],
            c: []
        }
    },
    methods: {
        handleClick() {
            this.all = []
            this.n = Number(this.val)
            this.queen()
        },
        queen(row = 0) {
            if (row === this.n) {
                this.all.push([...this.c])
            } else {
                for (let col = 0; col < this.n; col++) {
                    this.c[row] = col
                    if (this.check(row)) {
                        this.queen(row + 1)
                    }
                }
            }
        },
        check(row) {
            for (let i = 0; i < row; i++){
                // 纵向
                if (this.c[row] === this.c[i]) return false
                // 斜向相减
                if (this.c[row] - row === this.c[i] - i) return false
                // 斜向相加
                if (this.c[row] + row === this.c[i] + i) return false
            }
            return true
        }
    },
    mounted() {
        this.handleClick();
    }
}
</script>

<style>
p {
    margin: 0;
    padding: 0;
    height: 22px;
}
.item {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>
