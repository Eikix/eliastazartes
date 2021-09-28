<script>
    export let githubLink;
    export let projectName;
    export let projectDescription;
    export let projectPng;
    export let projectURL;
    // Note that projectPng is a slug for the name of the project. Example : Hulu Clone project -> hulu-clone
    const projectId = projectPng;
    const png = `projects-png/${projectPng}.png`;

</script>

<div class="project-display">
    <div class="img-wrapper"><a href={projectURL} target="_blank"><img class="project-img" src={png} alt={projectName}></a></div>
    <a href={projectURL} target="_blank" rel=”noopener”><p class="project-title">{projectName}</p></a>
    <p class="project-description">{projectDescription}</p>
    <div class="links-cta">
        <a href={githubLink} target="_blank" rel=”noopener”><i class="fab fa-github white"></i></a> <a href={projectURL} target="_blank" rel=”noopener”><i class="fas fa-eye white"></i></a>
    </div>
</div>


<style>
    .project-display {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: max(15em, 80%);
        background: linear-gradient(0.25turn, rgb(31, 0, 98), rgb(68, 1, 98));
        border-radius: 20%;
        padding: 5%;
        box-shadow: 0.1em 0.1em 0.3em rgb(68, 1, 98);
    }

    .project-title {
        line-height: 1;
    }
    
    .project-title:hover{
        color: pink;
    }

    .project-description {
        max-width: 100%;
        white-space: normal;
        text-align: center;
        font-size: var(--fs-description, 1em);
        line-height: 1.5;
    }

    .project-img {
        border-radius: 20% 20%;
        max-width: 100%;
        height: auto;
    }
    
    .img-wrapper {
        width: 50%;
        text-align: center;
        transform: scale(1);
        transition: transform 200ms;
    }

    .img-wrapper:hover{
        transform: scale(1.4);
    }

    .white {
        color: white;
    }

    .white:hover {
        color: pink;
    }

    .links-cta {
        display: flex;
        min-width: 30%;
        justify-content: space-around;
        align-items: center;
    }

    @media (min-width: 70em) {
        .links-cta {
            font-size: 2em;
        }
    }
</style>
