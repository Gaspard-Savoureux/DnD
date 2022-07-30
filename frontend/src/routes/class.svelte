<script lang="ts">
  import { Route } from 'svelte-router-spa'
	import { onMount } from 'svelte';
	import * as Classes from '../api/ClassesApi';
	import type { results } from "../api/ClassesApi";
  import Card from '../lib/Card.svelte';
  export let currentRoute
  const params = {}
	let classes = [] as results[];

  onMount(async () => {
		classes = (await Classes.get()).results;
	})
</script>

<div class="app">
  <section class="section">
    <Route {currentRoute}  {params} />
  </section>
  
</div>

<main>
  <a href="/race" class="font-serif">Classes</a>
	<!-- <div class="grid grid-cols-4 gap-4"> -->
  <div class="md:grid md:grid-cols-4 md:gap-4 md:mt-px">
		{#each classes as classe (classe.index)}
      <Card name={classe.name} description={classe.index}/>
    {:else}
      <p>loading...</p>
    {/each}
	</div>
</main>

<style>
</style>