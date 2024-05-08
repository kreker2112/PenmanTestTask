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
import { ref, computed, watchEffect, Ref } from 'vue'
import Navbar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const backgroundColor = ref('#f0f0f0')
const showNavbar = ref(true) as Ref<boolean>
const showFooter = ref(true) as Ref<boolean>
const navbar = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)

watchEffect(() => {
  document.body.style.backgroundColor = backgroundColor.value
})

const flightAreaHeight = computed(() => {
  let height: number = 100
  if (showNavbar.value) height -= 0
  if (showFooter.value) height -= 0
  return `height: ${height}vh;`
}) as Ref<string>

window.addEventListener('mousemove', (e) => {
  showNavbar.value = (e.clientY <= 80) as boolean
  showFooter.value = (window.innerHeight - e.clientY <= 80) as boolean

  if (navbar.value) {
    if (showNavbar.value) {
      navbar.value.classList.remove('hidden')
    } else {
      navbar.value.classList.add('hidden')
    }
  }

  if (footer.value) {
    if (showFooter.value) {
      footer.value.classList.remove('hidden')
    } else {
      footer.value.classList.add('hidden')
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
