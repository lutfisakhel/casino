// Helper functions
//
// Check page's meta at https://metatags.io/ (might need to encode url=... part)
// Twitter: https://cards-dev.twitter.com/validator
// LinkedIn: https://www.linkedin.com/post-inspector/inspect/
// Facebook needs login
//
// Example https://github.com/code-tribe/nuxt-netlify-cms-starter/blob/ac9addf0868717cb47f461d0b3d039e8adc2c778/pages/blog/_slug.vue
//
// TODO: Down the line, make this composables/custom-seo-meta.js using useHead() and useServerSeoMeta()

const allowedQueryKeys = ["d", "s", "l", "screenshot"];

// local path
const imgUrl = (img) => {
  const { url } = useSiteConfig();
  return img ? `${url}${img}` : undefined;
};

// Doc https://www.thum.io/documentation/api/url
const getThumIOURL = (crop = 627) => {
  const route = useRoute();

  return (
    `https://image.thum.io/get/noanimate/maxAge/24/width/1200/crop/${crop}/` +
    (getCanonicalUrl() + getQueryLine(true))
  );
};

// format date string to ISO string
const getDate = (dateStr) => (dateStr ? new Date(dateStr).toISOString() : null);

// build query string, adding screenshot if isScreenshot=true
const getQueryLine = (isScreenshot = false) => {
  const route = useRoute();

  var esc = encodeURIComponent;
  var params = Object.assign({}, route.query);

  if (isScreenshot) {
    params.screenshot = 1;
  }

  var query = Object.keys(params)
    .map((k) => {
      if (allowedQueryKeys.includes(k)) {
        return esc(k) + "=" + esc(params[k]);
      }
    })
    .join("&");

  return `?${query}`;
};

const getCanonicalUrl = () => {
  const { path } = useRoute();
  const { url } = useSiteConfig();

  // remove trailing slash from path
  const pathWithoutSlash = path.replace(/\/$/, "");

  return `${url}${pathWithoutSlash}`;
};

// const getAuthor = (doc = {}) => {
//   const [author] = doc.authors || [];

//   if (!author) return {};

//   const { first_name, last_name, location = "" } = author;
//   const isHttpLink = location ? location.startsWith("http") : false;

//   return {
//     "@type": "Person",
//     name: `${first_name} ${last_name}`,
//     sameAs: isHttpLink ? location : "",
//   };
// };

// const jsonLDArticle = (doc) => {
//   if (!doc.meta) doc.meta = {};
//   return {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     mainEntityOfPage: {
//       "@type": "WebPage",
//       "@id": getCanonicalUrl(),
//     },
//     headline: doc.title || doc?.meta?.title,
//     image: doc.ogImage || getThumIOURL(1200),
//     author: getAuthor(doc),
//     publisher: {
//       "@type": "Organization",
//       name: "StellarNurse",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://stellarnurse.com/img/sn-logo-flat.svg",
//       },
//     },
//     datePublished: getDate(doc.published_at),
//     dateModified: getDate(doc.updated_at),
//     // https://developers.google.com/search/docs/data-types/speakable
//     // speakable: {
//     //   "@type": "SpeakableSpecification",
//     //   xpath: [
//     //     "/html/head/title",
//     //     "/html/head/meta[@name='description']/@content",
//     //   ],
//     // },
//     url: getCanonicalUrl(),
//   };
// };

const metaFromNuxtContent = (doc) => {
  // convert CMS data (as defined in cms-admin/config.yml x-meta) to head meta collection
  const payload = {
    title: doc.title || doc?.meta?.title,
    link: [
      {
        rel: "canonical",
        href: getCanonicalUrl(),
      },
    ],
    meta: [
      // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
      { property: "og:site_name", content: "theturkbet.com" },
      { hid: "og:type", property: "og:type", content: "website" },
      { property: "twitter:site", content: "@theturkbet" }, // For the website's Twitter handle

      {
        hid: "title",
        name: "title",
        content: doc.title || doc?.meta?.title,
      },
      {
        hid: "description",
        name: "description",
        content: doc.description || doc?.meta?.description,
      },
      {
        hid: "article:published_time",
        property: "article:published_time",
        content: getDate(doc?.meta?.published_at),
      },
      {
        hid: "article:modified_time",
        property: "article:modified_time",
        content: getDate(doc?.meta?.updated_at),
      },
      {
        hid: "og:updated_time",
        property: "og:updated_time",
        content: getDate(doc?.meta?.updated_at),
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:title",
        property: "og:title",
        content: doc?.meta?.og_title || doc?.meta?.title || doc.title,
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          doc?.meta?.og_description ||
          doc?.meta?.description ||
          doc.description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: imgUrl(doc?.meta?.ogImage) || getThumIOURL(),
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: doc?.meta?.og_title || doc?.meta?.title || doc.title,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: getCanonicalUrl(),
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: doc?.meta?.twitter_title || doc?.meta?.title || doc.title,
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          doc?.meta?.twitter_description ||
          doc?.meta?.description ||
          doc.description,
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content:
          imgUrl(doc?.meta?.twitter_image || doc?.meta?.ogImage) ||
          getThumIOURL(),
      },
      {
        hid: "twitter:image:alt",
        property: "twitter:image:alt",
        content: doc?.meta?.og_title || doc?.meta?.title || doc.title,
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: getCanonicalUrl(),
      },
    ],
  };

  // if `content` of any of the meta is empty, remove it
  payload.meta = payload.meta.filter((m) => m.content);

  return payload;
};

export { metaFromNuxtContent };
