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
import { ref, reactive, onUnmounted, watchEffect } from 'vue'
import flightData from '../data/flightData.json'
import drone from '@/assets/icons/drone.svg'

interface Position {
  x: number
  y: number
}

const dronePosition = reactive<Position>({ x: 50, y: 50 })
const running = ref(false) as { value: boolean }
let intervalId: number | undefined

const startAnimation = (): void => {
  running.value = true
  let index: number = 0
  const steps: number = flightData.length
  const totalTime: number = 20000
  const stepTime: number = totalTime / steps

  intervalId = window.setInterval(() => {
    if (index < steps) {
      const entry: any = flightData[index]
      const angle: number = parseFloat(entry.direction) * (Math.PI / 180)

      const speed: number = parseFloat(entry.speed) / 500

      let newX: number = dronePosition.x + speed * Math.cos(angle)
      let newY: number = dronePosition.y - speed * Math.sin(angle)

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
  clearInterval(intervalId)
  dronePosition.x = 50
  dronePosition.y = 50
}

onUnmounted(() => {
  clearInterval(intervalId)
})

const backgroundColor = ref('#f0f0f0') as { value: string }

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
