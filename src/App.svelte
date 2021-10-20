<script>
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  import Skill from './lib/Skill.svelte';
  import ProjectCard from './lib/ProjectCard.svelte';
  const today = new Date();
  const currentYear = today.getFullYear();
  const myBday = currentYear - 1997;

  let projectsBox;
  let coordX = 0;

  function handleScroll(event) {
   coordX += event.deltaY;
   projectsBox.scroll({
    top: 100,
    left: coordX,
    behavior: 'smooth'
   });
  }

const keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function handlePreventWindowScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function handleWindowScrollable() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
</script>

<svelte:head>
  <title>Elias Tazartes</title>
</svelte:head>

<div class="container">
  <div class="header-wrapper"><Header/></div>
  <main class="z-ind">
    <section class="grid-landing">
      <h2 class="hi grid-hi">Hi, I'm <span class="elias">Elias</span>,</h2>
      <h2 class="hi grid-hi-2">I do freelance programming.</h2>
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
        <p class="title-centered">Some things I'm good at</p>
        <div class="skills-container">
          <Skill fileName={'javascript'} name={'Javascript'} modal={'Frontend development, NodeJS & Express APIs'}/>
          <Skill fileName={'react'} name={'ReactJS'} modal={'ReactJS and React Native development'}/>
          <Skill fileName={'node'} name={'NodeJS'} modal={'NodeJS & Express backend architecture'} />
          <Skill fileName={'mongodb'} name={'MongoDB'} modal={'Database architecture and maintenance'}/>
          <Skill fileName={'ethereum'} name={'Blockchain'} modal={'Ethereum DApp development in Solidity'}/>
          <Skill fileName={'svelte'} name={'Svelte'} modal={'Beautiful and blazing fast web apps'}/>
          <Skill fileName={'python'} name={'Python'} modal={'Data analysis and Machine Learning proficiency'}/>
          <Skill fileName={'socket-io'} name={'Socket.io'} modal={'Websocket reliant apps, such as online games'}/>
          <Skill fileName={'webgl'} name={'ThreeJS'} modal={'WebGL visuals, e.g. this 3D animated background'}/>
          <Skill fileName={'tailwindcss'} name={'TailwindCSS'} modal={'Utility-first CSS framework proficiency'} />
          <Skill fileName={'firebase'} name={'Firebase'} modal={'Implementing backend with Firebase Auth and Firestore'}/>
          <Skill fileName={'vercel'} name={'NextJS'} modal={'Server-side rendering apps with NextJS'}/>
        </div>
      </div>
    </section>
    
    
    <section id="projects" class="grid-projects">
      <div class="projects-wrapper" on:mouseenter={handlePreventWindowScroll} on:mouseleave={handleWindowScrollable}>
        <p class="title-centered">
          Projects I worked on
        </p>
        <div class="projects-container" on:mousewheel={handleScroll} bind:this={projectsBox}>
          <ProjectCard 
            githubLink="https://github.com/Eikix/chess-frontend"
            projectURL="https://eikichess-eikix.vercel.app/"
            projectName="Online Chess" 
            projectDescription="An online chess game"
            projectPng={"eiki-chess"}
          />
          <ProjectCard 
            githubLink="https://github.com/Eikix/hulu-clone"
            projectURL="https://hulu-clone-tutorial.vercel.app/"
            projectName="Hulu Clone" 
            projectDescription="A clone of streaming platform Hulu"
            projectPng={"hulu-clone"}
          />
          <ProjectCard 
            githubLink="https://github.com/Eikix/draft-simulator"
            projectURL="https://draftkingdom.vercel.app/"
            projectName="Draft Kingdom" 
            projectDescription="A League of Legends, Pro play drafting simulator"
            projectPng={"draft-kingdom"}
          />
          <ProjectCard
            githubLink="https://github.com/Eikix/rorschach-app"
            projectURL="https://rorschach-app.vercel.app/"
            projectName="Rorschach Test"
            projectDescription="A Rorscach Test App designed for therapists"
            projectPng={"rorschach"}
          />
          <ProjectCard
            githubLink="https://github.com/Eikix/mockup-to-website"
            projectURL="https://eikix.github.io/mockup-to-website/"
            projectName="Mockup to Website"
            projectDescription="Build a HTML/CSS-only page using only mockups"
            projectPng={"mockup"}
          />
        </div>
      </div>
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
    --fs-description: 0.8em;
    --fs-modal: 0.5em;

    --yellow-gradient: linear-gradient(0.1turn, rgb(59, 59, 59), rgb(126, 134, 68) );
    --dark-purple-gradient: linear-gradient(0.4turn, rgb(23, 3, 32), rgb(29, 17, 34) , rgb(33, 5, 47));
  }

  /* :global(canvas) {
      position: fixed;
      top: 0;
      left: 0;
  } */

  :global(body) {
      text-decoration: none;
      background: var(--dark-purple-gradient);
  }

  :global(html) {
      scroll-behavior: smooth;
  }

  :global(p) {
      font-size: var(--fs-p, 1.5em);
      line-height: 1.5em;
      max-width: 50ch;
      color: var(--color-primary, lightgrey);
  }

  :global(a) {
      color: inherit;
      text-decoration: inherit;
  }

  :global(a:hover) {
      color: pink;
  }



  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1/13;
  }

  section {
    margin: 0 auto;
    margin-bottom: min(6em, 20%);
  }
  
  .z-ind {
    z-index: 90;
  }

  .relative {
    position: relative;
  }

  .elias {
    color: rgb(226, 215, 115);
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
    text-shadow: 0.025em 0.025em 0.005em rgb(31, 0, 98);
  }


  .grid-hi {
    z-index: 99;
    margin: min(3em, 20%) 0;
    margin-bottom: 0;
    text-align: left;
    grid-row: 1 / 2;
    grid-column: 2 / 11;
  }

  .grid-hi-2 {
    z-index: 99;
    text-align: left;
    grid-row: 2 / 3;
    grid-column: 2 / 11;
  }

  .grid-intro {
    z-index: inherit;
    grid-row: 3 / 4;
    grid-column: 8 / 12;
  }

  .grid-second-intro {
    z-index: inherit;
    grid-row: 4 / 5;
    grid-column: 2 / 6;
  }

  .p-intro {
    text-shadow: 
      0.025em 0.025em 0.005em rgb(31, 0, 98),
  }

  .a-cta {
    		animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .grid-skills {
    grid-row: 5 / 6;
    grid-column: 2 / 12;
  }

  .title-centered {
    text-align: center;
  }

  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }
  
  .skills-wrapper {
    padding: 2em 4em;
  }

  .skills-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: var(--yellow-gradient);
    border-radius: 2em 2em;
    transform: scale(0);
    transition: transform 300ms ease-in-out;
    transform-origin: bottom right;
  }

  .skills-wrapper:hover::before {
    transform: scale(1);
  }

  .grid-projects {
    grid-row: 6 / 7;
    grid-column: 2 / 12;
    max-width: 100%;
  }

  .projects-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  }

  .projects-container {
    display: flex;
    z-index:99;
    justify-content: flex-start;
    gap: 10%;
    align-items: center;
    white-space: nowrap;
    overflow-x: scroll;
    max-width: 100%;
  }



  .footer-wrapper {
    color: var(--color-secondary);
    margin: 1em 0;
    margin-top: 3em;
    font-size: var(--fs-f);
    z-index: 99;
    grid-column: 1/13;
  }

  
  @media (min-width: 80em) {
      :global(:root) {
          --fs-big: 3em;
          --fs-p: 2.2em;
          --fs-f: 1em;
          --fs-description: 1.3em;
          --fs-modal: 1em;
      }

      .grid-skills {
        grid-row: 5 / 6;
        grid-column: 8 / 12;
      }

      .grid-projects {
        grid-row: 6 / 7;
        grid-column: 2 / 6;
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

  .projects-container {
    overflow: hidden;
  }
}

</style>