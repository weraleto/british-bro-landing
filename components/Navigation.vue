<template>
  <nav class="nav">
    <div class="container nav__container">
        <a href="/" v-scroll-to="'#app'"><img style="width: 154px" src="@/assets/img/logo-cursive.svg" alt="British Bro logo"></a>
        <div class="nav__inner">
            <a :href="`#${it.anchor}`" v-scroll-to="`#${it.anchor}`" v-for="it in menuItems" :key="it.anchor">
                {{it.text}}
            </a>
            <button class="btn small btn-outline btn-outline-yellow">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data: () => {
        return {
            menuItems: [
                {text: 'Преимущества', anchor: 'advantages'},
                {text: 'Бизнес-модель', anchor: 'business_model'},
                {text: 'Наше предложение', anchor: 'promo'},
                {text: 'Инвестиции', anchor: 'investments'},
                {text: 'О нас', anchor: ''},
            ]
        }
    }
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
            justify-content: space-between;
            gap: 87px;
        }

        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-grow: 1;
        }
    }
</style>