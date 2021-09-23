<script></script>

<svelte:head>
  <title>Hello man</title>
</svelte:head>


<main>
  <h1 class="hi overlap">Hello World</h1>
  <div class="overlap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut accusantium sunt voluptas, necessitatibus, consequuntur amet dolores et eligendi beatae suscipit error cupiditate aliquam officiis commodi molestias mollitia inventore aperiam.</div>
  <div class="overlap left">Incidunt eaque debitis eligendi repudiandae atque! Explicabo incidunt, laborum repellat obcaecati a officiis mollitia nemo modi voluptatibus facilis ullam, illo rem reprehenderit laudantium quisquam voluptate tenetur eius natus voluptas unde.</div>
  <div class="overlap">Deleniti obcaecati nostrum eum, quaerat ad quae, perferendis corrupti aut, saepe consequuntur impedit veritatis non similique officiis dolorem amet. Quia non nam perferendis totam nemo magni commodi possimus vero? Animi?</div>
  <div class="overlap left">Aliquid, distinctio natus. Quasi voluptatibus, esse ea, ut consequatur ullam earum dolores nobis cum porro nostrum saepe, architecto aliquam facilis dolorum quis illum velit. Nostrum et vel eveniet laboriosam fuga?</div>
  <div class="overlap">Odit velit, distinctio libero, dolorum animi soluta quidem numquam exercitationem in dicta officia voluptas dolor eos unde. Impedit, odio! Hic, iusto ab enim praesentium quisquam nam ducimus quod sed velit.</div>
</main>


<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --color-primary: hsl(0, 0%, 90%);
    --color-secondary: hsl(0, 0%, 80%);
    
  }
  
  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .hi {
    color: var(--color-primary);
    font-size: 4em;
  }

  .overlap {
    width: 100vw;
    color: white;
    z-index: 99;
    width: 100%;
    margin: 0px auto;
    padding: 2em 0px;
    grid-column: 2 / 8;
  }

  .left {
    grid-column: 6 / 12;
  }

 
</style>