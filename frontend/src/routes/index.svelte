<script lang="ts">
  import { Route } from 'svelte-router-spa'
  import Card from '../lib/Card.svelte';
  export let currentRoute
  const params = {}
</script>

<div class="app">
  <section class="section">
    <Route {currentRoute}  {params} />
  </section>
</div>

<main>
	<div class="grid grid-cols-4 gap-4 text-couleur">
      <a href="/race" class="font-serif">
        <Card name="Race" description=""/>
      </a>
      <a href="/class" class="font-serif">
        <Card name="Class" description=""/>
      </a>
	</div>
</main>

<style>
  .text-couleur {
    color: aqua;
  }
</style>