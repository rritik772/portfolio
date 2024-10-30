<script lang="ts">
    import { createHeading, createSectionMarkup } from "../lib/create_markup";
    import "./component.css";
</script>

{@html createHeading("Work Experience")}
<div class="box">
    {@html createSectionMarkup(
        "Hughes Systique",
        "Associate Software Engineer",
        "July 23 - Present",
        [
            "Developed a stable system for **running code(module) remotely** that includes module updater which **automatically update modules**",
            "Managed the creation and development of a **reliable package manager** that uses MQTT to give real time information on **software status**, and package manager also includes **rollback** for software.",
            "Designed an advanced resource monitoring tool which monitors the **CPU and RAM usage** of docker containers and systemd services, automatically **restarting** them when they **hit limits** or are unhealthy.",
            "Built a **flexible log and metrics collector** using bash scrip, which was later used for better development analysis and troubleshooting.",
        ],
    )}

    {@html createSectionMarkup(
        "Hughes Systique",
        "Intern",
        "Jan 2023 - Jun 2023",
        [
            "Add content to section",
        ],
    )}
</div>
