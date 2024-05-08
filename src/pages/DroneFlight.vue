<template>
  <div class="flight-area">
    <img
      class="drone"
      :src="drone"
      :style="{ top: dronePosition.y + 'vh', left: dronePosition.x + 'vw' }"
    />
    <button v-if="!running" @click="startAnimation">Старт</button>
    <button v-else @click="stopAnimation">Стоп</button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { ref, reactive, onUnmounted } from 'vue'
import flightData from '../data/flightData.json'
import drone from '@/assets/icons/drone.svg'

interface Position {
  x: number
  y: number
}

const dronePosition = reactive<Position>({ x: 50, y: 50 })
const running = ref(false)
let intervalId: number | undefined

const emits = defineEmits(['update:running'])

const startAnimation = (): void => {
  running.value = true
  emits('update:running', true)
  let index = 0
  const steps = flightData.length
  const totalTime = 20000
  const stepTime = totalTime / steps

  intervalId = window.setInterval(() => {
    if (index < steps) {
      const entry = flightData[index]
      const angle = parseFloat(entry.direction) * (Math.PI / 180)
      const speed = parseFloat(entry.speed) / 500
      let newX = dronePosition.x + speed * Math.cos(angle)
      let newY = dronePosition.y - speed * Math.sin(angle)

      dronePosition.x = Math.min(100 - 1.5, Math.max(1.5, newX))
      dronePosition.y = Math.min(100 - 1.5, Math.max(1.5, newY))

      index += 1
    } else {
      stopAnimation()
    }
  }, stepTime)
}

const stopAnimation = (): void => {
  running.value = false
  emits('update:running', false)
  clearInterval(intervalId)
  dronePosition.x = 50
  dronePosition.y = 50
}

onUnmounted(() => {
  clearInterval(intervalId)
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
