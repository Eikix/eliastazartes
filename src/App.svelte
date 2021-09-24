<script>
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  import Skill from './lib/Skill.svelte';
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
    <section class="grid-landing">
      <h2 class="hi grid-hi">Hi, I'm Elias, I build things.</h2>
      <div class="grid-intro">
        <p class="p-intro">
          I'm a {myBday} year-old freelancer based in Paris. I mainly do fullstack web development. <a href="#skills" class="a-cta"><i class="fas fa-hammer"></i></a>
        </p>
      </div>
      <div class="grid-second-intro">
        <p class="p-intro">
          I mainly use Javascript (React or Svelte), NodeJS (Express) and MongoDB. <a href="#skills" class="a-cta"><i class="fas fa-glasses"></i></a>
        </p>
      </div>
    </section>

    <section id="skills" class="grid-skills relative">
      <div class="skills-wrapper">
        <p class="title-centered">Some stuff I'm good at</p>
        <div class="skills-container">
          <Skill fileName={'javascript'} name={'Javascript'} modal={'Frontend development, NodeJS & Express APIs'}/>
          <Skill fileName={'react'} name={'ReactJS'} modal={'React and Next web apps'}/>
          <Skill fileName={'mongodb'} name={'MongoDB'} modal={'Database architecture and maintenance'}/>
          <Skill fileName={'ethereum'} name={'Blockchain'} modal={'DApp development in Solidity'}/>
          <Skill fileName={'svelte'} name={'Svelte'} modal={'Beautiful and blazing fast web apps'}/>
          <Skill fileName={'python'} name={'Python'} modal={'Data analysis and Machine Learning proficiency'}/>
          <Skill fileName={'socket-io'} name={'Socket.io'} modal={'Websocket reliant apps, such as online games'}/>
          <Skill fileName={'webgl'} name={'ThreeJS'} modal={'WebGL visuals, e.g. this 3D animated background.'}/>
        </div>
      </div>
    </section>
    
    
    <section id="projects" class="grid-projects">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum, praesentium perferendis perspiciatis ipsa laboriosam quibusdam in iste debitis nihil nostrum enim qui, eaque, eius ratione dolores. Ea, rem tempora.
      </p>
    </section>
  </main>
  
  <div class="footer-wrapper"><Footer /></div>
</div>



<style>
  :global(:root) {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --color-primary: hsl(0, 0%, 95%);
    --color-secondary: hsl(0, 0%, 88%);
    --fs-big: 1.3em;
    --fs-p: 1em;
    --fs-f: 0.5em;
    --fs-modal: 0.5em;
}

  @media (min-width: 55em) {
      :global(:root) {
          --fs-big: 3em;
          --fs-p: 2.2em;
          --fs-f: 1em;
          --fs-modal: 1em;
      }
  }

  :global(canvas) {
      position: fixed;
      top: 0;
      left: 0;
  }

  :global(body) {
      text-decoration: none;
  }

  :global(html) {
      scroll-behavior: smooth;
  }

  :global(p) {
      font-size: var(--fs-p, 1.5em);
      line-height: 1.5em;
      max-width: 50ch;
      color: var(--color-primary, lightgrey);
      font-family: monospace;
  }

  :global(a) {
      color: inherit;
      text-decoration: inherit;
  }

  :global(a:hover) {
      color: rgb(202, 99, 188);
  }



  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1/13;
  }

  section {
    margin-bottom: min(6em, 20%);
  }
  
  .z-ind {
    z-index: 90;
  }

  .relative {
    position: relative;
  }

  .grid-landing {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1/13;
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


  .grid-hi {
    z-index: 99;
    margin: min(3em, 20%) 0;
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
    grid-column: 2 / 6;
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
    grid-column: 2 / 12;
  }

  @media (min-width:55em) {
    .grid-skills {
        grid-row: 4 / 5;
        grid-column: 8 / 12;
      }
  }
  


  .title-centered {
    text-align: center;
  }

  .skills-container {
    display: flex;
    gap: 1em;
    padding: 2em;
    z-index: 99;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .skills-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(0.25turn, rgb(31, 0, 98), rgb(68, 1, 98));
    border-radius: 2em 2em;
    transform: scale(0);
    transition: transform 300ms ease-in-out;
    transform-origin: bottom right;
  }

  .skills-wrapper:hover::before {
    transform: scale(1);
  }

  .grid-projects {
    grid-row: 5/ 6;
    grid-column: 2 / 6;
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