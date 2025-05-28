<script setup>
    import EntityForm from '@/components/EntityForm.vue';
    import Api from '@/api/api';

    const api = new Api();
    const fieldsPromise = api.rest('sports/fields-create.json');
</script>

<template>
    <EntityForm :fieldsPromise="fieldsPromise" action="create" entity="sports" />
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>