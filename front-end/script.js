import {
  populatePlaces,
  populateThemes,
  createEvent,
} from '../front-end/databinding.js';

populatePlaces();
populateThemes();

// Setting up date

const date = document.getElementById('date');
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
const year = today.getFullYear();

if (day < 10) {
  day = '0' + day;
}

if (month < 10) {
  month = '0' + month;
}

today = year + '-' + month + '-' + day;

date.setAttribute('min', today);

// Setting up validation style and tooltips

const form = document.querySelector('form');
const elements = form.elements;
const submitButton = document.getElementById('submit-button');
const options = {
  title: 'Default message',
};
let hasFocusedError = false;

function changeTooltipMessage(validity, message, element, tooltip) {
  if (validity.valueMissing) {
    message = 'Ce champ est obligatoire';
  } else if (element.type == 'date' && validity.rangeUnderflow) {
    message = "Doit être égale ou supérieure à aujourd'hui";
  } else if (element.type == 'number' && validity.rangeUnderflow) {
    message = 'Doit être positif';
  }
  tooltip.setContent({ '.tooltip-inner': message });
}

function setInvalidStyle(tooltip, message, element, elementHelpText) {
  tooltip.enable();
  tooltip.setContent({ '.tooltip-inner': message });
  element.classList.add('is-invalid');
  elementHelpText.classList.add('text-danger');
}

function setValidStyle(tooltip, element, elementHelpText) {
  tooltip.hide();
  tooltip.disable();
  element.classList.remove('is-invalid');
  element.classList.add('is-valid');
  elementHelpText.classList.remove('text-danger');
  elementHelpText.classList.add('text-success');
}

function setFocusOnFirstError() {
  if (hasFocusedError == false) {
    const invalidElements = document.getElementsByClassName('is-invalid');
    const firstInvalidElement = invalidElements[0];

    firstInvalidElement.focus();
    hasFocusedError = true;
  }
}

for (const element of elements) {
  const elementHelpText = document.getElementById(`${element.id}-helptext`);
  const validity = element.validity;
  let message = null;

  element.addEventListener('invalid', (event) => {
    event.preventDefault();

    const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);

    setInvalidStyle(tooltip, message, element, elementHelpText);
    changeTooltipMessage(validity, message, element, tooltip);
    setFocusOnFirstError();
  });

  element.addEventListener('change', (event) => {
    event.preventDefault();

    const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);

    if (validity.valueMissing || validity.rangeUnderflow) {
      setInvalidStyle(tooltip, message, element, elementHelpText);
      changeTooltipMessage(validity, message, element, tooltip);
    } else {
      setValidStyle(tooltip, element, elementHelpText);
    }
  });
}

submitButton.addEventListener('click', (event) => {
  hasFocusedError = false;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  createEvent();

  const elementHelpTexts = document.getElementsByClassName('form-text');
  const toastLiveExample = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastLiveExample);

  form.reset();

  for (const element of elements) {
    element.classList.remove('is-valid');
  }

  for (const elementHelpText of elementHelpTexts) {
    elementHelpText.classList.remove('text-success');
  }

  toast.show();
});
