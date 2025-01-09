<template>
  <div class="summary">
    <h3>Summary</h3>
    <ul>
        <li v-for="(item, index) in results" :key="index" :class="item.class">
            <div class="res-info">
                <img :src="require(`../assets/images/${item.icon}`)" :alt="item.alt">
                <span>{{ item.category }}</span>
            </div>
            <div class="score">
                <span>
                <span class="scoreVal">{{ item.score }} </span>
                / 100</span>
            </div>
        </li>
    </ul>
    <button>Continue</button>
</div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const results = ref([])
const error = ref(null)
const fetchData = () => {
    fetch('http://localhost:3000/results')
        .then(res => res.json())
        .then(data => {
            results.value = data
            console.log(data)
        })
}
fetchData()
</script>

<style lang="scss">
    @import '/src/main.sass'
</style>

