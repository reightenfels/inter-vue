<script setup>
    import Table from '@/components/Table.vue'
    import ButtonCreate from '@/components/ButtonCreate.vue';
    import Api from '@/api/api';
    import { ref } from 'vue';

    const api = new Api();

    const rows = ref([]);
    api.rest('athletest-list/list.json').then((data) => {
        rows.value = data;
    });

    const heading = ['Фото', 'ФИО', 'Вид спорта', 'Биография', 'Год начала карьеры'];

    const entity = 'athletest';
</script>

<template>
    <h1>Список спортсменов</h1>
    <Table :headingRow="heading" :rows="rows" :entity="entity" />
    <ButtonCreate :entity="entity" />
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>