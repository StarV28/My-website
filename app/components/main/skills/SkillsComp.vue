<template>
  <div class="main">
    <div class="main__title">
      <h2>{{ t("skills.title") }}</h2>
      <p>{{ t("skills.sub-title") }}</p>
    </div>
    <div class="main__tech tech">
      <div class="tech__block">
        <h5 class="tech__title">{{ t("skills.fr-title") }}</h5>
        <div class="tech__box">
          <span>{{ t("skills.fr0") }}</span>
          <span>{{ t("skills.fr1") }}</span>
          <span>{{ t("skills.fr2") }}</span>
          <span>{{ t("skills.fr3") }}</span>
        </div>
      </div>

      <div class="tech__block">
        <h5 class="tech__title">{{ t("skills.bac-title") }}</h5>
        <div class="tech__box">
          <span>{{ t("skills.bac1") }}</span>
          <span>{{ t("skills.bac2") }}</span>
          <span>{{ t("skills.bac3") }}</span>
          <span>{{ t("skills.bac4") }}</span>
        </div>
      </div>

      <div class="tech__block">
        <h5 class="tech__title">{{ t("skills.db-title") }}</h5>
        <div class="tech__box">
          <span>{{ t("skills.db1") }}</span>
          <span>{{ t("skills.db2") }}</span>
          <span>{{ t("skills.db3") }}</span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="tech__block">
        <h5 class="tech__title">{{ t("skills.dev-title") }}</h5>
        <div class="tech__box">
          <span>{{ t("skills.dev1") }}</span>
          <span>{{ t("skills.dev2") }}</span>
          <span>{{ t("skills.dev3") }}</span>
          <span>{{ t("skills.dev4") }}</span>
        </div>
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
.tech {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-template-rows: auto;
  row-gap: 30px;
  column-gap: 25px;
  &__block {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    padding: 25px 15px;
    border: 1px solid var(--line-color);
    border-radius: 15px;
  }
  &__title {
    font-size: 21px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;
  }
  &__box {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    span {
      font-size: 14px;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      line-height: 1.4;
    }
  }
}
@media (max-width: 768px) {
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
  .tech {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: auto;
    row-gap: 15px;
    column-gap: 0;
    &__block {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 15px;

      padding: 15px 10px;
    }
    &__title {
      font-size: 18px;
    }
    &__box {
      span {
        font-size: 12px;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        line-height: 1.4;
      }
    }
  }
}
</style>
