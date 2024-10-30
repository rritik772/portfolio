<script lang="ts">
    import { marked } from "marked";

    import { createHeading, createSectionMarkup } from "../lib/create_markup";
    import "./component.css";

    const skillsTable = `
| **Category**      | **Technologies**                                                                                     |
| -------------------|-----------------------------------------------------------------------------------------------------|
| **Programming**    | Node.js, JavaScript, Python, Rust, Java, PostgreSQL, MySQL, Bash, HTML/CSS                        |
| **Tools**          | Git, Docker, Linux, Jira, Google Cloud Run, Google Compute Engine, Google Cloud Storage            |
| **Frameworks**     | Express.js, React.js, Node.js, FastAPI, Firebase, Sequelize                                        |
`
</script>

{@html createHeading("Skills")}
<div class="box">
    {@html marked(skillsTable)}
</div>
