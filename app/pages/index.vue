<template>
  <div>
    <GlobalLayout>
      <MainFirstComp id="home" />
      <MainAboutComp id="about" />
      <MainSkillsComp id="service" />
      <MainProjectComp id="work" />
      <MainGetInTouchComp id="contact" />
    </GlobalLayout>
  </div>
</template>

<script setup lang="ts">
import GlobalLayout from "../layouts/global.layout.vue";
import { useSeo } from "@/composables/useSeo";
//---------------------------------------//
definePageMeta({
  section: "home",
});
//---------------------------------------//
useSeo({
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Volodymyr Starovoit",
    jobTitle: "Full Stack Developer",
    url: "https://my.wpslab.app",
    sameAs: [
      { "@id": "https://github.com/StarV28" },
      { "@id": "https://www.linkedin.com/in/vladimirstarovoit" },
    ],
  } as any,
});
const { t, locale } = useI18n();

useSeoMeta({
  title: `Volodymyr Starovoit - ${t("first.h1")}`,
  description: t("seo.text-footer"),
});
</script>

<style lang="scss" scoped></style>
