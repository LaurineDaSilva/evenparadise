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

date.addEventListener('blur', (event) => {
    if (date.value < today) {
        date.classList.add("is-invalid");
    } else if (date.value >= today) {
        date.classList.add("is-valid");
    }
    console.log(date.value);
});

const name = document.getElementById("name");

name.addEventListener('blur', (event) => {
    if (name.value == "") {
        name.classList.add("is-invalid");
    } else {
        name.classList.add("is-valid");
    }
});

const place = document.getElementById("name");

place.addEventListener('blur', (event) => {
    console.log(place.value);
    if (place.value == "") {
        place.classList.add("is-invalid");
    } else {
        place.classList.add("is-valid");
    }
})