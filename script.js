// Setting up date

let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1;
const year = today.getFullYear();

if (day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

today = year + "-" + month + "-" + day;

const date = document.getElementById("date");

date.setAttribute("min", today);

const form = document.querySelector("form");
const elements = form.elements;

// Setting up validation style

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

for (const tooltip of tooltipList) {
    tooltip.disable();
}

for (const element of elements) {

    element.addEventListener('invalid', (event) => {
        event.preventDefault();

        element.classList.add("is-invalid");
        
        const invalidElements = document.getElementsByClassName("is-invalid");
        const firstInvalidElement = invalidElements[0];

        const tooltip = bootstrap.Tooltip.getInstance(`#${element.id}`);
        tooltip.enable();

        if ((element.type == "date") && (element.value < today))  {
            tooltip.setContent({ '.tooltip-inner': "Doit être égale ou supérieure à aujourd'hui" });
        } else if ((element.type == "number") && (element.value <= 0))  {
            tooltip.setContent({ '.tooltip-inner': 'Doit être positif' });
        };

        firstInvalidElement.focus();
     });

    element.addEventListener('change', (event) => {
        event.preventDefault();

        const tooltip = bootstrap.Tooltip.getInstance(`#${element.id}`);

        if ((element.value == "") || (element.value == null)) {
            element.classList.add("is-invalid");
            tooltip.enable();
        } else if ((element.value < today)) {
            tooltip.enable();
            tooltip.setContent({ '.tooltip-inner': "Doit être égale ou supérieure à aujourd'hui" });
        } else if ((element.type == "number") && (element.value <= 0)) {
            tooltip.enable();
            tooltip.setContent({ '.tooltip-inner': 'Doit être positif' });
        } else {
            tooltip.disable();
            element.classList.remove("is-invalid");
            element.classList.add("is-valid");
        };
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    for (const element of elements) {
        element.classList.remove("is-valid");
    };
    console.log("implement toaster");
});