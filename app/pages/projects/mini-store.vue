<template>
  <GlobalLayout>
    <section class="main">
      <div class="main__title">
        <h1>{{ t("p-store.title") }}</h1>
        <p>
          {{ t("p-store.sub-title") }}
        </p>
      </div>
      <div class="main__demo">
        <h2>{{ t("p-store.h2-6") }}</h2>
        <p>
          <a href="https://luxury-custard-d50581.netlify.app" target="_blank"
            ><span>{{ t("p-store.link-web") }} </span>Mini-Store</a
          >
        </p>
      </div>
      <div class="main__grid-box grid-box">
        <div class="grid-box__images">
          <NuxtImg src="/image/work-3.webp" />
        </div>
        <div class="grid-box__description description">
          <div class="description__text">
            <h2>{{ t("p-store.h2-1") }}</h2>
            <p>
              {{ t("p-store.p-1") }}
            </p>
          </div>
          <div class="description__text">
            <h2>{{ t("p-store.h2-2") }}</h2>
            <ul>
              <li>{{ t("p-store.li-1") }}</li>
              <li>{{ t("p-store.li-2") }}</li>
              <li>{{ t("p-store.li-3") }}</li>
              <li>{{ t("p-store.li-4") }}</li>
            </ul>
          </div>
          <div class="description__text tech">
            <h2>{{ t("p-store.h2-3") }}</h2>
            <p>
              <span>Vue 3,</span><span>Node.js,</span><span>Express,</span
              ><span>WebSocket,</span><span>MySQL,</span><span>Redis,</span>
            </p>
          </div>
          <div class="description__text">
            <h2>{{ t("p-store.h2-4") }}</h2>
            <p>
              {{ t("p-store.p-2") }}
            </p>
          </div>
          <div class="description__text">
            <h2>{{ t("p-store.h2-5") }}</h2>
            <p>
              {{ t("p-store.p-3") }}
            </p>
          </div>
          <div class="description__text">
            <h2>{{ t("p-store.h2-7") }}</h2>
            <p>
              {{ t("p-store.p-4") }}
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
