import index from './index.svelte';
import about from './about.svelte';
import race from './race.svelte';
import Navbar from '../lib/Navbar.svelte';

export const routes = [
  {
    name: '/',
    component: Navbar,
    layout: index,
  },
  { name: 'about', layout: about },
  { name: 'race', layout: race },

]
