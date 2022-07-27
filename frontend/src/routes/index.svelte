<script lang="ts">
  import { Route } from 'svelte-router-spa'
	import { onMount } from 'svelte';
	import * as Races from '../api/RacesApi';
	import type { results } from "../api/RacesApi";
  import Card from '../lib/Card.svelte';
  import Navbar from '../lib/Navbar.svelte';
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
	<div class="grid grid-cols-4 gap-4">
      <a href="/race" class="font-serif">
        <Card name="Race" description={''}/>
      </a>
	</div>
</main>

<style>
</style>