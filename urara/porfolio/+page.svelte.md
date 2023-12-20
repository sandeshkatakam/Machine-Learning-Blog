---
title: Porfolio
toc: false
flags:
	- unlisted
---

<!-- ```html -->
<script>
	import MD from "$lib/md";
  const things = [
    {
      label: 'JAXGenesis: Generative Models in JAX',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Implementations of generative models in JAX framework',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX'],
        ['Source Code', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX']
      ]
    },
    {
      label: 'SpinningUp RL in JAX',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Implementation of RL Algos in JAX',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX'],
        ['Source Code', 'https://github.com/sandeshkatakam/SpinningUp-RL-JAX']
      ]
    },
  
  ]
</script>
<!-- ``` -->

## Recent

<ul>
{#each things as thing}
  <li>
    <MD.Thing {thing}/>
  </li>
{/each}
</ul>

<style>
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
