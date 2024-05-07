<template>
  <transition name="fade">
    <Navbar v-if="showNavbar" />
  </transition>
  <div class="flying-drone-layout" :style="flightAreaHeight">
    <slot></slot>
  </div>
  <transition name="fade">
    <FooterComponent v-if="showFooter" />
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import Navbar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const backgroundColor = ref('#f0f0f0')

watchEffect(() => {
  document.body.style.backgroundColor = backgroundColor.value
})

const showNavbar = ref(true)
const showFooter = ref(true)

const flightAreaHeight = computed(() => {
  let height = 100
  if (showNavbar.value) height -= 10
  if (showFooter.value) height -= 10
  return `height: ${height}vh;`
})

window.addEventListener('mousemove', (e) => {
  showNavbar.value = e.clientY <= 80
  showFooter.value = window.innerHeight - e.clientY <= 80

  const navbar = document.querySelector('.Navbar')
  const footer = document.querySelector('.FooterComponent')

  if (navbar) {
    if (showNavbar.value) {
      navbar.classList.remove('hidden')
    } else {
      navbar.classList.add('hidden')
    }
  }

  if (footer) {
    if (showFooter.value) {
      footer.classList.remove('hidden')
    } else {
      footer.classList.add('hidden')
    }
  }
})
</script>

<style scoped lang="scss">
.flying-drone-layout {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: calc(100vh - 160px);
  overflow: hidden;
  z-index: 0;
  background-image: url('@/assets/images/map.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 99;
}

.Navbar,
.FooterComponent {
  transition: height 0.3s ease-in-out;
  position: fixed;
  left: 0;
  width: 100%;
  background-color: transparent;

  &.Navbar {
    top: 0;
  }

  &.FooterComponent {
    bottom: 0;
  }

  &.hidden {
    height: 0;
    overflow: hidden;
  }
}
</style>
