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
      label: 'Tranformers United',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Implementation of Transformer Architecture in JAX',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX'],
        ['Source Code', 'https://github.com/sandeshkatakam/Transformers-United']
      ]
    },
    {
      label: 'Generative Models in JAX',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Implementations of generative models in JAX framework',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX'],
        ['Source Code', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX']
      ]
    },
    {
      label: 'SpinningUp RL in Julia',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Implementation of RL Algos in Julia',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX'],
        ['Source Code', 'https://github.com/sandeshkatakam/SpinningUp-RL-Julia']
      ]
    },
        {
      label: 'NeuralODE for Brain Tumor Segmentation',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Implementation of NeuralODE Model for BraTS dataset',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX'],
        ['Source Code', 'https://github.com/sandeshkatakam/NeuralODEs-for-brain-tumor-segmentation']
      ]
    },
    {
      label: 'Numerics.jl',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Julia package for Scientific computing and Numerical Methods',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/Generative-Models-in-JAX'],
        ['Source Code', 'https://github.com/sandeshkatakam/Numerics.jl']
      ]
    },
    {
      label: 'Neural-JAX: Deep Learning Library',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Julia package for Scientific computing and Numerical Methods',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/Neural-JAX'],
        ['Source Code', 'https://github.com/sandeshkatakam/Neural-JAX']
      ]
    },
    {
      label: 'ML-AlgorithmsKit Library',
      icon: 'https://img.icons8.com/clouds/100/code.png',
      desc: 'Implementation of Standard ML Algorithms from scratch',
      links: [
        ['Blog Post', 'https://github.com/sandeshkatakam/ML-AlgorithmsKit'],
        ['Source Code', 'https://github.com/sandeshkatakam/ML-AlgorithmsKit']
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
