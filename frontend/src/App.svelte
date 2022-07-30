<script lang="ts">
  import TailwindCss from './TailwindCSS.svelte';
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes/routes';
	import { onMount } from 'svelte';
	import * as Races from './api/RacesApi';
	import type { results } from "./api/RacesApi";
  import Card from './lib/Card.svelte';
  import Navbar from './lib/Navbar.svelte';
	// let races = [] as results[];
  // onMount(async () => {
	// 	races = (await Races.get()).results;
	// })
</script>
<TailwindCss />
<Router {routes} />
<Navbar/>