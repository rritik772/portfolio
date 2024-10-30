import {marked} from 'marked';

export const createHeading = (heading: String) => {
    return `<h1 id="${heading}">${heading}</h1>`
}

export const createSectionMarkup = (main: String, association: String, time: String, values: string[], place = "") => {
    const list_item = values.map(item => `<li>${marked(item)}</li>`);
    return `
    <div class="mb-10">
        <h2>${main}</h2>
        <div class="flex justify-between">
            <h3>${association}</h3>
            <h3>${time} ${place}</h3>
        </div>
        <ul class="list-inside list-disc -indent-5 ml-5">
            ${list_item.join('\n')}
        </ul>
    </div> 
    `
}
