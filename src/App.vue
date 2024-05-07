<template>
  <div class="app">
    <component :is="currentComponent">
      <router-view />
    </component>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
import flyingDroneLayout from '@/layouts/flyingDroneLayout.vue'

const components: { [key: string]: any } = {
  flyingDroneLayout,
  defaultLayout
}

const route = useRoute()

const currentComponent = computed(() => {
  return components[route.meta.layout as string]
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Blinker', sans-serif;
  font-family: 'Roboto', sans-serif;
}
</style>
