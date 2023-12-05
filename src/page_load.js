<<<<<<< HEAD
function prepareDate() {
=======
import { titles } from './config.js';

function makeDate() {
>>>>>>> 7b4b0240241a8ea82ffd636037c24a07ed5c83ab
    const date = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

<<<<<<< HEAD
    const formattedDate = `Today, ${months[monthIndex]} ${day}, ${year}`;
=======
    const formattedDate = `${months[monthIndex]} ${day} ${year}`;
>>>>>>> 7b4b0240241a8ea82ffd636037c24a07ed5c83ab

    return formattedDate;
}

<<<<<<< HEAD
function createAndAppendDate(dateData, container) {
    const dateDiv = document.createElement('div');
    dateDiv.classList.add("section", "date", "middle");
    dateDiv.textContent = dateData;
    container.appendChild(dateDiv);
}

function prepareTitleData(titles) {
    const processedTitles = [];

    for (const key in titles) {
        const item = titles[key];
        const titleData = {
            classes: ["section", key, item.position],
            imageSrc: item.image,
            imageAlt: item.alt,
            textContent: item.text,
            textClass: item['text-class']
        };
        processedTitles.push(titleData);
    }

    return processedTitles;
}

function createAndAppendTitles(titlesData, container) {
    titlesData.forEach(data => {
        const titleDiv = document.createElement('div');
        titleDiv.classList.add(...data.classes);

        const img = document.createElement('img');
        img.src = data.imageSrc;
        img.alt = data.imageAlt;

        const textDiv = document.createElement('div');
        if (data.textClass) {
            textDiv.classList.add(data.textClass);
        }
        textDiv.textContent = data.textContent;

        titleDiv.appendChild(img);
        titleDiv.appendChild(textDiv);

        container.appendChild(titleDiv);
    });
}

function prepareProjectsListData(projectsList) {
    return projectsList;
}

function prepareFieldAttributesData(fieldAttributes) {
    return fieldAttributes;
}

function createAndAppendProjectsListAndField(projectsListData, listAttributesData, fieldAttributesData, container) {
    const listDiv = document.createElement('div');
    listDiv.classList.add("section", "projects-list", "left");
    
    const list = document.createElement('ul');
    
    projectsListData.forEach((data, index) => {
        const projectsDiv = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = listAttributesData.image;
        img.alt = listAttributesData.alt;

        projectsDiv.appendChild(img);   

        const textNode = document.createTextNode(data);
        projectsDiv.appendChild(textNode);

        if (index === projectsListData.length - 1) {
            projectsDiv.id = "last-li";
        }

        list.appendChild(projectsDiv);
    })

    listDiv.appendChild(list);

    const projectFieldDiv = document.createElement('div');
        
    const label = document.createElement('label');
    label.htmlFor = Object.values(fieldAttributesData)[0];

    const input = document.createElement('input');
    input.type = Object.values(fieldAttributesData)[1];
    input.id = Object.values(fieldAttributesData)[2];
    input.placeholder = Object.values(fieldAttributesData)[3];

    projectFieldDiv.appendChild(label);
    projectFieldDiv.appendChild(input);

    listDiv.appendChild(projectFieldDiv);
    container.appendChild(listDiv);
}

function prepareButtonData(buttons) {
    const processedButtons = [];

    for (const key in buttons) {
        const item = buttons[key];
        const buttonData = {
            classes: ["section", key, item.position],
            textContent: item.text
        };
        processedButtons.push(buttonData);
    }

    return processedButtons;
}

function createAndAppendButtons(buttonsData, container) {
    buttonsData.forEach(data => {
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add(...data.classes);

        const button = document.createElement('button');
        button.textContent = data.textContent;
        buttonDiv.appendChild(button);

        container.appendChild(buttonDiv);
    });
}

function prepareTasksListData(projectTasks) {
    const processedTasksList = [];

    for (const index in projectTasks) {
        const item = projectTasks[index];
        const tasksListData = {
            "task-description": item["task-description"],
            "task-duedate": item["task-duedate"],
            "priority-level": item["priority-level"]
        };
        processedTasksList.push(tasksListData);
    }

    return processedTasksList;
}

function createAndAppendTasksList(tasksData, container) {
    const tasksListDiv = document.createElement('div');
    tasksListDiv.classList.add("section", "tasks-list", "middle");

    tasksData.forEach(data => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
    
        const taskDescriptionDiv = document.createElement('div');
        taskDescriptionDiv.classList.add(Object.keys(data)[0]);
        taskDescriptionDiv.textContent = Object.values(data)[0];


        const taskDueDateDiv = document.createElement('div');
        taskDueDateDiv.classList.add(Object.keys(data)[1]);
        taskDueDateDiv.textContent = Object.values(data)[1];

        const priorityLevelDiv = document.createElement('div');
        priorityLevelDiv.classList.add(Object.keys(data)[2], "hide");
        priorityLevelDiv.textContent = Object.values(data)[2];
        
        if (data["priority-level"] === "high") {
            taskDueDateDiv.classList.add("red");
        } else if (data["priority-level"] === "medium") {
            taskDueDateDiv.classList.add("yellow");
        } else {
            taskDueDateDiv.classList.add("green");
        }

        taskDiv.appendChild(taskDescriptionDiv);
        taskDiv.appendChild(taskDueDateDiv);
        taskDiv.appendChild(priorityLevelDiv);

        tasksListDiv.appendChild(taskDiv);
    });

    container.appendChild(tasksListDiv);
}

