<template>
  <nav class="navigation">
    <RouterLink class="nav-item" :to="{name: 'home'}">Главная</RouterLink>
    <RouterLink class="nav-item" :to="{name: 'athletest'}">Список спортсменов</RouterLink>
    <RouterLink class="nav-item" :to="{name: 'sports'}">Виды спорта</RouterLink>
    <RouterLink class="nav-item" :to="{name: 'filter'}">Фильтр</RouterLink>
  </nav>
  <router-view/>
</template>

<style>
    .navigation {
        display: flex;
        gap: 30px;
    }

    .nav-item {
        text-decoration: none;
        color: #000;
        transition: all .3s;
    }

    .nav-item:hover {
        opacity: .6;
    }
</style>