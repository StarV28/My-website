<template>
  <form class="form" @submit="onSubmit">
    <h5 class="form__title">{{ t("form.title") }}</h5>
    <div class="form__name-box">
      <label class="form__label">
        {{ t("form.name") }}
        <Field
          name="name"
          type="text"
          placeholder="Your Name"
          class="name-box__inp"
        />
        <ErrorMessage name="name" class="error" />
      </label>
      <label class="form__label">
        {{ t("form.email") }}
        <Field
          name="email"
          type="email"
          placeholder="your.email@example.com"
          class="name-box__inp"
        />
        <ErrorMessage name="email" class="error" />
      </label>
    </div>
    <label class="form__label">
      {{ t("form.sub") }}
      <Field
        name="subject"
        type="text"
        placeholder="What's this about"
        class="form__inp"
      />
      <ErrorMessage name="subject" class="error" />
    </label>
    <label class="form__label">
      {{ t("form.mess") }}
      <Field
        as="textarea"
        name="message"
        type="text"
        placeholder="Tell me about your project..."
        class="form__inp"
      />
      <ErrorMessage name="message" class="error" />
    </label>
    <button class="form__btn" :disabled="!meta.valid">
      <Icon name="uil:message" size="16" />
      <span>{{ t("form.btn") }}</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { useForm, Field, ErrorMessage } from "vee-validate";
import { sendForm } from "../../utils/validateForm";

//---------------------------------------//
const { t } = useI18n();

const { handleSubmit, resetForm, meta } = useForm({
  validationSchema: sendForm,
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch("/api/send-mail", {
      method: "POST",
      body: values,
    });

    resetForm();
  } catch (err) {
    console.error("error", err);
  }
});
</script>

<style lang="scss" scoped>
.form {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  gap: 25px;
  padding: 25px;
  border: 1px solid var(--line-color);
  border-radius: 15px;

  &__title {
    margin: 0;
    margin-bottom: 20px;

    font-size: 21px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
  &__label {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 7px;
    text-transform: capitalize;
    font-size: 18px;
    line-height: 1.3;
  }
  &__inp {
    width: 100%;
    padding: 15px 25px;
    border: none;
    border-radius: 10px;
    background-color: rgba(180, 178, 176, 0.3);
  }
}
.form__name-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}
.name-box__inp {
  width: 100%;
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  background-color: rgba(180, 178, 176, 0.3);
}
.form__btn {
  width: 100%;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px 0;
  border-radius: 10px;
  border: none;
  background-color: var(--btn-bg-color);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 2px 2px 7px var(--text-color);
  }
  &:disabled {
    background-color: rgb(170, 169, 169);
    box-shadow: 0 0 0;
  }
  span {
    text-transform: capitalize;
    font-size: 16px;
    line-height: 1.4;
    color: var(--btn-color);
  }
}
.error {
  position: absolute;
  top: 100%;
  left: 0;
  width: 105%;
  font-size: 12px;
  font-weight: 400;
  font-family: "inter", sans-serif;
  color: red;
}
@media (max-width: 768px) {
  .form {
    max-width: 100%;
    border: none;
  }
}
@media (max-width: 525px) {
  .form {
    gap: 20px;
    &__title {
      font-size: 18px;
      margin-bottom: 0px;
    }
    &__label {
      font-size: 14px;
    }
    &__btn {
      margin-top: 15px;
    }
  }
}
</style>
