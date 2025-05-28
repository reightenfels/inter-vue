<script setup>
    import EntityForm from '@/components/EntityForm.vue';
    import Api from '@/api/api';

    const api = new Api();
    const fieldsPromise = api.rest('athletest-list/fields.json');
</script>

<template>
    <EntityForm :fieldsPromise="fieldsPromise" action="update" entity="athletest" />
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>