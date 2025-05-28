<script setup>
    import EntityForm from '@/components/EntityForm.vue';
    import Api from '@/api/api';

    const api = new Api();
    const fieldsPromise = api.rest('athletest-list/fields-create.json');
</script>

<template>
    <EntityForm :fieldsPromise="fieldsPromise" action="create" entity="athletest" />
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>