function prepareThreeTaskFieldsData(taskFields) {
    const processedThreeTaskFields = [];

    for (const key in taskFields) {
        const item = taskFields[key];
        const taskFieldsData = {
            class: key,
            labelFor: item.for,
            labelId: item["label-id"],
            labelTextContent: item["label-text"],
            inputType: item.type,
            textareaName: item["name"],
            inputId: item["input-id"],
            textareaId: item["textarea-id"]
        };
        processedThreeTaskFields.push(taskFieldsData);
    }

    return processedThreeTaskFields;
}

function prepareOneTaskFieldData(taskField) {
    const processedOneTaskField = [];

    for (const index in taskField) {
        const item = taskField[index];
        const taskFieldData = {
            "type": item.type,
            "name": item.name,
            "id": item.id,
            "value": item.value,
            "for": item.for,
            "class": item.class,
            "data-color": item["data-color"],
            "label-text": item["label-text"]
        };
        processedOneTaskField.push(taskFieldData);
    }

    return processedOneTaskField;
}

function createAndAppendTaskFields(threeTaskFieldsData, labelField, oneTaskFieldData, container) {
    const formDiv = document.createElement('div');
    formDiv.classList.add("section", "task-details", "right");

    const form = document.createElement('form');
    form.action = "";
    form.method = "post";

    threeTaskFieldsData.forEach(data => {
        const taskFieldDiv = document.createElement('div');
        taskFieldDiv.classList.add(data.class);

        const threeTaskFieldsLabel = document.createElement('label');
        threeTaskFieldsLabel.htmlFor = data.labelFor;
        threeTaskFieldsLabel.id = data.labelId;
        threeTaskFieldsLabel.textContent = data.labelTextContent;
        taskFieldDiv.appendChild(threeTaskFieldsLabel);

        if (data.inputType) {
            const input = document.createElement('input');
            input.type = data.inputType;
            input.id = data.inputId;
            taskFieldDiv.appendChild(input);
        }

        if (data.textareaName) {
            const textarea = document.createElement('textarea');
            textarea.name = data.textareaName;
            textarea.id = data.textareaId;
            taskFieldDiv.appendChild(textarea);
        }
        form.appendChild(taskFieldDiv);
    });

    const oneTaskFieldDiv = document.createElement('div');
    oneTaskFieldDiv.classList.add("priority-field");

    const oneTaskFieldLabel = document.createElement('label');
    oneTaskFieldLabel.htmlFor = labelField.for;
    oneTaskFieldLabel.id = labelField["label-id"];
    oneTaskFieldLabel.textContent = labelField["label-text"]; 
    oneTaskFieldDiv.appendChild(oneTaskFieldLabel);

    oneTaskFieldData.forEach(data => {
        const input = document.createElement('input');
        input.type = data.type;
        input.name = data.name;
        input.id = data.id;
        input.value = data.value;
        oneTaskFieldDiv.appendChild(input);

        const otherLabel = document.createElement('label');
        otherLabel.htmlFor = data.for;
        otherLabel.classList.add(data.class);
        otherLabel.dataset.color = data["data-color"];
        otherLabel.textContent = data["label-text"];
        oneTaskFieldDiv.appendChild(otherLabel);
    })

    form.appendChild(oneTaskFieldDiv);

    formDiv.appendChild(form);
    container.appendChild(formDiv);
}

export { prepareDate, createAndAppendDate, prepareTitleData, createAndAppendTitles, prepareProjectsListData, prepareFieldAttributesData, createAndAppendProjectsListAndField, prepareButtonData, createAndAppendButtons, prepareTasksListData, createAndAppendTasksList, prepareThreeTaskFieldsData, prepareOneTaskFieldData, createAndAppendTaskFields };



function createAndAppendTitles(titlesData, container) {
    titlesData.forEach(data => {
        const titleDiv = document.createElement('div');
        titleDiv.classList.add(...data.classes);

        const img = document.createElement('img');
        img.src = data.imageSrc;
        img.alt = data.imageAlt;

        const textDiv = document.createElement('div');
        if (data.textClass) {
            textDiv.classList.add(data.textClass);
        }
        textDiv.textContent = data.textContent;

        titleDiv.appendChild(img);
        titleDiv.appendChild(textDiv);

        container.appendChild(titleDiv);
    });
}

