<template>
  <form class="form__el--form" @submit.prevent>
    <div class="form__el--form__group">
    <div><label for="email" class="form__el--form__label">e-mail</label></div>
    <input id="email" name="email" type="email" class="form__el--form__input">
    </div>
    <div class="form__el--form__group">
    <div><label for="phone" class="form__el--form__label">телефон</label></div>
    <input id="phone" name="phone" type="phone" class="form__el--form__input">
    </div>
    <div class="form__el--form__group">
    <div><label for="name" class="form__el--form__label">имя</label></div>
    <input id="name" name="name" type="text" class="form__el--form__input">
    </div>
    <button type="submit" class="btn large btn-yellow" @click.prevent>{{btnText}}</button>
</form>
</template>

<script>
export default {
    props: {
        btnText: String
    }
}
</script>

<style>

</style>