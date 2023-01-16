<template>
  <div id="app">
    <Navigation></Navigation>
    <main class="main">
      <header class="header">
        <div class="container header__container">
          <small>с 2018 г. в Санкт-Петербурге</small>
          <div class="header__text">
            <h1 class="header__text--title">
              Открой свою кофейню с прибылью 
              <span>от 110 000 ₽</span>
            </h1>
            <p>Давно мечтаешь о собственной кофейне? Открывайся с “British Bro”</p>
            <p>Дарим 150 000 ₽ на открытие!</p>
            <button class="btn btn-yellow large" 
              @click.prevent="$store.commit('setShowModal', true)"
            >Получить предложение</button>
          </div>
          <div class="header__picture">
            <img src="@/assets/img/cup.png" alt="Фирменные стаканы">
          </div>
        </div>
      </header>
      <section class="wbb" id="advantages">
        <div class="wbb__bg-text"></div>
        <div class="container">
          <h2 class="wbb__title">ПОЧЕМУ <span class="highlight">BRITISH BRO COFFEE?</span></h2>
          <client-only>
            <div style="position: relative">
              <div class="">
                <a href="#" class="wbb__swiper--nav wbb__swiper--prev">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle r="22" transform="matrix(-1 0 0 1 22 22)" fill="#ED7253"/>
                  <path d="M9.29289 21.2929C8.90237 21.6834 8.90237 22.3166 9.29289 22.7071L15.6569 29.0711C16.0474 29.4616 16.6805 29.4616 17.0711 29.0711C17.4616 28.6805 17.4616 28.0474 17.0711 27.6569L11.4142 22L17.0711 16.3431C17.4616 15.9526 17.4616 15.3195 17.0711 14.9289C16.6805 14.5384 16.0474 14.5384 15.6569 14.9289L9.29289 21.2929ZM34 21L10 21L10 23L34 23L34 21Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" class="wbb__swiper--nav wbb__swiper--next">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="22" fill="#ED7253"/>
                  <path d="M34.7071 21.2929C35.0976 21.6834 35.0976 22.3166 34.7071 22.7071L28.3431 29.0711C27.9526 29.4616 27.3195 29.4616 26.9289 29.0711C26.5384 28.6805 26.5384 28.0474 26.9289 27.6569L32.5858 22L26.9289 16.3431C26.5384 15.9526 26.5384 15.3195 26.9289 14.9289C27.3195 14.5384 27.9526 14.5384 28.3431 14.9289L34.7071 21.2929ZM10 21L34 21L34 23L10 23L10 21Z" fill="white"/>
                  </svg>
                </a>
              </div>
              <swiper ref="advantagesSwiper" class="wbb__container" :options="swiperOptions">
                  <swiper-slide class="wbb__item" v-for="(it, i) in wbbData" :key="i">
                    <div class="wbb__item--icon">
                      <img :src="require(`@/assets/img/${it.img}.svg`)" :alt="it.title">
                    </div>
                    <h3 class="wbb__item--title">{{it.title}}
                      <a v-if="it.has_btn" :href="it.btn_link" target="_blank">
                        <button class="btn extra-small btn-outline btn-outline-white wbb__item--more">посмотреть</button>
                      </a>
                    </h3>
                    <p class="wbb__item--text">{{it.text}}</p>
                  </swiper-slide>
              </swiper>
            </div>
          </client-only>
        </div>
      </section>

      <section class="business-model" id="business_model">
        <h2 class="business-model__title">
          Бизнес-модель
        </h2>
        <div class="business-model__container">
          <div class="business-model__items">
            <div class="business-model__item" v-for="(it, i) in businesModelData" :key="i">
              <h4 class="business-model__item--title">{{ it.title }}</h4>
              <p class="business-model__item--text">{{ it.text }}</p>
            </div>
          </div>
          <div class="business-model__logo">
            <img src="@/assets/img/logo.png" alt="Лого">
          </div>
          <button @click.prevent="$store.commit('setShowModal', true)" class="btn btn-violet large business-model__btn">Получить предложение</button>
        </div>
        <div class="business-model__franshise" id="investments">
            <div class="bg-navy-gradient">
              <h2 class="business-model__franshise--title">франшиза BRITISH BRO</h2>
              <div class="business-model__franshise--line line1 container">
                <div class="line1-item subtitle">Инвестиции</div>
                <div class="line1-item subtitle">Паушальный взнос</div>
                <div class="line1-item subtitle">Роялти</div>
              </div>
            </div>
            <div class="bg-light-yellow">
              <div class="business-model__franshise--line line2 container">
                <div class="line2-item">
                  <div class="line2-block">
                    <h5 class="line2-block--subtitle">формат с собой</h5>
                    <p>площадь от 5 м2 от 900 000 ₽</p>
                  </div>
                  <div class="line2-block">
                    <h5 class="line2-block--subtitle">кофейня с посадкой</h5>
                    <p>площадь от 40 м2 от 1,5 млн ₽</p>
                  </div>
                </div>
                <div class="line2-item subtitle">
                  <div>400 000 <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78625 23V0.151999H10.0823C13.0263 0.151999 15.1703 0.749332 16.5143 1.944C17.8796 3.13866 18.5623 4.78133 18.5623 6.872C18.5623 8.10933 18.2849 9.272 17.7303 10.36C17.1756 11.448 16.2476 12.3227 14.9463 12.984C13.6663 13.6453 11.9169 13.976 9.69825 13.976H7.61825V23H2.78625ZM0.22625 19.576V16.472H12.5463V19.576H0.22625ZM0.22625 13.976V10.008H9.60225V13.976H0.22625ZM9.21825 10.008C10.1356 10.008 10.9249 9.912 11.5863 9.72C12.2476 9.50667 12.7596 9.176 13.1223 8.728C13.4849 8.28 13.6663 7.71467 13.6663 7.032C13.6663 6.05067 13.3569 5.32533 12.7383 4.856C12.1196 4.36533 11.1489 4.12 9.82625 4.12H7.61825V10.008H9.21825Z" fill="#120A2F"/>
                </svg></div>
                </div>
                <div class="line2-item">
                  <div class="line2-block">
                    <h5 class="line2-block--subtitle">0%</h5>
                    <p>первые 3 месяца</p>
                  </div>
                  <div class="line2-block">
                    <h5 class="line2-block--subtitle">3% от оборота</h5>
                    <p>с четвертого месяца работы</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-coral-gradient">
              <div class="business-model__franshise--line line3 container">
                <div class="line3-item">
                  <div class="line3-item__icon">
                    <img src="@/assets/img/time.svg" alt="срок окупаемости">
                  </div>
                  <div class="line3-item__text">
                    <h5 class="line3-item__text-title">срок окупаемости</h5>
                    <p>от 12 месяцев</p>
                  </div>
                </div>
                <div class="line3-item">
                  <div class="line3-item__icon">
                    <img src="@/assets/img/loc.svg" alt="помещение, которое нам подойдет">
                  </div>
                  <div class="line3-item__text">
                    <h5 class="line3-item__text-title">помещение, которое нам подойдет</h5>
                    <p>1 этаж, высокая проходимость, электричество от 10 квт, первая линия</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section class="banner" id="promo">
        <div class="container banner__container">
          <div class="banner__picture">
            <img src="@/assets/img/banner.png" alt="Напишите нам и получите скидку на открытие 150 000 ₽">
          </div>
          <div class="banner__text">
            <h3 class="banner__text--title">Вы уже готовы сделать первый шаг к открытию собственной кофейни?</h3>
            <button @click.prevent="$store.commit('setShowModal', true)" class="btn btn-white large banner__text--btn">Получить предложение</button>
          </div>
        </div>
      </section>

      <section class="steps">
        <h2 class="steps__title">ГРАФИК ОТКРЫТИЯ ВАШЕЙ КОФЕЙНИ</h2>
        <div class="container steps__container">
          <div class="steps__container--picture">
            <picture>
              <source media="(min-width:600px)" srcset="@/assets/img/opening-plan.png">
              <source media="(min-width:0px)" srcset="@/assets/img/opening-plan-m.png">
              <img src="@/assets/img/opening-plan.png" alt="ГРАФИК ОТКРЫТИЯ ВАШЕЙ КОФЕЙНИ">
            </picture>
          </div>
        </div>  
        <div class="steps__footer">
          <div class="container steps__footer--inner">
            <p>с british bro вы не останетесь одиноки ни на одном из этапов открытия.</p>
            <p>Мы знаем, как это не просто, мы открыли 4 собственные кофейни в Санкт-Петербурге различных форматов.</p>
          </div>
        </div>
      </section>
      <section id="gallery" class="gallery">
        <swiper :options="swiperGallery">
          <swiper-slide>
            <img src="@/assets/img/sw2.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/sw3.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/sw4.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/sw5.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/sw6.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/sw7.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/sw1.jpg" />
          </swiper-slide>
        </swiper>
        <div class="gallery-pagination swiper-pagination-coral" slot="pagination"></div>
      </section>

      <section class="form" id="form">
        <div class="container form__container">
          <div class="form__el">
            <h2 class="form__el--title">
              Присоединяйся!
            </h2>
            <form-component btn-text="Откройте уже мою кофейню"></form-component>
          </div>
          <div class="form__pic">
            <div class="form__bg">
              <img src="@/assets/img/logo-black.png" alt="Лого на черном фоне">
            </div>
            <picture style="position: relative; z-index: 2">
              <source media="(min-width:767px)" srcset="@/assets/img/form-man.png">
              <source media="(min-width:0px)" srcset="@/assets/img/form-man-m.png">
              <img src="@/assets/img/form-man.png" alt="Бариста">
            </picture>
          </div>
        </div>
      </section>

      <form-popup></form-popup>
    </main>
    <Footer />
  </div>
