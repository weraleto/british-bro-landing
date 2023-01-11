<template>
  <nav class="nav">
    <div class="container nav__container">
        <a href="/" v-scroll-to="'#app'"><logo-cursive /></a>
        <a href="" @click.prevent="navOpened=true" class="nav__inner--burger">
            <svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.32143 0C1.03925 0 0 1.04925 0 2.34375C0 3.63825 1.03925 4.6875 2.32143 4.6875H36.6786C37.9607 4.6875 39 3.63825 39 2.34375C39 1.04925 37.9607 0 36.6786 0H2.32143ZM2.32143 12.6562C1.03925 12.6562 0 13.7055 0 15C0 16.2945 1.03925 17.3438 2.32143 17.3438H36.6786C37.9607 17.3438 39 16.2945 39 15C39 13.7055 37.9607 12.6562 36.6786 12.6562H2.32143ZM2.32143 25.3125C1.03925 25.3125 0 26.3617 0 27.6563C0 28.9508 1.03925 30 2.32143 30H36.6786C37.9607 30 39 28.9508 39 27.6563C39 26.3617 37.9607 25.3125 36.6786 25.3125H2.32143Z" fill="white"/>
            </svg>
        </a>
        <div class="nav__inner" :class="{'opened': navOpened}">
            <div class="nav__inner--top">
                <logo-cursive />
                <div class="nav__inner--close" @click.capture="navOpened=false">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4618 0.538776C21.7431 -0.179012 20.5785 -0.179012 19.8595 0.538776L11.4997 8.89824L3.14132 0.538776C2.42263 -0.180172 1.25803 -0.179012 0.539018 0.538776C-0.179673 1.25744 -0.179673 2.42198 0.539018 3.14097L8.89736 11.5004L0.539018 19.8584C-0.179673 20.5771 -0.179673 21.7428 0.539018 22.4617C0.897787 22.8205 1.36968 23 1.84013 23C2.31089 23 2.78133 22.8205 3.14125 22.4617L11.4996 14.1023L19.8594 22.4617C20.2193 22.8205 20.689 23 21.1605 23C21.6321 23 22.1017 22.8205 22.4616 22.4617C23.1795 21.7428 23.1795 20.577 22.4616 19.8584L14.1018 11.5004L22.4616 3.14097C23.1795 2.42202 23.1795 1.25747 22.4616 0.538776" fill="white"/>
                    </svg>
                </div>
            </div>
            <a :href="`#${it.anchor}`" @click.capture="navOpened=false" v-scroll-to="`#${it.anchor}`" v-for="it in menuItems" :key="it.anchor">
                {{it.text}}
            </a>
            <div class="nav__inner--footer">
                <button class="btn small btn-outline btn-outline-yellow"
                    @click.prevent="navOpened=false; $store.commit('setShowModal', true)"
                >ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
            </div>
            <div class="nav__inner--socials">
                <a class="nav__inner--socials__item" href="https://instagram.com/british_bro_coffee"><ig /></a>
                <a class="nav__inner--socials__item" href="https://vk.com/british_bro_coffee"><mail /></a>
                <a class="nav__inner--socials__item" href="mailto:coffee@britishbro.ru"><vk /></a>
            </div>
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
                {text: 'Галерея', anchor: 'gallery'},
            ],
            navOpened: false
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/style/variables';

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
            position: relative;

            @media screen and (max-width: $--screen-lg) {
                min-height: 87px;
                justify-content: center;
            }
        }

        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-grow: 1;

            a {
                text-decoration: none;
                font-size: 14px;
                font-weight: 300;
            }

            @media screen and (min-width: calc($--screen-md + 1px)) {
                &--top, &--socials, &--burger {
                    display: none;
                }
            }
            @media screen and (max-width: $--screen-md) {
                position: fixed;
                z-index: 10001;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(75.44deg, #4F1F5D -2.66%, #120A2F 108.11%);

                flex-direction: column;
                padding: 36px 30px 10.94vh;
                transform: translate(100%, 0);
                transition: transform .3s ease;

                &.opened {
                    transform: translate(0, 0);
                }

                &--top {
                    flex-basis: 13.49vh;
                    display: flex;
                    width: 100%;
                    position: relative;
                }

                &--close {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: 50px;
                    text-align: right;
                }

                &--footer {
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                }

                &--socials {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 27px;
                    max-width: 264px;
                }

                &--burger {
                    position: absolute;
                    right: 1rem;   
                    top: 50%;
                    transform: translate(0, -50%);
                }

                .btn-outline-yellow {
                    border-color: white;
                }

                a:not(.nav__inner--socials__item) {
                    line-height: 3;
                    font-size: 16px;
                }
            }
        }
    }
</style>