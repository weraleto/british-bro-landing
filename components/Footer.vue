<template>
  <footer class="footer">
    <div class="container footer__container">
        <div class="footer__item footer__socials">
          <a href="" @click.prevent><ig /></a>
          <a href="" @click.prevent><mail /></a>
          <a href="" @click.prevent><vk /></a>
        </div>
        <div class="footer__item footer__logo">
          <a href="/"><img src="@/assets/img/logo-small.svg" alt="Лого"></a>
        </div>
        <div class="footer__item footer__copyright">
          <p>&#169; 2022</p>
          <p>ИП Фамилия И.О. <a href="" @click.prevent>Правовая информация</a></p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/style/variables';

.footer {
    background-color: black;
    color: white;
    padding: 53px 0;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__item {
      width: 100%;
      flex: 1 1 33.333%;
    }
    &__copyright {
      text-align: right;
    }

    &__logo {
      img {
        width: 90px;
        margin: auto;
      }
    }

    &__socials {
      display: flex;
      align-items: center;
      gap: 57px;
      path {
        transition: fill .3s ease;
      }
      a:hover {
        path {
          fill: $--color-yellow;
        }
      }
    }
  
  @media screen and (max-width: $--screen-sm) {
    &__container {
      flex-direction: column;
      max-width: 264px;
    }
    &__socials {
      justify-content: space-between;
      margin-bottom: 35px;
      gap: 5px;
    }
    &__copyright {
      margin-top: 22px;
    }
  }
}
</style>