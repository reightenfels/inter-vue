<script setup>
    import Api from '@/api/api';

    function validateForm() {
        let is_validate = true;

        document.querySelectorAll('input:not([type="file"])').forEach(input => {
            if (!input.value) {
                is_validate = is_validate ? false : is_validate;
            }
        });

        return is_validate;
    }

    async function submitForm (e) {
        e.preventDefault();

        if (!validateForm()) {
            alert('Заполните все пустые поля');
            return false;
        }

        const action = e.target.getAttribute('data-action');
        const entity = e.target.getAttribute('data-entity');
        
        const form = e.target;

        const api = new Api;

        if (action == 'update') {
            const result = await api.rest(`${entity}/update`, 'PUT', [], form);
            alert('Обновление прошло успешно');
        }
        else if (action == 'create') {
            const result = await api.rest(`${entity}/create`, 'POST', [], form);
            alert('Создание прошло успешно');
        }
        else {
            alert('Неизвестный action');
        }
    }
</script>

<template>
    <form class="form-wrapper" action="" @submit.prevent="submitForm" :data-action="action" :data-entity="entity">
        <div class="form__field-wrapper" v-for="(field, index) in fields">
            <div class="form__field" v-if="field.type == 'image'">
                <div class="form__field__label">
                    {{ field.desc }}
                </div>
                <div class="form__field__image-preview">
                    <img :src="field.value" alt="image" class="field-image">
                </div>
                <input type="file" :name="field.name">
            </div>
            <div class="form__field" v-else-if="field.type == 'select'">
                <div class="form__field__label">
                    {{ field.desc }}
                </div>
                <select :name="field.name">
                    <option>
                        Не выбрано
                    </option>
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
        <input type="submit" value="Сохранить" class="input-submit-btn">
    </form>
</template>
<script>
export default {
    props: {
        fieldsPromise: {
            type: Promise,
            required: true
        },

        action: {
            type: String,
            required: true
        },

        entity: {
            type: String,
            required: true
        },
    },

    data() {
        return {
            fields: []
        };
    },

    async created () {
        this.fields = await this.fieldsPromise;
    }
}
</script>
<style>
    .form-wrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 450px;
        margin: 0 auto;
        margin-top: 100px;
    }

    .form__field__label {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    input[type="text"], select {
        font-size: 16px;
        padding: 10px 10px;
        border: none;
        border-bottom: 1px solid #000;
        width: 100%;
    }

    input[type="text"]:focus, select:focus {
        outline: none;
    }

    .field-image {
        margin-bottom: 30px;
    }

    .input-submit-btn {
        background-color: #3200E7;
        border-radius: 10px;
        color: #fff;
        border: none;
        padding: 10px 0;
        transition: all .3s;
        cursor: pointer;
    }

    .input-submit-btn:hover {
        opacity: .6;
    }
</style>