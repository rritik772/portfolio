<script lang="ts">
    let url = window.location.href;
    let link = $state(url.split('/').slice(-1)[0].slice(1));

    const changeLink = () => {
        url = window.location.href;
        link = url.split('/').slice(-1)[0].slice(1);
        if (link === '') link = 'profile';

        const nav_links = document.querySelectorAll("ul > li > a");
        nav_links.forEach(item => {
            const key = item.attributes.getNamedItem('href')?.value?.slice(1);
            if (key === link) item.classList.add('nav-active');
            if (key !== link) item.classList.remove('nav-active');
        });
    }


</script>

<style lang='postcss'>
    * {
        padding: 10px;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    a:hover {
        @apply ring-2 ring-gray-500;
    }

    :global(.nav-active) {
        @apply ring-2 ring-gray-300;
    }

</style>

<svelte:window on:hashchange={changeLink} on:load={changeLink}/>
<ul>
    <li><a href="#Profile">Profile</a></li>
    <li><a href="#Work Experience">Work Experience</a></li>
    <li><a href="#Projects">Projects</a></li>
    <li><a href="#Skills">Skills</a></li>
    <li><a href="#Honor & Recognition">Honors & Recognition</a></li>
    <li><a href="#Education">Education</a></li>
</ul>
