<script setup>
    import Table from '@/components/Table.vue';
    import FilterForm from '@/components/FilterForm.vue';
    import Api from '@/api/api';
    import { ref } from 'vue';

    const heading = ['Фото', 'ФИО', 'Вид спорта', 'Биография', 'Год начала карьеры'];

    const api = new Api();
    const fieldsPromise = api.rest('filter/fields.json');

    const rows = ref([]);
    api.rest('athletest-list/list.json').then((data) => {
        rows.value = data;
    });

    function submitForm (e) {
        e.preventDefault();

        api.rest('filter/result.json').then((data) => {
            rows.value = data;
        });
    }   
</script>

<template>
    <h1>Фильтр</h1>
    <FilterForm :fieldsPromise="fieldsPromise" entity="athletest" :submitForm="submitForm" />
    <Table :headingRow="heading" :rows="rows" entity="athletest" />
</template>
<script>
export default {

}
</script>
<style>
    
</style>