<template>
  <div class="block">
        <p
            class="block-item"
            v-for="(item, idx) in list"
            :key="idx"
            :style="`width: ${item * 10}px; background-color: red;`"
        >
            {{ item }}
        </p>
  </div>
</template>

<script>
export default {
    props: {
        list: { type: Array, default: () => ([]) }
    }
}
</script>

<style>
.block {
    width: 50px;
    height: 100px;
    background: #399;
    text-align: center;
    padding-top: 10px;
}
.block-item {
    margin: 0 auto 5px;
}
</style>