</template>

<script>
import {
  Swiper,
  SwiperSlide
} from 'vue-awesome-swiper'
export default {
  name: 'MainPage',
  components: {
    Swiper, SwiperSlide
  },
  data: () => {
    return {
      wbbData: [
        {
          img: 'wb0',
          title: 'Открытие под ключ', 
          text: 'Вы не останетесь наедине с руководствами и брендбуками. Весь путь  открытия мы пройдем вместе. Всему обучим и обойдем все сложности.'
        },
        {
          img: 'wb1',
          title: 'Работа в плюс', 
          text: 'Возможность получения прибыли уже с первого месяца работы'
        },
        {
          img: 'wb2',
          title: 'АВТОРСКИЙ КОФЕ', 
          text: 'Более 40 уникальных рецептов, красивые напитки, которые точно запостят в соцсети',
          has_btn: true,
          btn_link: '/menu/coffee.pdf'
        },
        {
          img: 'wb3',
          title: 'КОНКУРЕНТНАЯ УСТОЙЧИВОСТЬ', 
          text: 'Уверенно чувствуем себя в соседстве с кофейнями других брендов'
        },
        {
          img: 'wb4',
          title: 'кухня', 
          text: 'Гонконгские вафли и френчдоги, десерты и выпечка - то, что увеличит вашу прибыль',
          has_btn: true,
          btn_link: '/menu/food.pdf'
        },
        {
          img: 'wb5',
          title: 'МИНИМАЛЬНЫЕ ИНВЕСТИЦИИ', 
          text: 'Формат с собой от 900 000 ₽, кофейня с посадкой от 1,5 млн ₽. Роялти 0% первые 3 месяца'
        },
      ],
      businesModelData: [
        {title: 'ДИЗАЙН', text: 'Все наши кофейни уникальны. Светлая, темная, желтая - вы сможете реализовать свои творческие пожелания.'},
        {title: 'Техническая помощь', text: 'На всех этапах работы полностью обучаем вас как руководителя и ваш персонал всем стандартам'},
        {title: 'Логотип', text: 'Мимо нашего котика равнодушно не пройти'},
        {title: 'Качество', text: 'Собственный бленд-кофе готовим только из лучших ингридиентов. Совместно тестируем новые позиции.'},
      ],
      swiperOptions: {
        slidesPerGroup: 1,
        navigation: {
          nextEl: '.wbb__swiper--next',
          prevEl: '.wbb__swiper--prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          991: {
            enabled: false,
            allowSlideNext: false,
            allowSlidePrev: false,
            allowTouchMove: false,
          },
        }
      },
      swiperGallery: {
        slidesPerGroup: 1,
        
        centeredSlides: true,
        navigation: false,
        loop: true,
        autoplay: true,
        pagination: {
          el: '.gallery-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1.3,
          },
          480: {
            slidesPerView: 2,
          }
        }
      }
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/extensions';
@import 'swiper/src/components/core/core';
@import 'swiper/src/components/pagination/pagination';

#app {
  max-width: 100vw;
  overflow-x: hidden;

  .swiper-pagination-bullet {
    width: 28px;
    height: 28px;
    opacity: 1;
    @media screen and (max-width: $--screen-xxs) {
      width: 18px;
      height: 18px;
    }
  }
  .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
    background-color: #fff;
  }
}


