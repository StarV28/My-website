<template>
  <div class="footer">
    <div class="footer__box box">
      <div class="box__seo">
        <h2>{{ t("foot.name") }}</h2>
        <p>{{ t("seo.text-footer") }}</p>
      </div>
      <div class="box__connect">
        <h5>{{ t("foot.connect") }}</h5>
        <div class="box__icon">
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
            <Icon
              name="simple-icons:upwork"
              style="color: red"
              :size="isSize"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="footer__copyright copyright">
      <span>© 2026 All rights reserved.</span>
      <span>Made by Starovoit Volodymyr</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const email = ref("web.product.studio@gmail.com");
const isSize = ref("18px");
</script>

<style lang="scss" scoped>
.footer {
  padding: 35px 0;
}
.box {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  border-bottom: 1px solid var(--line-color);
  padding-bottom: 25px;
  &__seo {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;

    h2 {
      margin: 0;
      font-size: 21px;
      font-weight: 400;
      line-height: 1.1;
    }
    p {
      margin: 0;
      max-width: 500px;
      font-size: 14px;
      line-height: 1.4;
      color: var(--sub-title-color);
    }
  }
  &__connect {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    h5 {
      margin: 0;
      font-size: 21px;
      font-weight: 400;
      line-height: 1.1;
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    gap: 25px;
    a {
      transition: all 0.3s ease;
    }
    a:hover {
      transition: all 0.3s ease;
      transform: scale(1.2);
    }
  }
}
.footer__copyright {
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  span {
    font-size: 12px;
    font-family: "Inter", sans-serif;
    font-weight: 200;
  }
}
@media (max-width: 525px) {
  .footer {
    padding: 20px 0;
  }
  .box {
    flex-direction: column;
    padding-bottom: 20px;
    &__seo {
      width: 100%;

      h2 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
      }
    }
    &__connect {
      width: 100%;
      h5 {
        font-size: 18px;
      }
    }
  }
  .footer__copyright {
    padding: 20px 0;
    gap: 15px;

    span {
      font-size: 10px;
    }
  }
}
</style>
