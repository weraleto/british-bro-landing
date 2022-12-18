<template>
  <div id="app">
    <Navigation></Navigation>
    <main class="main">
      <header class="header">
        <div class="container header__container">
          <div class="header__text">
            <h1 class="header__text--title">
              Открой свою кофейню с прибылью 
              <span>от 110 000 ₽</span>
            </h1>
            <p>Давно мечтаешь о собственной кофейне? Открывайся с “British Bro”</p>
            <p>Дарим 150 000 ₽ на открытие!</p>
            <button class="btn btn-yellow large">Получить предложение</button>
          </div>
          <small>с 2018 г. в Санкт-Петербурге</small>
          <div class="header__picture">
            <img src="@/assets/img/cup.png" alt="Фирменные стаканы">
          </div>
        </div>
      </header>
      <section class="wbb" id="advantages">
        <div class="wbb__bg-text"></div>
        <div class="container">
          <h2 class="wbb__title">ПОЧЕМУ <span class="highlight">BRITISH BRO COFFEE?</span></h2>
          <div class="wbb__container">
            <div class="wbb__item" v-for="(it, i) in wbbData" :key="i">
              <div class="wbb__item--icon">
                <img :src="require(`@/assets/img/${it.img}.svg`)" :alt="it.title">
              </div>
              <h3 class="wbb__item--title">{{it.title}}
                <a v-if="it.has_btn" :href="it.btn_link" target="_blank">
                  <button class="btn extra-small btn-outline btn-outline-white wbb__item--more">посмотреть</button>
                </a>
              </h3>
              <p class="wbb__item--text">{{it.text}}</p>
            </div>
          </div>
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
        </div>
        <div class="business-model__franshise">
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
                <div class="line2-item subtitle">400 000 <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78625 23V0.151999H10.0823C13.0263 0.151999 15.1703 0.749332 16.5143 1.944C17.8796 3.13866 18.5623 4.78133 18.5623 6.872C18.5623 8.10933 18.2849 9.272 17.7303 10.36C17.1756 11.448 16.2476 12.3227 14.9463 12.984C13.6663 13.6453 11.9169 13.976 9.69825 13.976H7.61825V23H2.78625ZM0.22625 19.576V16.472H12.5463V19.576H0.22625ZM0.22625 13.976V10.008H9.60225V13.976H0.22625ZM9.21825 10.008C10.1356 10.008 10.9249 9.912 11.5863 9.72C12.2476 9.50667 12.7596 9.176 13.1223 8.728C13.4849 8.28 13.6663 7.71467 13.6663 7.032C13.6663 6.05067 13.3569 5.32533 12.7383 4.856C12.1196 4.36533 11.1489 4.12 9.82625 4.12H7.61825V10.008H9.21825Z" fill="#120A2F"/>
                </svg>
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
            <button @click.prevent class="btn btn-white large banner__text--btn">Получить предложение</button>
          </div>
        </div>
      </section>

      <section class="steps" id="investments">
        <h2 class="steps__title">ГРАФИК ОТКРЫТИЯ ВАШЕЙ КОФЕЙНИ</h2>
        <div class="container steps__container">
          <div class="steps__container--picture">
            <img src="@/assets/img/opening-plan.png" alt="ГРАФИК ОТКРЫТИЯ ВАШЕЙ КОФЕЙНИ">
          </div>
        </div>  
        <div class="steps__footer">
          <div class="container steps__footer--inner">
            <p>с british bro вы не останетесь одиноки ни на одном из этапов открытия.</p>
            <p>Мы знаем, как это не просто, мы открыли 4 собственные кофейни в Санкт-Петербурге различных форматов.</p>
          </div>
        </div>
      </section>

      <section class="form" id="form">
        <div class="form__bg">
          <img src="@/assets/img/logo-black.png" alt="Лого на черном фоне">
        </div>
        <div class="container form__container">
          <div class="form__el">
            <h2 class="form__el--title">
              Присоединяйся!
            </h2>
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
              <button type="submit" class="btn large btn-yellow" @click.prevent>Откройте уже мою кофейню</button>
            </form>
          </div>
          <div class="form__pic">
            <img src="@/assets/img/form-man.png" alt="Бариста">
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
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
          btn_link: ''
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
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/extensions';

