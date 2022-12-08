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

for (const element of elements) {
    element.addEventListener('blur', (event) => {
        if (((element.type == "date") && (element.value < today)) || ((element.id == "theme" || element.id == "place") && (element.value == "0")) || (element.value == "")) {
            element.classList.add("is-invalid");
        } else {
            element.classList.add("is-valid");
        }
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("implement form reset");
    console.log("implement toaster");
});