<script lang="ts">
    import { createHeading, createSectionMarkup } from "../lib/create_markup";
    import "./component.css";
</script>

{@html createHeading("Education")}
<div class="box">
    {@html createSectionMarkup(
        "JK Lakshmipat University", 
        "Bachelor of Technology", 
        "Aug 2019-Aug 2023", 
        [
            "*CGPA 8.1*"
        ],
        "Jaipur, Rajasthan"
    )}

    {@html createSectionMarkup(
        "Sri Chaitanya Vidya Niketan", 
        "Science", 
        "May 17 - May 18", 
        [
            "*Boards 83%*"
        ],
        "Visakhapatnam, Andhra Pradesh"
    )}
</div>
