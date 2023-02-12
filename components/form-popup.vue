<template>
  <el-dialog :visible.sync="showApplyForm"
    :center="true"
    @closed="handleDialogClose"
    title="Получить предложение"
  >
    <form-component ref="form" btn-text="Отправить"></form-component>
  </el-dialog>
</template>

<script>
export default {
    name: 'formPopup',
    computed: {
        showApplyForm: {
            get: function () {
                return this.$store.state.showApplyForm
            },
            set: function (val) {
                this.$store.commit('setShowModal', val)
            }
            
        }
    },
    methods: {
        handleDialogClose() {
            this.$refs.form.resetForm()
        }
    }

}
</script>

<style lang="scss">
@import '@/assets/style/variables';
$--dialog-background-color: #231F20;
$--color-text-regular: white;
$--color-text-primary: white;
$--dialog-title-font-size: 32px;
$--dialog-padding-primary: 28px;

@import "element-ui/packages/theme-chalk/src/dialog";

.el-dialog__title {
    font-family: $--font-family-heading;
    font-feature-settings: 'pnum' on, 'lnum' on;
}

.el-dialog--center .el-dialog__body {
    padding-bottom: 80px;
    text-align: center;

    background: url('@/assets/img/popup-bg.png') no-repeat bottom center;
}
.el-dialog {
    max-width: 454px;
    width: 100%;
}
.el-dialog__wrapper {
    z-index: 10001 !important;
}
</style>