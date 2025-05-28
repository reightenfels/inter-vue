<template>
    <form class="form-wrapper" action="" @submit.prevent="submitForm" :data-entity="entity">
        <div class="form__field-wrapper" v-for="(field, index) in fields">
            <div class="form__field" v-if="field.type == 'select'">
                <div class="form__field__label">
                    {{ field.desc }}
                </div>
                <select :name="field.name">
                    <option value="">Не выбрано</option>
                    <option v-for="option in field.options" :value="option.name" :selected="field.value == option.name ? true : false">
                        {{ option.value }}
                    </option>
                </select>
            </div>
            <div class="form__field" v-else-if="field.type == 'text'">
                <div class="form__field__label">
                    {{ field.desc }}
                </div>
                <input type="text" :value="field.value" :name="field.name" :placeholder="field.desc">
            </div>
        </div>
        <input type="submit" value="Фильтровать" class="input-submit-btn">
    </form>
</template>
<script>
export default {
    props: {
        fieldsPromise: {
            type: Promise,
            required: true
        },

        entity: {
            type: String,
            required: true
        },

        submitForm: {
            type: Function,
            required: true
        }
    },

    data() {
        return {
            fields: []
        };
    },

    async created () {
        this.fields = await this.fieldsPromise;
    },
}
</script>
<style>
    
</style>