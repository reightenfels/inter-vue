<template>
    <RouterLink class="table__row-elem-actions__buttons create" :to="{name: `${entity}-create`}" >
        Создать
    </RouterLink>
</template>
<script>
export default {
    props: {
        entity: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
    .table__row-elem-actions__buttons.create {
        background: #3200E7;
        margin: auto;
        margin-top: 30px;
    }
</style>