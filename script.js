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
let tooltip;

for (const element of elements) {

    element.addEventListener('invalid', (event) => {
        event.preventDefault();

        element.classList.add("is-invalid");
        
        const invalidElements = document.getElementsByClassName("is-invalid");
        const firstInvalidElement = invalidElements[0];
        tooltip = new bootstrap.Tooltip(element);

        if ((element.type == "date") && (element.value < today))  {
            tooltip.setContent({ '.tooltip-inner': "Doit être égale ou supérieure à aujourd'hui" });
        } else if ((element.type == "number") && (element.value <= 0))  {
            tooltip.setContent({ '.tooltip-inner': 'Doit être positif' });
        };

        firstInvalidElement.focus();
     });

    element.addEventListener('change', (event) => {
        event.preventDefault();
        if (((element.type == "date") && (element.value < today)) || (element.value == "") || ((element.type == "number") && (element.value <= 0))) {
            element.classList.add("is-invalid");
            tooltip = new bootstrap.Tooltip(element);
            if ((element.type == "date" && (element.value < today))) {
                tooltip.setContent({ '.tooltip-inner': "Doit être égale ou supérieure à aujourd'hui" });
            } else if ((element.type == "number") && (element.value <= 0)) {
                tooltip.setContent({ '.tooltip-inner': 'Doit être positif' });
            };
        } else {
            element.classList.remove("is-invalid");
            element.classList.add("is-valid");
        }
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