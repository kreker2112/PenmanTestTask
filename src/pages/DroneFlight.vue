<template>
  <div class="flight-area">
    <img
      class="drone"
      :src="drone"
      :style="{ top: dronePosition.y + 'px', left: dronePosition.x + 'px' }"
    />
    <button v-if="!running" @click="startAnimation">Старт</button>
    <button v-else @click="stopAnimation">Стоп</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, watchEffect } from 'vue'
import flightData from '../data/flightData.json'
import drone from '@/assets/icons/drone.svg'

interface Position {
  x: number
  y: number
}

const dronePosition = reactive<Position>({ x: 870, y: 590 })
const running = ref(false)
let intervalId: number | undefined

const startAnimation = () => {
  running.value = true
  let index = 0
  const steps = flightData.length
  const totalTime = 20000
  const stepTime = totalTime / steps

  intervalId = window.setInterval(() => {
    if (index < steps) {
      const entry = flightData[index]
      const angle = parseFloat(entry.direction) * (Math.PI / 180)
      const speed = parseFloat(entry.speed) / 5000

      dronePosition.x += speed * Math.cos(angle) * 100
      dronePosition.y -= speed * Math.sin(angle) * 100

      index += 1
    } else {
      stopAnimation()
    }
  }, stepTime)
}

const stopAnimation = () => {
  running.value = false
  clearInterval(intervalId)
  dronePosition.x = 870
  dronePosition.y = 590
}

onUnmounted(() => {
  clearInterval(intervalId)
})

const backgroundColor = ref('#f0f0f0')

watchEffect(() => {
  document.body.style.backgroundColor = backgroundColor.value
})
</script>

<style scoped lang="scss">
.flight-area {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.drone {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  position: absolute;
  top: calc(50% + 240px);
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
