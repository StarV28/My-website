<template>
  <div class="main">
    <div class="main__title">
      <h2>{{ t("touch.title") }}</h2>
      <p>{{ t("touch.sub-title") }}</p>
    </div>
    <div class="main__contacts">
      <div class="main__cont">
        <div class="main__connect box">
          <div class="box__title">
            <h5>{{ t("touch.min-title") }}</h5>
            <p>{{ t("touch.min-sub-title") }}</p>
          </div>
          <div class="box__block-nav">
            <a :href="`mailto:${email}`" class="block">
              <div class="block__icon">
                <Icon name="mdi:email" size="27" />
              </div>
              <div class="block__text">
                <h5>{{ t("touch.email") }}</h5>
                <p>web.product.studio@gmail.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/30661210934"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <div class="block__icon">
                <Icon name="mdi:whatsapp" size="27" />
              </div>
              <div class="block__text">
                <h5>{{ t("touch.whatsUp") }}</h5>
                <!-- <p>+3 (066) 121-09-34</p> -->
              </div>
            </a>
            <a
              href="https://maps.app.goo.gl/J4R18uaZY9yLA83A6"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <div class="block__icon">
                <Icon name="mdi:map-marker" size="27" />
              </div>
              <div class="block__text">
                <h5>{{ t("touch.local") }}</h5>
                <p>Germany Bremen</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="main__form">
        <FormComp />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const email = ref("web.product.studio@gmail.com");
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  align-items: center;
  margin-bottom: 60px;
  &:not(:last-child) {
    margin-bottom: 60px;
  }
}
.main__contacts {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
}
.main__cont {
  width: 50%;
}
.main__form {
  width: 50%;
}
.main__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  h2 {
    margin: 0;
    font-size: 37px;
    font-weight: 400;
    line-height: 1.1;
  }
  p {
    margin: 0;
    max-width: 650px;
    text-align: center;
    font-size: 18px;
    line-height: 1.4;
    color: var(--sub-title-color);
  }
  &:not(:last-child) {
    margin-bottom: 60px;
  }
}
.box {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 25px;

  &__title {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
    h5 {
      margin: 0;
      font-size: 21px;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
    p {
      margin: 0;
      max-width: 620px;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.3;
    }
  }
  &__block-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
  }
}
.block {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
  border: 1px solid var(--line-color);
  border-radius: 15px;
  padding: 15px 35px;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s ease;

  &__icon {
    padding: 10px;
    background-color: var(--line-color);
    border-radius: 7px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 7px;
    h5 {
      margin: 0;
      font-size: 18px;
      text-transform: capitalize;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
    p {
      margin: 0;
      line-height: 1.3;
    }
  }
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 5px 5px 10px var(--line-color);
  }
}
//---------------------------------------//

@media (max-width: 768px) {
  .main {
    &__contacts {
      flex-direction: column;
      gap: 30px;
    }
    &__cont {
      width: 100%;
    }
    &__form {
      width: 100%;
    }
  }
  .block {
    border: none;
    border-bottom: 1px solid var(--line-color);
    border-radius: 0px;
  }
  .main__title {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}
@media (max-width: 525px) {
  .main {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  .main__title {
    h2 {
      font-size: 27px;
    }
    p {
      margin: 0;
      font-size: 16px;
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .box__title {
    h5 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  .block {
    gap: 15px;
    padding: 10px 15px;

    &__icon {
      padding: 10px;
      background-color: var(--line-color);
      border-radius: 7px;
    }

    &__text {
      h5 {
        font-size: 12px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
