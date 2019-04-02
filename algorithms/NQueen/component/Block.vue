<template>
  <!-- <span :class="['block', light ? 'block-light' : '']"></span> -->
  <div>
        <p v-for="row in n" :key="`p-${row}`">
            <span
                v-for="col in n"
                :key="`block-${col}`"
                :class="['block', arr[row - 1] === col - 1 ? 'block-light' : '']"
            >
                <!-- {{row - 1}},{{col - 1}} -->
            </span>
        </p>
  </div>
</template>

<script>
export default {
    name: 'Block',
    props: {
        n: Number,
        arr: Array
    }
}
</script>

<style scoped>
.block {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: lightblue;
    margin: 0 2px 2px 0;
}
.block.block-light {
    background: lightcoral;
}
</style>
