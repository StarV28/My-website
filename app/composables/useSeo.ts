// composables/useSeo.ts
import { useHead } from "#app";
import { useI18n } from "vue-i18n";

//---------------------------------------//

type JsonLdObject = {
  [key: string]: string | number | boolean | JsonLdObject | JsonLdObject[];
};
//---------------------------------------//
const baseUrl = "https://my.wpslab.app";
//---------------------------------------//

// export function useSeo(
//   options: {
//     title?: string;
//     description?: string;
//     ogTitle?: string;
//     ogDescription?: string;
//     url?: string;
//     image?: string;
//     jsonLd?: JsonLdObject;
//   } = {},
// ) {
//   const { t, locale } = useI18n();
//   const route = useRoute();

//   const title = options.title || `Volodymyr Starovoit - ${t("first.h1")}`;
//   const description = options.description || t("seo.text-footer");
//   const ogTitle = options.ogTitle || title;
//   const ogDescription = options.ogDescription || t("seo.ogDescription");
//   const image = `${baseUrl}/og-image-my-foto.webp`;

//   const currentLocale = locale.value;
//   const path = currentLocale === "en" ? "" : `/${currentLocale}`;
//   const canonical = `${baseUrl}${path}`;

//   const fullPath =
//     currentLocale === "en"
//       ? route.path
//       : `/${currentLocale}/${route.path === "/" ? "" : route.path}`;
//   const url = options.url || `${baseUrl}${fullPath}`;

//   useHead({
//     htmlAttrs: {
//       lang: currentLocale,
//     },
//     title,
//     meta: [
//       { name: "description", content: description },
//       { property: "og:title", content: ogTitle },
//       { property: "og:url", content: url },
//       { property: "og:description", content: ogDescription },
//       { property: "og:type", content: "website" },
//       { property: "og:image", content: image },
//       { name: "twitter:card", content: "summary_large_image" },
//       { name: "twitter:title", content: ogTitle },
//       { name: "twitter:description", content: ogDescription },
//       { name: "twitter:image", content: image },
//     ],
//     link: [
//       { rel: "canonical", href: `${canonical}` },
//       { rel: "alternate", hreflang: "en", href: `${baseUrl}/` },
//       { rel: "alternate", hreflang: "de", href: `${baseUrl}/de` },
//       { rel: "alternate", hreflang: "uk", href: `${baseUrl}/ua` },
//       { rel: "alternate", hreflang: "ru", href: `${baseUrl}/ru` },

//       { rel: "alternate", hreflang: "x-default", href: baseUrl },
//     ],
//     script: [
//       {
//         type: "application/ld+json",
//         innerHTML: JSON.stringify(
//           options.jsonLd ||
//             ({
//               "@context": "https://schema.org",
//               "@type": "WebSite",
//               name: "My",
//               url,
//               description,
//             } as JsonLdObject),
//         ),
//       },
//     ],
//   });
// }

//---------------------------------------//
export function useSeo(
  options: {
    title?: string;
    description?: string;
    jsonLd?: JsonLdObject;
  } = {},
) {
  const { t, locale } = useI18n();
  const route = useRoute();

  const currentLocale = locale.value;

  const path = route.path === "/" ? "" : route.path;
  const localePrefix = currentLocale === "en" ? "" : `/${currentLocale}`;
  const fullPath = `${localePrefix}${path}`;

  const url = `${baseUrl}${fullPath}`;

  const title = options.title || `Volodymyr Starovoit - ${t("first.h1")}`;
  const description = options.description || t("seo.text-footer");

  useHead({
    title,
    htmlAttrs: {
      lang: currentLocale,
    },
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: `${baseUrl}/og-image-my-foto.webp` },
    ],
    link: [
      { rel: "canonical", href: url },
      { rel: "alternate", hreflang: "en", href: `${baseUrl}/` },
      { rel: "alternate", hreflang: "de", href: `${baseUrl}/de` },
      { rel: "alternate", hreflang: "ru", href: `${baseUrl}/ru` },
      { rel: "alternate", hreflang: "uk", href: `${baseUrl}/ua` },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(
          options.jsonLd ||
            ({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "My",
              url,
              description,
            } as JsonLdObject),
        ),
      },
    ],
  });
}
