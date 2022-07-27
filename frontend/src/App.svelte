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


<!-- 

<svelte:head>
  <title>Home</title>
</svelte:head> -->

<!-- <main>
  <a href="/about ">About my site</a>
	<div class="grid grid-cols-4 gap-4">
		{#each races as race (race.index)}
      <Card name={race.name} description={race.index}/>
    {:else}
      <p>loading...</p>
    {/each}
	</div>
</main> -->


<!-- <style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style> -->