function createAndAppendProjectsListAndField(projectsListData, listAttributesData, fieldAttributesData, container) {
    const listDiv = document.createElement('div');
    listDiv.classList.add("section", "projects-list", "left");
    
    const list = document.createElement('ul');
    
    projectsListData.forEach((data, index) => {
        const projectsDiv = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = listAttributesData.image;
        img.alt = listAttributesData.alt;

        projectsDiv.appendChild(img);   

        const textNode = document.createTextNode(data);
        projectsDiv.appendChild(textNode);

        if (index === projectsListData.length - 1) {
            projectsDiv.id = "last-li";
        }

        list.appendChild(projectsDiv);
    })

    listDiv.appendChild(list);

    const projectFieldDiv = document.createElement('div');
        
    const label = document.createElement('label');
    label.htmlFor = Object.values(fieldAttributesData)[0];

    const input = document.createElement('input');
    input.type = Object.values(fieldAttributesData)[1];
    input.id = Object.values(fieldAttributesData)[2];
    input.placeholder = Object.values(fieldAttributesData)[3];

    projectFieldDiv.appendChild(label);
    projectFieldDiv.appendChild(input);

    listDiv.appendChild(projectFieldDiv);
    container.appendChild(listDiv);
}

function createAndAppendButtons(buttonsData, container) {
    buttonsData.forEach(data => {
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add(...data.classes);

        const button = document.createElement('button');
        button.textContent = data.textContent;
        buttonDiv.appendChild(button);

        container.appendChild(buttonDiv);
    });
}

function createAndAppendTasksList(tasksData, container) {
    const tasksListDiv = document.createElement('div');
    tasksListDiv.classList.add("section", "tasks-list", "middle");

    tasksData.forEach(data => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
    
        const taskDescriptionDiv = document.createElement('div');
        taskDescriptionDiv.classList.add(Object.keys(data)[0]);
        taskDescriptionDiv.textContent = Object.values(data)[0];


        const taskDueDateDiv = document.createElement('div');
        taskDueDateDiv.classList.add(Object.keys(data)[1]);
        taskDueDateDiv.textContent = Object.values(data)[1];

        const priorityLevelDiv = document.createElement('div');
        priorityLevelDiv.classList.add(Object.keys(data)[2], "hide");
        priorityLevelDiv.textContent = Object.values(data)[2];
        
        if (data["priority-level"] === "high") {
            taskDueDateDiv.classList.add("red");
        } else if (data["priority-level"] === "medium") {
            taskDueDateDiv.classList.add("yellow");
        } else {
            taskDueDateDiv.classList.add("green");
        }

        taskDiv.appendChild(taskDescriptionDiv);
        taskDiv.appendChild(taskDueDateDiv);
        taskDiv.appendChild(priorityLevelDiv);

        tasksListDiv.appendChild(taskDiv);
    });

    container.appendChild(tasksListDiv);
}

function createAndAppendTaskFields(threeTaskFieldsData, labelField, oneTaskFieldData, container) {
    const formDiv = document.createElement('div');
    formDiv.classList.add("section", "task-details", "right");

    const form = document.createElement('form');
    form.action = "";
    form.method = "post";

    threeTaskFieldsData.forEach(data => {
        const taskFieldDiv = document.createElement('div');
        taskFieldDiv.classList.add(data.class);

        const threeTaskFieldsLabel = document.createElement('label');
        threeTaskFieldsLabel.htmlFor = data.labelFor;
        threeTaskFieldsLabel.id = data.labelId;
        threeTaskFieldsLabel.textContent = data.labelTextContent;
        taskFieldDiv.appendChild(threeTaskFieldsLabel);

        if (data.inputType) {
            const input = document.createElement('input');
            input.type = data.inputType;
            input.id = data.inputId;
            taskFieldDiv.appendChild(input);
        }

        if (data.textareaName) {
            const textarea = document.createElement('textarea');
            textarea.name = data.textareaName;
            textarea.id = data.textareaId;
            taskFieldDiv.appendChild(textarea);
        }
        form.appendChild(taskFieldDiv);
    });

    const oneTaskFieldDiv = document.createElement('div');
    oneTaskFieldDiv.classList.add("priority-field");

    const oneTaskFieldLabel = document.createElement('label');
    oneTaskFieldLabel.htmlFor = labelField.for;
    oneTaskFieldLabel.id = labelField["label-id"];
    oneTaskFieldLabel.textContent = labelField["label-text"]; 
    oneTaskFieldDiv.appendChild(oneTaskFieldLabel);

    oneTaskFieldData.forEach(data => {
        const input = document.createElement('input');
        input.type = data.type;
        input.name = data.name;
        input.id = data.id;
        input.value = data.value;
        oneTaskFieldDiv.appendChild(input);

        const otherLabel = document.createElement('label');
        otherLabel.htmlFor = data.for;
        otherLabel.classList.add(data.class);
        otherLabel.dataset.color = data["data-color"];
        otherLabel.textContent = data["label-text"];
        oneTaskFieldDiv.appendChild(otherLabel);
    })

    form.appendChild(oneTaskFieldDiv);

    formDiv.appendChild(form);
    container.appendChild(formDiv);
}
=======
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
>>>>>>> 7b4b0240241a8ea82ffd636037c24a07ed5c83ab
