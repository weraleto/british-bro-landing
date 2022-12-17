<template>
  <nav class="nav">
    <div class="container nav__container">
        <img style="width: 154px" src="@/assets/img/logo-cursive.svg" alt="British Bro logo">
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style lang="scss">
    .nav {
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10000;

        &__container {
            min-height: 122px;
            display: flex;
            align-items: center;
        }
    }
</style>