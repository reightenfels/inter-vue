<script setup>
    import EntityForm from '@/components/EntityForm.vue';
    import Api from '@/api/api';
    import { ref } from 'vue';

    const api = new Api();

    const fields = ref([]);
    api.rest('athletest-list/fields.json').then((data) => {
        fields.value = data;
    });
</script>

<template>
    <EntityForm :fields="fields" action="update" entity="athletest" />
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>