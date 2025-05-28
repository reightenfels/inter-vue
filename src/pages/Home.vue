<script setup>

</script>

<template>
    <h1>
        Выберите сущность
    </h1>
    <div class="list-wrapper">
        <div class="list-item">
            <RouterLink class="nav-item" :to="{name: 'athletest'}">Список спортсменов</RouterLink>
        </div>
        <div class="list-item">
            <RouterLink class="nav-item" :to="{name: 'sports'}">Виды спорта</RouterLink>
        </div>
        <div class="list-item">
            <RouterLink class="nav-item" :to="{name: 'filter'}">Фильтр</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .list-wrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 100px;
    }

    .list-item a {
        background-color: #3200E7;
        height: 60px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 10px;
        transition: all .3s;
    }

    .list-item a:hover {
        opacity: .6;
    }
</style>