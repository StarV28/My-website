<template>
  <div class="main">
    <div class="main__title">
      <h2>{{ t("about.title") }}</h2>
      <p>{{ t("about.sub-title") }}</p>
    </div>
    <div class="main__text">
      <div class="text">
        <p>{{ t("about.p1") }}</p>
        <p>{{ t("about.p2") }}</p>
        <p>{{ t("about.p3") }}</p>
        <p>{{ t("about.p4") }}</p>
      </div>
      <div class="bring">
        <h5>{{ t("about.title-small") }}</h5>
        <ul>
          <li>{{ t("about.li1") }}</li>
          <li>{{ t("about.li2") }}</li>
          <li>{{ t("about.li3") }}</li>
          <li>{{ t("about.li4") }}</li>
          <li>{{ t("about.li5") }}</li>
          <li>{{ t("about.li6") }}</li>
          <li>{{ t("about.li7") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
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
.main__text {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  p {
    margin: 0;
    line-height: 1.4;
  }
  &:not(:last-child) {
    margin-bottom: 35px;
  }
}
.bring {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 15px;

  h5 {
    font-family: "Inter", sans-serif;
    font-size: 21px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;
  }
  ul {
    margin: 0;
    li {
      line-height: 1.5;
    }
  }
}
@media (max-width: 768px) {
  .main__title {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  .main__text {
    width: 100%;
    margin: 0;
  }
  .text {
    &:not(:last-child) {
      margin-bottom: 25px;
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
  .text {
    p {
      font-size: 14px;
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .bring {
    gap: 10px;
    h5 {
      font-size: 18px;
    }
    ul {
      margin: 0;
      li {
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}
</style>
