<template>
  <div>
        <Block :list="arrA" />
        <Block :list="arrB" />
        <Block :list="arrC" />
  </div>
</template>

<script>
import Block from './Block.vue'
import { hanoi } from './h'

export default {
    components: { Block },
    name: 'hanoi',
    data() {
        return {
            arrA: [1, 2, 3],
            arrB: [],
            arrC: []
        }
    },
    mounted() {
        setTimeout(() => {
            hanoi(3, this.arrA, this.arrB, this.arrC)
        }, 2000)
    }
}
</script>

<style>
.block {
    float: left;
    margin-right: 20px;
}
</style>
