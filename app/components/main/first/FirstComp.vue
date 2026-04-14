<template>
  <div class="main">
    <NuxtImg src="/image/my-foto.webp" />
    <div :class="['main__fon', overlayClass]"></div>
    <div class="main__inform inform">
      <div class="inform__title">
        <h3>{{ t("first.name") }}</h3>
        <h2>{{ t("first.firsName") }}</h2>
      </div>
      <div class="inform__text">
        <h1>{{ t("first.h1") }}</h1>
        <p>
          {{ t("first.sub-title") }}
        </p>
      </div>
      <div class="inform__contact">
        <a
          href="https://github.com/StarV28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="uil:github" style="color: red" :size="isSize" />
        </a>
        <a
          href="https://www.linkedin.com/in/vladimirstarovoit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="mdi:linkedin" style="color: red" :size="isSize" />
        </a>
        <a :href="`mailto:${email}`">
          <Icon name="mdi:email" style="color: red" :size="isSize" />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~012adc7c0f47014f88"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="simple-icons:upwork" style="color: red" :size="isSize" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const email = ref("web.product.studio@gmail.com");
const isSize = ref("24px");
const { theme } = useTheme();
//---------------------------------------//
const overlayClass = computed(() => {
  return theme.value === "dark" ? "overlay-dark" : "overlay-light";
});
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: 25px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  &:not(:last-child) {
    margin-bottom: 120px;
  }
}
.main__fon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}
.overlay-dark {
  background-color: rgba(0, 0, 0, 0.8);
}
.overlay-light {
  background-color: rgba(255, 255, 255, 0.8);
}
.main__inform {
  position: relative;
  z-index: 2;
  width: 50%;
  height: 100%;
}
.inform {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 25px;

  &__title {
    h3,
    h2 {
      font-size: 76px;
      font-weight: 700;
      line-height: 1.1;
      color: var(--text-color);
      margin: 0;
    }
  }

  &__text {
    h1 {
      font-size: 37px;
      font-weight: 400;
      line-height: 1.1;
      color: var(--text-color);
    }
    p {
      font-size: 21px;
      color: var(--text-color);
    }
  }

  &__contact {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    a {
      transition: all 0.3s ease;
      &:hover {
        transition: all 0.3s ease;
        transform: scale(1.3);
      }
    }
  }
}
@media (max-width: 768px) {
  .main:not(:last-child) {
    margin-bottom: 60px;
  }
}
@media (max-width: 526px) {
  .main__inform {
    max-width: 100%;
    height: 100%;
  }
  .inform {
    padding: 25px 15px;

    &__title {
      h3,
      h2 {
        font-size: 56px;
      }
    }

    &__text {
      h1 {
        font-size: 23px;
      }
      p {
        font-size: 18px;
      }
    }
  }
}
@media (max-width: 375px) {
  .inform__title {
    h3,
    h2 {
      font-size: 43px;
    }
  }
}
</style>
