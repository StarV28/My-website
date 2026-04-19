<template>
  <GlobalLayout>
    <section class="main">
      <div class="main__title">
        <h1>{{ t("p-barber.title") }}</h1>
        <p>
          {{ t("p-barber.sub-title") }}
        </p>
      </div>
      <div class="main__demo">
        <h2>{{ t("p-barber.h2-6") }}</h2>
        <p>
          <a href="https://starv28.github.io/Barber/" target="_blank"
            ><span>{{ t("p-barber.link-web") }} </span>Barbershop</a
          >
        </p>
      </div>
      <div class="main__grid-box grid-box">
        <div class="grid-box__images">
          <NuxtImg src="/image/wark-1.webp" />
        </div>
        <div class="grid-box__description description">
          <div class="description__text">
            <h2>{{ t("p-barber.h2-1") }}</h2>
            <p>
              {{ t("p-barber.p-1") }}
            </p>
          </div>
          <div class="description__text">
            <h2>{{ t("p-barber.h2-2") }}</h2>
            <ul>
              <li>{{ t("p-barber.li-1") }}</li>
              <li>{{ t("p-barber.li-2") }}</li>
              <li>{{ t("p-barber.li-3") }}</li>
              <li>{{ t("p-barber.li-4") }}</li>
            </ul>
          </div>
          <div class="description__text tech">
            <h2>{{ t("p-barber.h2-3") }}</h2>
            <p>
              <span>HTML,</span><span>CSS/SCSS,</span><span>Java Script</span>
            </p>
          </div>
          <div class="description__text">
            <h2>{{ t("p-barber.h2-4") }}</h2>
            <p>
              {{ t("p-barber.p-2") }}
            </p>
          </div>
          <div class="description__text">
            <h2>{{ t("p-barber.h2-5") }}</h2>
            <p>
              {{ t("p-barber.p-3") }}
            </p>
          </div>
          <div class="description__text">
            <h2>{{ t("p-barber.h2-7") }}</h2>
            <p>
              {{ t("p-barber.p-4") }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </GlobalLayout>
</template>

<script setup lang="ts">
import GlobalLayout from "../../layouts/global.layout.vue";
import { useSeo } from "~/composables/useSeo";
//---------------------------------------//
const { t } = useI18n();

//---------------------------------------//
definePageMeta({
  section: "projects",
});
//---------------------------------------//

useSeo({
  title: "Crypto Aggregator - Nuxt.js & Node.js Project",
  description:
    "Real-time cryptocurrency aggregator built with Nuxt 3 and Node.js. Live price tracking, scalable backend and WebSocket integration.",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Crypto Aggregator",
    applicationCategory: "WebApplication",
    author: {
      "@type": "Person",
      name: "Volodymyr Starovoit",
    },
  },
});
</script>

<style lang="scss" scoped>
h2 {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.3;
}
p,
li {
  margin: 0;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: var(--sub-title-color);
}
.main {
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;

  &__title {
    padding-top: 15px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    h1 {
      margin: 0;
      font-size: 36px;
      font-weight: 700;
      line-height: 1.1;
    }
    p {
      margin: 0;
      display: inline-block;
      max-width: 550px;
      line-height: 1.4;
      color: var(--sub-title-color);
    }
  }
  &__demo {
    display: flex;
    flex-direction: column;
    gap: 7px;
    a {
      display: inline-flex;
      gap: 10px;
      font-weight: 500;
      color: var(--text-color);
      span {
        text-decoration: none;
        color: var(--sub-title-color);
      }
    }
  }
}
.grid-box {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-template-rows: auto;
  column-gap: 25px;
  row-gap: 25px;
  margin-top: 30px;
  margin-bottom: 60px;
}

.grid-box__images {
  position: relative;
  width: 100%;
  padding-bottom: 350px;
  overflow: hidden;
  border-radius: 15px;
  transition: all 0.3s ease;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 5px 5px 10px var(--line-color);
    transform: scale(1.01);
  }
}
.description {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;

  &__text {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 7px;
  }
}
.tech {
  p {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }
}
@media (max-width: 525px) {
  .main {
    padding-top: 30px;
  }
  .main__title {
    h1 {
      font-size: 27px;
    }
  }
  .grid-box {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin-top: 15px;
    margin-bottom: 30px;
    &__images {
      padding-bottom: 300px;
    }
  }
  .description__text {
    ul {
      margin: 0;
    }
  }
}
</style>
