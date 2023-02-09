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

const date = document.getElementById('date');

date.setAttribute('min', today);

// initialize tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);

const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
);

const form = document.querySelector('form');
const elements = form.elements;

for (const element of elements) {
  element.addEventListener('invalid', (event) => {
    event.preventDefault();

    const tooltip = bootstrap.Tooltip.getInstance(
      `#${element.attributes.id.value}`,
    );

    tooltip.enable();
    tooltip.setContent({ '.tooltip-inner': 'Champ requis' });
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');

    document.getElementsByClassName('is-invalid')[0].focus();
  });

  element.addEventListener('change', (event) => {
    event.preventDefault();

    const tooltip = bootstrap.Tooltip.getInstance(
      `#${element.attributes.id.value}`,
    );

    if ([null, ''].includes(element.value)) {
      tooltip.enable();
      tooltip.setContent({ '.tooltip-inner': 'Champ requis' });
      element.classList.add('is-invalid');
      element.classList.remove('is-valid');
    } else if (element.type == 'date' && element.value < today) {
      tooltip.enable();
      tooltip.setContent({ '.tooltip-inner': 'Date erroné' });
      element.classList.add('is-invalid');
      element.classList.remove('is-valid');
    } else if (element.type == 'number' && element.value <= 0) {
      tooltip.enable();
      tooltip.setContent({ '.tooltip-inner': 'Valeur négative' });
      element.classList.add('is-invalid');
      element.classList.remove('is-valid');
    } else {
      tooltip.disable();
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  for (const element of elements) {
    element.classList.remove('is-valid');
  }
  console.log('implement toaster');
});
