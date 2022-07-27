import sveltePreprocess from 'svelte-preprocess'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  kit: {
    browser: {
      hydrate: true,
      router: true,
    },
  },
  preprocess: sveltePreprocess(),
};
