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
  <a href="/race" class="font-serif">Race</a>
	<!-- <div class="grid grid-cols-4 gap-4"> -->
  <div class="md:grid md:grid-cols-4 md:gap-4 md:mt-px">
		{#each races as race (race.index)}
      <Card name={race.name} description={race.index}/>
    {:else}
      <p>loading...</p>
    {/each}
	</div>
</main>

<style>
</style>