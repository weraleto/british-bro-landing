<template>
    <el-form ref="form" :model="form" :rules="rules" class="form__el--form">
        <el-form-item prop="email" class="form__el--form__group">
            <div><label for="email" class="form__el--form__label">e-mail</label></div>
            <input v-model="form.email" name="email" type="email" class="form__el--form__input"
                placeholder="Введите ваш email" @change="$refs.form.validateField('email')">
        </el-form-item>
        <el-form-item prop="phone" class="form__el--form__group">
            <div style="order: -1"><label for="phone" class="form__el--form__label">телефон</label></div>
            <input v-model="form.phone" name="phone" type="phone" class="form__el--form__input" v-maska
                data-maska="+7 9## ###-##-##" placeholder="Введите ваш номер"
                @change="$refs.form.validateField('phone')">
        </el-form-item>
        <el-form-item prop="name" class="form__el--form__group">
            <div><label for="name" class="form__el--form__label">имя</label></div>
            <input v-model="form.name" name="name" type="text" class="form__el--form__input"
                placeholder="Введите ваше имя" @change="$refs.form.validateField('name')">
        </el-form-item>
        <button class="btn large btn-yellow" @click.prevent="submitForm">{{btnText}}</button>
    </el-form>
</template>

<script>
    import {
        vMaska
    } from "maska"
    export default {
        props: {
            btnText: String
        },
        directives: {
            maska: vMaska
        },
        data: () => {
            return {
                form: {
                    email: null,
                    phone: null,
                    name: null
                },
                rules: {
                    name: [{
                            required: true,
                            message: 'Пожалуйста, используйте русский язык и заполните поле',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 155,
                            message: 'Пожалуйста, заполните поле',
                            trigger: 'blur'
                        }
                    ],
                    email: [{
                        required: true,
                        pattern: /^.+@.+\..+$/,
                        message: 'Пожалуйста, введите свой email',
                        trigger: 'blur'
                    }, ],
                    phone: [{
                        required: true,
                        pattern: /^(\+7)\s\d{3}\s\d{3}-\d{2}-\d{2}$/,
                        message: 'Пожалуйста, введите свой номер телефона',
                        trigger: 'change'
                    }, ],
                },
            }
        },
        methods: {
            async submitForm() {
                let message, title, type;
                this.$refs.form.validate(async (valid) => {
                    if (valid) {
                        try {
                            const hostname = window.location.origin
                            const res = await this.$axios.post(hostname+'/api/call_request/', this.form)
                            title = 'Спасибо за заявку!'
                            message = 'Скоро наш менеджер перезвонит вам'
                            type = 'success'
                            this.$refs.form.resetFields();

                        } catch (e) {
                            title = 'Произошла ошибка!'
                            message = 'Попробуйте позже'
                            type = 'error'
                        } finally {
                            this.$message({
                                offset: 90,
                                title, message, type
                            })
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
@import '@/assets/style/variables';

.el-form-item__error {
    color: $--color-coral;
    font-size: 12px;
}
</style>