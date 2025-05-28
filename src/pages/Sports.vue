<script setup>
    import Table from '@/components/Table.vue'
    import ButtonCreate from '@/components/ButtonCreate.vue';
    import Api from '@/api/api';
    import { ref } from 'vue';

    const api = new Api();

    const rows = ref([]);
    api.rest('sports/list.json').then((data) => {
        rows.value = data;
    });

    const heading = ['Вид спорта'];

    const entity = 'sports';
</script>

<template>
    <h1>Виды спорта</h1>
    <Table :headingRow="heading" :rows="rows" :entity="entity" />
    <ButtonCreate :entity="entity" />
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>