.header {
  min-height: 641px;
  background: url('@/assets/img/header-bg.png') no-repeat;
  background-position: 40% 40%;
  background-size: auto 125%;
  padding-top: 35px;

  &__container {
    position: relative;

    &::before {
      position: absolute;
      width: 126.93vw;
      height: 126.93vw;
      background: $--color-violet;
      border-radius: 50%;
      bottom: calc(60% + 35px);
      right: 36%;
    }

    small {
      position: absolute;
      top: 0;
      right: 0;
      color: #120A2F;
      font-weight: 300;
      font-size: 1rem;
    }
    @media screen and (max-width: $--screen-lg) {
      small {
        right: 1rem;
      }
    }

    @media screen and (max-width: $--screen-sm) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      small {
        left: 1rem;
        right: auto;
        color: white;
        font-size: .75rem;
        top: 0px;
        transform: translate(0, -150%);
      }
      &::before {
        content: '';
      }
    }
  }

  &__picture {
    position: absolute;
    width: 58.48%;
    right: 0;
    top: 0;
    z-index: 2;
    transform: translate(65px, 40px);
    @media screen and (max-width: $--screen-lg) {
      width: 43.48%;
      transform: translate(-10%, 7%);
    }
    @media screen and (max-width: $--screen-sm) {
      position: relative;
      transform: none;
      margin-top: 30px;
    }
    @media screen and (max-width: $--screen-xs) {
      width: 90%;
    }
  }

  &__text {
    max-width: 46.89%;
    position: relative;
    z-index: 2;

    &--title {
      font-size: 48px;
      font-weight: bold;
      margin-top: 0;

      span {
        font-size: 2em;
        display: block;
        letter-spacing: -2px;
      }
    }

    p {
      font-size: 24px;
      font-weight: 300;
      &:first-of-type {
        margin: 1em 0;
      }
      &:last-of-type {
        margin-bottom: 2em;
      }
    }
    @media screen and (max-width: $--screen-lg) {
      &--title {
        font-size: 3.33vw;
      }
      p {
        font-size: 1rem;
      }
    }
    @media screen and (max-width: $--screen-sm) {
      max-width: 375px;
      &--title {
        font-size: 28px;
      }
    }
    @media screen and (max-width: $--screen-xxs) {
      &--title {
        font-size: 22px;
      }
    }
  }

  &::before {
    position: absolute;
    width: 59.2vw;
    height: 59.2vw;
    background: #88385E;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    transform: translate(20%, 25%);
  }
  &::after {
    position: absolute;
    width: 120vw;
    height: 50vw;
    background: $--color-violet;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transform: translate(-10%, 50%) rotate(6deg);
  }

  @media screen and (min-width: 1441px) {
    background-size: auto 150%;
  }
  @media screen and (max-width: $--screen-lg) {
    min-height: 44.51vw;
    padding: 35px 0;
  }
  @media screen and (max-width: $--screen-sm) {
    background: $--color-violet-dark;
    position: relative;
    overflow: hidden;
    &::before, &::after {
      content: '';
    }
  }
  @media screen and (max-width: $--screen-xs) {
    &::after {
      transform: translate(-10%, 32%) rotate(6deg);
    }
    &::before {
      width: 90vw;
      height: 90vw;
      transform: translate(53%, 0%);
      // bottom: 70%;
    }
  }
}

