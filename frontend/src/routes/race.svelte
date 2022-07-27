<script lang="ts">
  import { Route } from 'svelte-router-spa'
	import { onMount } from 'svelte';
	import * as Races from '../api/RacesApi';
	import type { results } from "../api/RacesApi";
  import Card from '../lib/Card.svelte';
  export let currentRoute
  const params = {}

	let races = [] as results[];
  onMount(async () => {
		races = (await Races.get()).results;
	})
</script>

<div class="app">
  <section class="section">
    <Route {currentRoute}  {params} />
  </section>
  
</div>

<main>
  <a href="/about" class="font-serif">Race</a>
	<div class="grid grid-cols-4 gap-4">
		{#each races as race (race.index)}
      <Card name={race.name} description={race.index}/>
    {:else}
      <p>loading...</p>
    {/each}
	</div>
</main>

<style>
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
</style>