#app {
  max-width: 100vw;
  overflow-x: hidden;
}

.header {
  min-height: 641px;
  background: url('@/assets/img/header-bg.png') no-repeat;
  background-position: 40% 40%;
  background-size: auto 125%;
  padding-top: 35px;

  &__container {
    position: relative;

    small {
      position: absolute;
      top: 0;
      right: 0;
      color: #120A2F;
      font-weight: 300;
      font-size: 1rem;
    }
  }

  &__picture {
    position: absolute;
    width: 58.48%;
    right: 0;
    top: 0;
    z-index: 2;
    transform: translate(65px, 40px);
  }

  &__text {
    max-width: 46.89%;

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
  }

  @media screen and (min-width: 1441px) {
    background-size: auto 150%;
  }
}

.main {
  margin-top: 122px;
}

.wbb {
  background-color: $--color-violet;
  padding-top: 50px;
  padding-bottom: 60px;
  position: relative;
  width: 100%;

  &__title {
    @extend %title;
    font-weight: 400;

    .highlight {
      color: $--color-colar;
    }
  }
  &__container {
    margin-top: 58px;
    max-width: 1037px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 50px;
    column-gap: 40px;
    z-index: 2;
    position: relative;
  }
  &__item {
    flex: 0 1 30%;

    &--title {
      @extend %subtitle;
      margin-top: 1em;
      position: relative;
      display: inline-block;
    }
    &--more {
      position: absolute;
      top: 50%;
      left: calc(100% + 19px);
      transform: translate(0, -50%);
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
}

.steps {
  background-color: #F4F3F4;;
  padding-top: 54px;
  overflow: hidden;

  &__title {
    @extend %title;
    @extend %textCenter;
    color: #1E1E1E;
  }
  &__container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    &--picture {
      position: relative;
      margin-bottom: 29px;

      &::before {
        content: '';
        position: absolute;
        right: 100%;
        top: 0;
        bottom: 0;
        min-width: 385px;
        background: url('@/assets/img/cats-left.png') no-repeat top center;
        background-size: contain;
      }
      &::after {
        content: '';
        position: absolute;
        left: 102%;
        top: 0;
        bottom: 0;
        min-width: 385px;
        background: url('@/assets/img/cats-right.png') no-repeat top center;
        background-size: contain;
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
    transform: translate(9.52%, 0);
  }

  &__container {
    display: flex;
    position: relative;
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
      }
    }
  }
}

.business-model {
  &__title {
    @extend %title;
    @extend %textCenter;
    padding: 15px 0;
  }
  &__container {
    min-height: 57.63vw;
    padding-top: 3.472vw;
    padding-bottom: 10.97vw;

    background: url('@/assets/img/beach-bg.jpg') no-repeat center center;
    background-size: cover;
  }
  &__items {
    max-width: 1039px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    margin-bottom: 1.458vw;
  }
  &__item {
    flex: 1 1 22%;
    &--title {
      @extend %subtitle;
      margin-bottom: 1em;
      white-space: nowrap;
    }
  }
  &__logo {
    max-width: 26.11vw;
    margin: auto;
  }

  &__franshise {
    // background: linear-gradient(1.6deg, #F07352 2%, #3EE7BC 99.28%);

    &--title {
      @extend %title;
      @extend %textCenter;
      color: $--color-violet;
      padding: 1em 0;
    }

    &--line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #120A2F;
    }
  }
}
.line1, .line2 {
  @extend %textCenter;
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
      font-weight: normal;
    }
  }
  .subtitle {
    @extend %subtitle;
  }
}
.line1 {
  padding: 25px 0;
}
.line2 {
  padding: 12px 0;
  // &-item {
  //   height: 100%;
  // }
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
    }
    &__text {
      &-title {
        @extend %subtitle;
      }
    }
  }
}
.bg-navy-gradient {
  background: linear-gradient(to bottom, #3EE7BC, #6fa774);
}
.bg-light-yellow {
  background: $--color-yellow-light;
}
.bg-coral-gradient {
  background: linear-gradient(to bottom, #ae865d, #F07352);
  padding-bottom: 92px;
}
</style>