.main {
  margin-top: 122px;
  @media screen and (max-width: $--screen-lg) {
    margin-top: 87px;
  }
}

.wbb {
  background-color: $--color-violet;
  padding-top: 50px;
  padding-bottom: 60px;
  position: relative;
  width: 100%;

  &__swiper {
    &--nav {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 3;
    }
    &--prev {
      left: 1rem;
    }
    &--next {
      right: 1rem;
    }

    @media screen and (min-width: calc($--screen-md + 1px)) {
      &--nav {
        display: none;
      }
    }

    @media screen and (max-width: $--screen-xxs) {
      &--prev {
        left: 0;
      }
      &--next {
        right: 0;
      }
    }
  }

  &__title {
    @extend %title;
    font-weight: 400;

    .highlight {
      color: $--color-colar;
    }
  }
  &__container, .swiper-wrapper {
    @media screen and (min-width: calc($--screen-md + 1px)) {
      margin-top: 58px;
      max-width: 1037px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 50px;
      column-gap: 40px;
      z-index: 2;
      position: relative;
      overflow: visible;
    }
    @media screen and (max-width: $--screen-md) {
      max-width: 63.73%;
    }
  }
  &__item {
    &--title {
      @extend %subtitle;
      margin-top: 1em;
      position: relative;
      display: inline-block;
    }
    &--more {
      position: absolute;
      top: 0%;
      left: calc(100% + 19px);
      // transform: translate(0, -50%);
    }
    &--text {
      margin-top: 1em;
    }
    &--icon {
      img {
        width: 160px;
        height: 160px;
        object-fit: contain;
      }
    }
    @media screen and (min-width: calc($--screen-md + 1px)) {
      flex: 0 1 30%;
    }
    @media screen and (max-width: $--screen-lg) {
      &--more {
        position: static;
        transform: none;
      }
    }
    @media screen and (max-width: $--screen-md) {
      text-align: center;
      &--icon img {
        margin: auto;
        width: 80px;
        height: 80px;
      }
      &--title {
        a {
          display: block;
          margin-top: 5px;
        }
      }
    }
  }
  &__bg-text {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 18px;
    bottom: 0;
    width: 211px;
    background: url('@/assets/img/why.svg') no-repeat center center;
    background-size: contain;
  }

  &::before {
    position: absolute;
    width: 120vw;
    height: 12vw;
    background: $--color-violet-dark;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transform: translate(-10%, 50%) rotate(-5deg);
  }

  @media screen and (max-width: $--screen-md) {
    &__bg-text {
      display: none;
    }
    &__title {
      margin-bottom: 1em;
    }
  }
  @media screen and (max-width: $--screen-sm) {
    padding-top: 30px;
    padding-bottom: 80px;
    &__title {
      text-align: center;
    }
    &::before {
      content: '';   
    }
  }
}

