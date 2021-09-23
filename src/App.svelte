<script>
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  const today = new Date();
  const currentYear = today.getFullYear();
  const myBday = currentYear - 1997;
</script>

<svelte:head>
  <title>Elias Tazartes</title>
</svelte:head>

<div class="container">
  <div class="header-wrapper"><Header/></div>
  <main class="z-ind">
    <h2 class="hi grid-hi">Hi, I'm Elias, I build things.</h2>
    <div class="grid-intro">
      <p class="p-intro">
        I'm a {myBday} year-old freelancer based in Paris. I mainly do fullstack web development. <a href="#skills" class="a-cta"><i class="fas fa-hammer"></i></a>
      </p>
    </div>
    <div class="grid-second-intro">
      <p class="p-intro">
        I mainly use React or Svelte, NodeJS, Express and MongoDB. <a href="#skills" class="a-cta"><i class="fas fa-glasses"></i></a>
      </p>
    </div>

    <section id="skills" class="grid-skills"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vero repellat reprehenderit est, assumenda natus atque dolor alias unde consectetur eligendi neque rerum officiis magnam sed error id iusto repudiandae.</p></section>
    <section id="projects" class="grid-projects"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum, praesentium perferendis perspiciatis ipsa laboriosam quibusdam in iste debitis nihil nostrum enim qui, eaque, eius ratione dolores. Ea, rem tempora.</p></section>
  </main>
  
  <div class="footer-wrapper"><Footer /></div>
</div>



<style>
  :root {
    font-family:  Roboto,-apple-system, BlinkMacSystemFont, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --color-primary: hsl(0, 0%, 95%);
    --color-secondary: hsl(0, 0%, 88%);
    --fs-big: 1.3em;
    --fs-p: 1.0em;
    --fs-f: 0.5em;
    
  }

  @media (min-width: 55em) {
    :root {
      --fs-big: 3em;
      --fs-p: 2.2em;
      --fs-f:1em;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1/13;
  }

  p {
    font-size: var(--fs-p, 1.5em);
    line-height: 1.5em;
    max-width: 50ch;
    color: var(--color-primary, lightgrey);
    font-family: monospace;
  }

  a {
        color: inherit;
        text-decoration: inherit;
  }

  a:hover {
        color: rgb(202, 99, 188);
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
      color: rgb(31, 0, 98);
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-image: linear-gradient(45deg, rgb(45, 0, 53), rgb(19, 8, 34));
  }

  .header-wrapper {
    color: var(--color-secondary);
    z-index: 99;
    grid-column: 1/13;
  }

  .hi {
    color: var(--color-primary);
    font-size: var(--fs-big, 3em);
    letter-spacing: 3px;
    text-shadow: 
      0.025em 0.025em 0.005em rgb(31, 0, 98),
      0.05em  0.05em 0.005em rgb(42, 4, 59);

  }

  .z-ind {
    z-index: 99;
  }

  .grid-hi {
    z-index: 99;
    margin: 3em 3em;
    text-align: center;
    grid-row: 1 / 2;
    grid-column: 2 / 11;
  }

  .grid-intro {
    z-index: inherit;
    grid-row: 2 / 3;
    grid-column: 8 / 12;
  }

  .grid-second-intro {
    z-index: inherit;
    grid-row: 3 / 4;
    grid-column: 2 / 7;
  }

  .p-intro {
    text-shadow: 
      0.025em 0.025em 0.005em rgb(31, 0, 98),
      0.05em  0.05em 0.005em rgb(68, 1, 98);
  }

  .a-cta {
    		animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .grid-skills {
    grid-row: 4 / 5;
    grid-column: 2 / 6;
  }

  .grid-projects {
    grid-row: 5/ 6;
    grid-column: 7 / 12;
  }

  .footer-wrapper {
    color: var(--color-secondary);
    margin: 1em 0;
    margin-top: 3em;
    font-size: var(--fs-f);
    z-index: 99;
    grid-column: 1/13;
  }

 
</style>