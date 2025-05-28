<template>
    <RouterLink class="table__row-elem-actions__buttons update" :to="{name: `${entity}-udpate`, params: { id }}" >
        Редактировать
    </RouterLink>
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
    .table__row-elem-actions__buttons.update {
        background: #3200E7;
    }
</style>