.banner {
  padding-bottom: 11px;

  &__container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-height: 270px;
  }
  &__picture {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 26.26%;
  }
  &__text {
    @extend %textCenter;
    padding-top: 38px;
    padding-bottom: 13px;
    max-width: 69.56%;

    &--title {
      @extend %subtitle;
      font-size: 48px;
      line-height: 1;
      color: $--color-yellow-light;
      margin-bottom: 45px;
    }
  }
  @media screen and (max-width: $--screen-lg) {
    &__picture {
      left: 1rem;
    }
  }
  @media screen and (max-width: $--screen-md) {
    &__text {
      &--title {
        font-size: 36px;
      }
    }
  }
  @media screen and (max-width: $--screen-sm) {
    padding: 0;
    position: relative;
    &__container {
      justify-content: flex-start;
      max-height: unset;
    }
    &__text {
      max-width: 100%;
      padding-bottom: 35px;
      padding-top: 50px;
      &--title {
        text-align: left;
        max-width: 50%;
        font-size: 24px;
      }
    }
    &__picture {
      width: 40%;
      bottom: auto;
      left: auto;
      right: 1.6rem;
      top: 0;
      transform: translate(0, -45%);
    }
    &::before {
      content: "";
      width: 120vw;
      height: 22vw;
      left: 0;
      right: 0;
      bottom: 100%;
      position: absolute;
      background-color: #120A2F;
      transform: translate(0, 47%) rotate(-11deg);
    }
  }
  @media screen and (max-width: $--screen-xs) {
    &__text {
      &--title {
        font-size: 16px;
        max-width: 40%;
      }
    }
    &__picture {
      right: 1rem;
      width: 55%;
    }
  }
  @media screen and (max-width: $--screen-xxs) {
    &__text {
      &--title {
        max-width: 45%;
      }
    }
    &__picture {
      width: 45%;
    }
  }
}

