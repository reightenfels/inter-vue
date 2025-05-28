<script setup>
    import Api from '@/api/api';

    async function deleteHandler (e) {
        const entity = e.target.getAttribute('data-entity');
        const id = e.target.getAttribute('data-id');

        const api = new Api();
        const result = await api.rest(`${entity}/delete`, 'DELETE', [{name: 'id', value: id}]);

        document.querySelector(`.table__row[data-id="${id}"]`).style.display = 'none';
    }
    
</script>

<template>
    <div class="table__row-elem-actions__buttons delete" @click="deleteHandler" :data-entity="entity" :data-id="id">
        Удалить
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },

        entity: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
    .table__row-elem-actions__buttons.delete {
        background: red;
    }
</style>