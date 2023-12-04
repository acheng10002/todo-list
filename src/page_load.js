import { titles } from './config.js';

function makeDate() {
    const date = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${months[monthIndex]} ${day} ${year}`;

    return formattedDate;
}

function makeTitles(titles) {
    // iterate through the the titles
    for (const key in titles) {

        // assign each title to variable, item
        const item = titles[key];

        const mainDiv = document.createElement('div');

        // add "section", each title, and each title's position value as classes to the div
        mainDiv.classList.add("section", key, item.position);

        const img = document.createElement('img');

        // assign each title's image value to the img's src attribute 
        img.src = item.image;

        // assign each title's alt value to the img's alt attribute
        img.alt = item.alt;

        const textDiv = document.createElement('div');

        // if each title has 'text-class' as a key
        if (item['text-class']) {
            // add the value of 'text-class' as a class to the textDiv
            textDiv.classList.add(item['text-class']);
        }

        // make each title's text value the text content of textDiv
        textDiv.textContent = item.text;

        mainDiv.appendChild(img);
        mainDiv.appendChild(textDiv);

        return mainDiv;
    }
}

export { makeTitles };
