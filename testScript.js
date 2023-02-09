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



// Setting up validation style
const form = document.querySelector("form");
const elements = form.elements;

const options = {
    title: "Default message",
};

for (const element of elements) {
    const validity = element.validity;
    let message = null;
    const type = element.type;

    element.addEventListener('invalid', (event) => {
        event.preventDefault();

        const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);

        if (validity.valueMissing) {
            message = "valueMissing";
        } else if ((element.type == "date") && (validity.rangeUnderflow)) {
            message = "date";
        } else if ((element.type == "number") && (validity.rangeUnderflow)) {
            message = "positif";
        } 
     
    
        tooltip.setContent({ '.tooltip-inner': message });

        elements[0].focus();
        
     });


    element.addEventListener('change', (event) => {
        event.preventDefault();
        if (element.value) {

        } else {
            tooltip.disable();


        }
    });
    };


form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    for (const element of elements) {
        element.classList.remove("is-valid");
    };
    console.log("implement toaster");
});