<script lang="ts">
    import { createHeading, createSectionMarkup } from "../lib/create_markup";
    import "./component.css";
</script>

{@html createHeading("Projects")}
<div class="box">
    {@html createSectionMarkup(
        "Conf",
        "Personal Project",
        "Jan 2023 - Jun 2023",
        [
            `To streamline my development workflow, I developed a personal tool which can go through 
            various directories and open files automatically. I grew tired of the inefficiency arising 
            from frequently toggling between folders and files so that I devised an approach that would 
            enable me to **just specify a filename and have it open in my favorite editor**. Consequently, 
            as regards file management this project has considerably diminished the time and effort 
            spent on it and thus allowed me to concentrate more on elevated duties for enhanced 
            productivity in general.`,
            "Technology - Python, Click, SQLite"
        ],
    )}

    {@html createSectionMarkup(
        "Event Management Website",
        "Personal Project",
        "March 2023 - April 2023",
        [
            `I contributed for developing a **scalable** website which leveraged the **microservice** architecture, this website enable the
            admin of the event to **add event and based on location, price**, and other metric end-user can participate in the event.
            User identification was also available through google/email account which was both easy and hassle free for the user`,
            "Technology used - NextJS, SpringBoot, SpringSecurity, JWT, Postgres, Lombok, Docker"
        ],
    )}

    {@html createSectionMarkup(
        "Food Ordering System",
        "Personal Project",
        "Jan 2022 - April 2022",
        [
            `Developed a **comprehensive ordering system** using React, Firebase, and TailwindCSS, enabling hotel and restaurant
            owners/receptionists to efficiently **track and manage room orders**, including multiple food items, quantities, and prices,
            accessible via a user-friendly website and QR code scanning functionality`,
            "Technology used - NextJS, Firebase"
        ],
    )}

    {@html createSectionMarkup(
        "Who wants to Renovate",
        "Personal Project",
        "Jan 2022 - April 2022",
        [
            `I developed a machine learning model that predicts the likelihood of a customer for renovating their house. For this,
            I leveraged **XGBoost** algorithm to identify the **most important 25 questions out of 254 questions**, which was initial
            question questions . I then **trained** the model on those **important questions** and designed a very user friendly single
            page **application**, where user can directly give answer to those questions after providing details. The application provides
            administrators with a valuable tool to identify and prioritize **potential customer**, making sales process and driving
            business growth.`,
            "Technology used - Python, FastAPI, XGBoost, SKLearn"
        ],
    )}

    {@html createSectionMarkup(
        "Foot.it",
        "Personal Project",
        "Jan 2022 - April 2022",
        [
            `Developed a social community **recipe-sharing website** which allows individuals to share food recipes with one another.
            It has **markdown editor** that will help users in arranging the formatting of their own recipes. On top of that, it allows its
            users to **upload** great **photos** of their cooking, making it visually appealing and engaging. Moreover, the application is
            fitted with social features such as **liking and commenting** thereby facilitating interaction between users and improvement
            on each other’s recipes. I integrated an interface that is easy to use with a set of very simple interface so as to promote
            imaginative thinking and love for cooking`,
            "Technology used - ReactJS, MariaDB"
        ],
    )}
</div>
