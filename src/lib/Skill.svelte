<script>
    import { fade } from 'svelte/transition'
    export let fileName;
    export let name;
    export let modal;
    let clicked = false;
    let visible = false;
    let source = `skills-svg/${fileName}-svg.svg`;

    function handleHover() {
        visible=true;
    }

    function handleMouseLeave() {
        visible=false;
        clicked=false;
    }
</script>

<div on:mouseenter={handleHover} on:mouseleave={handleMouseLeave} class="skill-display">
    <img src={source} alt={fileName+'logo'} class="logo">
    <p class="skill-name">{name}</p>
    {#if visible}
        <p transition:fade on:click="{() => clicked = true}" class="{clicked ? 'skill-modal clicked' : 'skill-modal'}">{modal}</p>
    {/if}
</div>


<style>

    .logo {
            width: 30px;
            height: auto;
            padding: 0.4em;
            border-radius: 20px 20px;
            background-color: #fff;
    }

    @media (min-width: 55em) {
        .logo {
            width: 80px;
        }
    }

    

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: .8;
            transform: scale(1.02);
        }
        25% {
            opacity: 0.9;
            transform: scale(1.01);
        }
    }
    

    .skill-display {
        display: flex;
        position: relative;
        flex-direction: column;
        gap: 0.1em;
        align-items: center;
        cursor: pointer;
    }

    /* .skill-display:hover,
    .skill-display:focus {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 1;
    } */

    .skill-modal {
        position: absolute;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        top: -20%;
        min-width: 100%;
        height: auto;
        min-height: 90%;
        z-index: 99;
        padding: 0.9em;
        border-radius: min(3em, 20%);
        background: linear-gradient(0.25turn, rgb(31, 0, 98), rgb(68, 1, 98));
        font-size: var(--fs-modal, 1em);
        transform: scale(1);
        transition: transform 200ms;
    }

    .clicked {
        transform: scale(2);
    }




    .skill-name {
        font-size: 1em;
    }

</style>

