<template>
  <div class="main">
    <div class="main__title">
      <h2>{{ t("proj.title") }}</h2>
      <p>{{ t("proj.sub-title") }}</p>
    </div>
    <div class="main__project project">
      <div class="project__box box">
        <div class="box__image">
          <NuxtImg src="/image/work-4.webp" />
        </div>
        <div class="box__text">
          <div class="box__title">
            <h5>{{ t("proj.ag-title") }}</h5>
            <div class="box__link">
              <a
                href="https://wpslab.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="mdi:launch"
                  :style="{ color: iconColor }"
                  :size="21"
                />
              </a>
            </div>
          </div>
          <div class="box__description">{{ t("proj.ag-desc") }}</div>
          <NuxtLink
            :to="localPath('/projects/crypto-aggregator')"
            class="box__btn-link-description"
          >
            {{ t("proj.read") }}
          </NuxtLink>
          <div class="box__tech">
            <span>Nuxt.js</span><span>Type Script</span><span>Node.js</span
            ><span>Express</span><span>JWT authentication,</span
            ><span>WebSocket</span><span>REST API,</span
            ><span>MySQL database</span><span>Redis database cache</span>
          </div>
        </div>
      </div>
      <div class="project__box box">
        <div class="box__image">
          <NuxtImg src="/image/work-3.webp" />
        </div>
        <div class="box__text">
          <div class="box__title">
            <h5>{{ t("proj.st-title") }}</h5>
            <div class="box__link">
              <a
                href="https://luxury-custard-d50581.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="mdi:launch"
                  :style="{ color: iconColor }"
                  :size="21"
                />
              </a>
            </div>
          </div>
          <div class="box__description">{{ t("proj.st-desc") }}</div>
          <NuxtLink
            :to="localPath('/projects/mini-store')"
            class="box__btn-link-description"
          >
            {{ t("proj.read") }}
          </NuxtLink>
          <div class="box__tech">
            <span>Vue.js,</span><span>Type Script,</span><span>Node.js,</span
            ><span>Express,</span><span>JWT authentication,</span
            ><span>REST API,</span><span>MySQL database</span>
          </div>
        </div>
      </div>
      <div class="project__box box">
        <div class="box__image">
          <NuxtImg src="/image/work-2.webp" />
        </div>
        <div class="box__text">
          <div class="box__title">
            <h5>{{ t("proj.ger-title") }}</h5>
            <div class="box__link">
              <a
                href="https://starv28.github.io/Gericht/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="mdi:launch"
                  :style="{ color: iconColor }"
                  :size="21"
                />
              </a>
            </div>
          </div>
          <div class="box__description">{{ t("proj.ger-desc") }}</div>
          <NuxtLink
            :to="localPath('/projects/gericht')"
            class="box__btn-link-description"
          >
            {{ t("proj.read") }}
          </NuxtLink>
          <div class="box__tech">
            <span>HTML</span><span>CSS</span><span>Java Script</span>
          </div>
        </div>
      </div>
      <div class="project__box box">
        <div class="box__image">
          <NuxtImg src="/image/wark-1.webp" />
        </div>
        <div class="box__text">
          <div class="box__title">
            <h5>{{ t("proj.bs-title") }}</h5>
            <div class="box__link">
              <a
                href="https://starv28.github.io/Barber/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="mdi:launch"
                  :style="{ color: iconColor }"
                  :size="21"
                />
              </a>
            </div>
          </div>
          <div class="box__description">{{ t("proj.bs-desc") }}</div>
          <NuxtLink
            :to="localPath('/projects/barber-shop')"
            class="box__btn-link-description"
          >
            {{ t("proj.read") }}
          </NuxtLink>
          <div class="box__tech">
            <span>HTML</span><span>CSS</span><span>Java Script</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main__git-btn">
      <a
        href="https://github.com/StarV28"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="uil:github" :style="{ color: iconColor }" :size="18" />
        <span>{{ t("proj.git-link") }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const localPath = useLocalePath();
const { t } = useI18n();
const { theme } = useTheme();
const iconColor = computed(() => (theme.value === "dark" ? "#fff" : "#000"));
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 60px;
  }
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
.project {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 35px;
}
.box {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid var(--line-color);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    box-shadow: 5px 5px 10px var(--line-color);
  }

  &__image {
    position: relative;
    width: 100%;
    padding-bottom: 420px;
    overflow: hidden;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__text {
    padding: 0 25px 25px 25px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
  }
  &__title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    h5 {
      font-family: "Inter", sans-serif;
      font-size: 21px;
      font-weight: 400;
      line-height: 1.3;
      margin: 0;
    }
    &:not(:last-child) {
      margin: 25px 0;
    }
  }
  &__description {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: var(--sub-title-color);
  }
  &__tech {
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    gap: 15px;

    span {
      padding: 4px 7px;
      border-radius: 5px;
      background-color: var(--accent-color);
      font-size: 12px;
      font-family: "Inter", sans-serif;
      font-weight: 300;
      color: #fff;
    }
  }
  &__btn-link-description {
    font-weight: 500;
    color: var(--text-color);
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
.main__git-btn {
  padding-top: 60px;
  text-align: center;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 10px 20px;
    border: 1px solid var(--line-color);
    border-radius: 7px;
    text-decoration: none;
    transition: all 0.3s ease;
    span {
      font-size: 14px;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: var(--text-color);
    }
    &:hover {
      transition: all 0.3s ease;
      box-shadow: 5px 5px 10px var(--line-color);
    }
  }
}

//---------------------------------------//
@media (max-width: 768px) {
  .main__title {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  .project {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  .box__image {
    padding-bottom: 320px;
  }
  .box__title {
    &:not(:last-child) {
      margin: 10px 0;
    }
  }
  .main__git-btn {
    padding-top: 30px;
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
  .project {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .box__image {
    padding-bottom: 250px;
  }
  .box__title {
    h5 {
      font-size: 17px;
    }
  }
  .box__text {
    padding: 0 10px 10px 10px;
  }
  .box__description {
    font-size: 12px;
  }
  .main__git-btn {
    a {
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
