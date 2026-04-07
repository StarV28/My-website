<template>
  <div class="container">
    <div class="header">
      <div class="header__logo">
        <h2>My</h2>
        <span>website</span>
      </div>
      <div class="header__menu menu">
        <ul :class="['menu__list', { 'menu__list-active': isOpen }]">
          <li class="menu__item">
            <NuxtLink @click="scrollTo('home')">{{ t("menu.home") }}</NuxtLink>
          </li>
          <li class="menu__item">
            <NuxtLink @click="scrollTo('about')">{{
              t("menu.about")
            }}</NuxtLink>
          </li>
          <li class="menu__item">
            <NuxtLink @click="scrollTo('service')">{{
              t("menu.service")
            }}</NuxtLink>
          </li>
          <li class="menu__item">
            <NuxtLink @click="scrollTo('work')">{{ t("menu.work") }}</NuxtLink>
          </li>
          <li class="menu__item">
            <NuxtLink @click="scrollTo('contact')">{{
              t("menu.contact")
            }}</NuxtLink>
          </li>
        </ul>
        <ul class="menu__lang">
          <li
            v-for="langCode in ['en', 'de', 'ua', 'ru']"
            :key="langCode"
            class="menu__lang-item"
            :class="{ 'menu__lang-active': locale === langCode }"
            @click="lang(langCode as LocaleCode)"
          >
            {{ langCode }}
          </li>
          <!-- <li class="menu__lang-item" @click="lang('en')">en</li>
          <li class="menu__lang-item" @click="lang('de')">de</li>
          <li class="menu__lang-item" @click="lang('ua')">ua</li>
          <li class="menu__lang-item" @click="lang('ru')">ru</li> -->
          <ThemTogle />
          <button class="menu__btn-open" @click="onOpen">
            {{ t("menu.menu") }}
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemTogle from "./themes/ThemTogle.vue";
import { useSSRLocale } from "@/composables/useSSRLocale";
//---------------------------------------//
type LocaleCode = "en" | "de" | "ua" | "ru";
//---------------------------------------//
const { locale, setLang } = useSSRLocale();
const { t } = useI18n();
const isOpen = ref<boolean>(false);
//---------------------------------------//
const onOpen = () => {
  isOpen.value = !isOpen.value;
  // if (isOpen.value) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "";
  // }
};
//---------------------------------------//
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });

  isOpen.value = false;
}
//---------------------------------------//
const lang = (lang: LocaleCode) => {
  setLang(lang);
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin: 0 auto;

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: start;

    h2 {
      font-size: 31px;
      font-weight: 700;
      color: var(--text-color);
      margin: 0;
    }
    span {
      font-family: "inter", sans-serif;
      font-size: 12px;
      font-weight: 300;
    }
  }
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 15px;

  &__list {
    display: inline-flex;
    align-items: flex-end;
    gap: 20px;
    list-style: none;
    margin: 0;
  }
  &__item {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 300;
    }
    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 50%;
      height: 2px;
      background-color: var(--text-color);
      opacity: 0;
      transition: all 0.3s ease;
    }
    &:hover {
      &::before {
        transition: all 0.3s ease;
        width: 100%;
        opacity: 1;
      }
    }
  }

  &__lang {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    margin: 0;
  }
  &__btn-open {
    display: none;
  }
}
.menu__lang-item {
  position: relative;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &.menu__lang-active {
    color: red;
    font-weight: 400;
  }
}
@media (max-width: 768px) {
  .header {
    padding: 15px 0;

    &__logo {
      h2 {
        font-size: 25px;
      }
      span {
        font-size: 10px;
      }
    }
  }
  .menu__btn-open {
    display: block;
    background-color: var(--bg-color);
    border: none;
    text-transform: capitalize;
    font-size: 14px;
    color: var(--text-color);
  }
  .menu__list {
    background-color: var(--bg-color);
    flex-direction: column;
    align-items: center;
    padding: 40px 0 0 0;
    gap: 30px;

    position: absolute;
    top: 100%;
    right: 0;
    width: 0%;
    height: 100vh;
    transform: translateX(200%);

    opacity: 0;
    transition: all 0.5s ease;
    z-index: 100;
  }
  .menu__list-active {
    transition: all 0.4s ease;
    width: 50%;
    transform: translateX(0%);
    opacity: 1;
  }
  .menu__lang {
    gap: 15px;
  }
  .menu__lang-item {
    text-transform: capitalize;
  }
}
</style>
