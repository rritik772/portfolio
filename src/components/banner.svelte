<style lang='postcss'>
    div {
        width: 100%;
        text-align: center;
    }

    h1 {
        @apply inline uppercase;
        padding: 10px;
        font: 150px black;
    }

    ul {
        display: flex;
        justify-content: center;
    }

    ul > li:not(:last-child)::after {
        content: '◆';
        padding: 0 10px 0 10px;
    }

    @media (max-width: 600px) {
        p {
            font-size: calc(25vw + 0.5vw);
        }
    }
</style>

<div id='#Profile'>
    <h1>Ritik</h1>
    <h1>Ranjan</h1>

    <ul>
        <li><a href="https://www.linkedin.com/in/rritik772" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/rritik772" class="github" target="_blank">GitHub</a></li>
        <li><a href="tel:+916289079905" class="phone">Phone: +91(62890)79905</a></li>
        <li><a href="https://www.google.com/maps?q=Abdalpur Park, Badu road" class="location" target="_blank">Madhyamgram, Kolkata</a></li>
    </ul>
</div>