.steps {
  background-color: #F4F3F4;;
  padding-top: 54px;
  overflow: hidden;

  &__title {
    @extend %title;
    @extend %textCenter;
    color: #1E1E1E;
    padding: 0 1em;
  }
  &__container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    &--picture {
      position: relative;
      margin-bottom: 29px;

      &::before {
        position: absolute;
        right: 100%;
        top: 0;
        bottom: 0;
        min-width: 385px;
        background: url('@/assets/img/cats-left.png') no-repeat top center;
        background-size: contain;
      }
      &::after {
        position: absolute;
        left: 102%;
        top: 0;
        bottom: 0;
        min-width: 385px;
        background: url('@/assets/img/cats-right.png') no-repeat top center;
        background-size: contain;
      }
      @media screen and (min-width: calc($--screen-sm + 1px)) {
        &::before, &::after {
          content: '';
        }
      }
    }
  }
  &__footer {
    position: relative;
    padding: 33px 0 12px;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 200%;
      width: 110.9vw;
      background-color: #6C6C6C;
      border-radius: 50%;
    }
    &--inner {
      @extend %textCenter;
      position: relative;
      z-index: 3;

      p:first-child {
        @extend %subtitle;
      }
    }
    @media screen and (max-width: $--screen-md) {
      &::after {
        width: 200%;
      }
    }
  }

  @media screen and (max-width: $--screen-sm) {
    padding-top: 1.5rem;
  }
}

.form {
  background-color: #231F20;
  position: relative;
  overflow: hidden;

  &__bg {
    position: absolute;
    width: 672px;
    top: 0;
    right: 0;
    transform: translate(45%, 0);
    @media screen and (max-width: $--screen-lg) {
      width: 55vw;
    }
    @media screen and (max-width: $--screen-sm) {
      display: none;
    }
  }

  &__container {
    display: flex;
    position: relative;

    @media screen and (max-width: $--screen-sm) {
      flex-direction: column-reverse;
      padding: 0;
    }
  }

  &__pic {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 52.34%;
    img {
      height: 100%;
      object-fit: contain;
    }

    @media screen and (max-width: 1099px) {
      top: auto;
    }
    @media screen and (max-width: $--screen-sm) {
      width: 100%;
      position: static;
    }
  }

  &__el {
    width: 100%;
    max-width: 41%;
    padding-top: 77px;
    padding-bottom: 64px;
    &--title {
      @extend %title;
      margin-bottom: .797em;
    }
    &--form {
      &__group {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;

        & > div {
          text-align: left;
        }
      }
    }
    @media screen and (max-width: $--screen-sm) {
      max-width: 100%;
      background-color: #1C1617;
      padding: 2rem 1rem 42px;
      text-align: center;
    }
  }
}

.gallery {
  background-color: #231F20;

  &-pagination {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    gap: 20px;
  }

  .swiper-slide {
    @media screen and (max-width: 480px) {
      min-height: 268px; 
      img {
        object-fit: cover;
        height: 268px; 
        width: 100%;
      }
    }
  }
}

