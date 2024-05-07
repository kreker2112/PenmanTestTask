<template>
  <div class="navbar">
    <div class="navbar_title" @click="$router.push('/')">Тестове завдання польоту дрона</div>
    <div class="navbar__btns">
      <ButtonComponent
        button-style="nav-button"
        v-for="button in navButtons"
        :key="button.id"
        @click="$router.push(button.link)"
        >{{ button.name }}</ButtonComponent
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

const navButtons = ref([
  { id: uuidv4(), name: 'Політ дрона', link: '/drone' },
  { id: uuidv4(), name: 'Про мене', link: '/about' }
])
</script>

<style scoped lang="scss">
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #12c0b2;
  box-shadow: 2px 2px 4px #a79e84bd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  cursor: pointer;
}

.navbar_title {
  font-size: 2rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  color: #f0f0f0;
  padding: 15px;
  height: 80px;
  flex-shrink: 0;
}

.navbar__btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 0 auto;
}
</style>
