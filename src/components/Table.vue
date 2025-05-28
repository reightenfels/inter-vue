<script setup>
    import ButtonUpdate from './ButtonUpdate.vue';
    import ButtonDelete from './ButtonDelete.vue';
</script>

<template>
    <div class="table-wrapper">
        <div class="table__row-heading">
            <div class="table__row-heading__elem" v-for="elem of headingRow">
                <span>
                    {{ elem }}
                </span>
            </div>
            <div class="table__row-heading__elem">
                <span>
                    Действия
                </span>
            </div>
        </div>
        <div class="table__row" v-for="(row, id) in rows" :data-id="id">
            <div class="table__row-elem" v-for="(value, property) in row">
                <span v-if="property !== 'image_url'">
                    {{ value }}
                </span>
                <span v-else>
                    <img :src="value" alt="" class="row-elem-img">
                </span>
            </div>
            <div class="table__row-elem table__row-elem-actions">
                <ButtonUpdate :id="id" :entity="entity" />
                <ButtonDelete :id="id" :entity="entity" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headingRow: {
            type: Array,
            required: true
        },

        rows: {
            type: Object,
            required: true
        },

        entity: {
            type: String,
            required: true
        }
    },
}
</script>

<style >
    .table-wrapper {
        max-width: 1000px;
        min-width: 1000px;
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        margin: 0 auto;
        margin-top: 100px;
    }

    .table__row-heading {
        display: flex;
    }

    .table__row-heading__elem {
        min-height: 60px;
        width: 200px;
        border: 1px solid #efefef;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: none;
    }

    .table__row-heading__elem:last-of-type {
        border-right: 1px solid #efefef;
    }

    .table__row-heading__elem span {
        font-weight: 600;
        text-align: center;
    }

    .table__row {
        display: flex;
    }

    .table__row-elem {
        min-height: 60px;
        width: 200px;
        border: 1px solid #efefef;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: none;
        border-top: none;
        padding: 10px 0;
    }

    .table__row-elem:last-of-type {
        border-right: 1px solid #efefef;
    }

    .row-elem-img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }

    .table__row-elem-actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .table__row-elem-actions__buttons {
        padding: 10px 0;
        color: #fff;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        transition: all .3s;
        cursor: pointer;
    }

    .table__row-elem-actions__buttons:hover {
        opacity: .6;
    }

    

    
</style>