.business-model {
  &__title {
    @extend %title;
    @extend %textCenter;
    padding: 15px 0;
    position: relative;
    z-index: 2;
    @media screen and (max-width: $--screen-sm) {
      &::before {
        content: '';
        position: absolute;
        width: 120vw;
        height: 2.3rem;
        left: 0;
        right: 0;
        top: 100%;
        background-color: $--color-violet-dark;
        transform: rotate(2deg) translate(0, -36%);
      }
    }
  }
  &__container {
    min-height: 57.63vw;
    padding-top: 3.472vw;
    padding-bottom: 10.97vw;

    background: url('@/assets/img/beach-bg.jpg') no-repeat center center;
    background-size: cover;
    @media screen and (max-width: $--screen-sm) {
      background: url('@/assets/img/beach-bg-t.jpg') no-repeat center center;
      background-size: cover;
      padding-top: 3em;
    }
    @media screen and (max-width: $--screen-xs) {
      padding-bottom: 17px;
    }
    @media screen and (max-width: $--screen-xxs) {
      background: url('@/assets/img/beach-bg-m.jpg') no-repeat bottom center;
      background-size: cover;
    }
  }
  &__items {
    max-width: 1039px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    margin-bottom: 1.458vw;
    box-sizing: content-box;
    padding: 0 1rem;

    @media screen and (max-width: $--screen-sm) {
      flex-direction: column;
      gap: 1.5em;
    }
  }
  &__item {
    flex: 1 1 22%;
    &--title {
      @extend %subtitle;
      margin-bottom: 1em;
      white-space: nowrap;
    }
    @media screen and (max-width: $--screen-sm) {
      &--title {
        margin-bottom: 0;
      }
    }
  }
  &__logo {
    max-width: 26.11vw;
    margin: auto;

    @media screen and (max-width: $--screen-sm) {
      margin-bottom: 20px;
      margin-top: 70px;
      max-width: 210px;
    }
  }

  &__franshise {
    // background: linear-gradient(1.6deg, #F07352 2%, #3EE7BC 99.28%);

    &--title {
      @extend %title;
      @extend %textCenter;
      color: $--color-violet;
      padding: 1em 0;
      @media screen and (max-width: $--screen-xs) {
        padding: 20px 0;
      }
    }

    &--line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #120A2F;
    }
  }

  &__btn {
    margin: auto;
    width: 100%;
    max-width: 267px;
    display: block;
    @media screen and (min-width: calc($--screen-sm + 1px)) {
      display: none;
    }
  }
}
.line1, .line2 {
  text-align: center;
  &-item {
    flex: 1 1 33.333%;
    width: 100%;
  }
  &-block {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &--subtitle {
      font-size: 24px;
      font-family: $--font-family-heading;
      font-feature-settings: 'pnum' on, 'lnum' on;
      font-weight: normal;

    }
    @media screen and (max-width: $--screen-sm) {
      text-align: left;
      padding: 0 1rem;
      &--subtitle {
        font-size: 16px;
      }
    }
  }
  .subtitle {
    @extend %subtitle;
  }
}
.line1 {
  padding: 25px 0;

  @media screen and (max-width: $--screen-xs) {
    padding: 1rem 0;
  }
}
.line2 {
  padding: 12px 0;
  width: 100%;

  &-item {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: space-between;
  }
  &-item:nth-child(2) {
    justify-content: center;
  }

  &-item:not(:last-child) {
    position: relative;
    &::after {
      position: absolute;
      content: url('@/assets/img/plus.svg');
      display: block;
      top: 50%;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
  @media screen and (max-width: $--screen-sm) {
    svg {
      width: 14px;
      height: 14px;
    }
  }
}
.line3 {
  gap: 93px;
  padding-top: 30px;
  justify-content: center;
  &-item {
    display: flex;
    align-items: center;
    gap: 13px;
    &__icon {
      max-width: 61px;
      width: 100%;
    }
    &__text {
      &-title {
        @extend %subtitle;
      }
    }
  }
  @media screen and (max-width: $--screen-sm) {
    flex-direction: column;
    align-items: flex-start;
    padding: 22px 1.5rem 50px;
    gap: 22px;
    &-item {
      &__icon {
        max-width: 31px;
      }
    }
  }
  @media screen and (max-width: $--screen-xs) {
    padding: 22px 1.5rem 10px;
  }
}
.bg-navy-gradient {
  background: linear-gradient(to bottom, #3EE7BC, #6fa774);
}
.bg-light-yellow {
  background: $--color-yellow-light;
  display: flex;
  width: 100%;
}
.bg-coral-gradient {
  background: linear-gradient(to bottom, #ae865d, #F07352);
  padding-bottom: 92px;
}
</style>
