<script>
    export let githubLink;
    export let projectName;
    export let projectDescription;
    export let projectPng;
    // Note that projectPng is a slug for the name of the project. Example : Hulu Clone project -> hulu-clone
    const projectId = projectPng;
    const png = `projects-png/${projectPng}.png`;

</script>

<div class="project-display">
    <img class="project-img" src={png} alt={projectName}>
    <p class="project-title">{projectName}</p>
    <p class="project-description">{projectDescription}</p>
    <a href={githubLink}><i class="fab fa-github white"></i></a>
</div>


<style>
    .project-display {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 100%;
    }

    .project-title {
        line-height: 1;
    }

    .project-description {
        max-width: 100%;
        font-size: var(--fs-description, 1em);
        line-height: 1;
    }

    .project-img {
        border-radius: 20% 20%;
        width: 50%;
        height: auto;
    }

    .white {
        color: white;
    }
</style>
