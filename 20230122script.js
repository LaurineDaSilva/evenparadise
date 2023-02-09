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



// Setting up validation style and tooltips
const form = document.querySelector("form");
const elements = form.elements;

const options = {
    title: "Default message",
};


for (const element of elements) {
    const elementHelpText = document.getElementById(`${element.id}-helptext`);
    const validity = element.validity;
    
    let message = null;

    element.addEventListener('invalid', (event) => {

        event.preventDefault();

        element.classList.add("is-invalid"); 
        elementHelpText.classList.add("text-danger");

        const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);
        tooltip.enable();

        if (validity.valueMissing) {
            message = "Ce champ est obligatoire";
        } else if ((element.type == "date") && (validity.rangeUnderflow)) {
            message = "Doit être égale ou supérieure à aujourd'hui";
        } else if ((element.type == "number") && (validity.rangeUnderflow)) {
            message = "Doit être positif";
        } 

        tooltip.setContent({ '.tooltip-inner': message });

        const invalidElements = document.getElementsByClassName("is-invalid");
        const firstInvalidElement = invalidElements[0];
        firstInvalidElement.focus();        
     });

    element.addEventListener('change', (event) => {

        event.preventDefault();

        const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);
        
        function setInvalidStyle() {
            tooltip.enable();
            tooltip.show();
            tooltip.setContent({ '.tooltip-inner': message });
            element.classList.add("is-invalid"); 
            elementHelpText.classList.add("text-danger");
        }

        function setValidStyle() {
            tooltip.hide();
            tooltip.disable();
            element.classList.remove("is-invalid");
            element.classList.add("is-valid");
            elementHelpText.classList.remove("text-danger");
            elementHelpText.classList.add("text-success");
        }
          
        if (validity.valueMissing) {
            message = "Ce champ est obligatoire";
            setInvalidStyle();
        } else if ((element.type == "number") && (validity.rangeUnderflow)) {
            message = "Doit être positif";
            setInvalidStyle();
        } else if ((element.type == "date") && (validity.rangeUnderflow))  {
            message = "Doit être égale ou supérieure à aujourd'hui";
            setInvalidStyle();
        } else {
            setValidStyle();
        };
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    form.reset();

    for (const element of elements) {
        element.classList.remove("is-valid");
    };

    const elementHelpTexts = document.getElementsByClassName("form-text");
    for (const elementHelpText of elementHelpTexts) {
        elementHelpText.classList.remove("text-success");
    };

    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
});