<script lang="ts">
    import { createHeading, createSectionMarkup } from "../lib/create_markup";
    import "./component.css";
</script>

{@html createHeading("Honor & Recognition")}
<div class="box">
    {@html createSectionMarkup(
        "Buddy Performer", 
        "Issued by Hughes Systique", 
        "May 2023", 
        [
            ` Ritik is our **Linux expert** with very **good understanding** of the **OS** and **shell scripting**. His style of 
            coding is quite neat and he foresees a lot of scenarios which migh occur in future development and takes care of them 
            in first go. He recently devloped a generic script executor module which is going to manage and run all services and 
            tasks running the onboard server *—Project Manager*
            `,
        ],
        "Gurugram"
    )}

    {@html createSectionMarkup(
        "Finalist of Circular City Asia 2022 ",
        "Issued by Circular City Asia", 
        "May 2022", 
        [
            `We were **1 of 2 finalists** in event through out the Asia were we had a problem how we can **reduce and reuse the food
            wastage** that is happening around the campus(start small).`,
            `After we had defined our scope we talked to people including Mess owner University food incharge, **Food decompose**
            units around our city, to come to a conclusion, that we should make a application which will be used to know how much
            food is need for the next meal. Event after this, if there are left over we will supply them decomposer unit.`,
            `Technology used - NextJS, ReactJS, Flutter, Firebase, Canva, Vercel, HTML, CSS, Tailwind, Figma.`
        ],
        "Bangkok, Thailand"
    )}
</div>
