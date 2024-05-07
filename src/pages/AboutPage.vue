<template>
  <header class="header__container">
    <h1 class="header__title">
      Я пристрасний фронтенд-розробник із майже 2-річним досвідом фрілансу в розробці інструментів і
      сервісів для комфортної робота за основною професією. Головний пріоритет в моїй кар'єрі
      фронтенд розробника є цінний досвід, цікаві та якісні проєкти, робота в дружньому та
      мотивованому колективі. Я постійно вивчаю нові технології для власного розвитку. Освоїв за
      тиждень ASP.NET Web API та MongoDB із запуском інстансів та сайтів на AWS. Зараз вивчаю
      бекенд-технології, зокрема, можливості Nuxt.js, Express.js, також Docker.
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
