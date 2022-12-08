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


const elements = document.getElementsByClassName("user-input");
console.log(elements);
for (const element of elements) {
    element.addEventListener('blur', (event) => {
        console.log(element.value);
        if ((element.type == "date") && (element.value < today)) {
            date.classList.add("is-invalid");
        } else if (element.value == "") {
            element.classList.add("is-invalid");
        } else {
            element.classList.add("is-valid");
        }
    })
}

