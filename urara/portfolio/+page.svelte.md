---
title: Portfolio
toc: false
flags:
	- unlisted
---

<!-- ```html -->
<script>
	import MD from "$lib/md";
  const things = [
{
      label: 'Generative-Models',
      icon: 'https://do-together.vercel.app/favicon.svg',
      desc: 'Generative Models in JAX',
      links: [
        ['Live Version', 'https://do-together.vercel.app/', 'i-material-symbols-open-in-browser'],
        ['Source Code', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX', 'i-mdi-github']
      ]
    },
    {
      label: 'Reinforcement-learning',
      icon: 'https://kcal-calc.vercel.app/favicon.svg',
      desc: 'Spinning Up RL in Julia',
      links: [
        ['Live Version', 'https://kcal-calc.vercel.app/', 'i-material-symbols-open-in-browser'],
        ['Source Code', 'https://github.com/sandeshkatakam/SpinningUp-RL-Julia', 'i-mdi-github']
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
