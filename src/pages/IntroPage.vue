<template>
  <header class="header__container">
    <h1 class="header__title">
      Привіт. Це моє тестове завдання для Penman. Для початку тесту згідно ТЗ натисніть на кнопку
      Drone flight у НавБарі, А далі натисніть кнопку Start що трохи нижче іконки дрону, щоб
      переглянути рух дрона картою місцевості згідно заданих йому даних.
    </h1>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header__container {
  margin: 0 auto;
  width: 1480px;
  height: calc(100vh - 156px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header__title {
    font-size: 1.4rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
      Geneva, Verdana, sans-serif;
    text-align: center;
    line-height: 3em;
  }
}
</style>
