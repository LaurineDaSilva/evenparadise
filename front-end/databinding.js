async function send(url, method, data) {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (data != null) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const headers = response.headers;

  if (headers.get('Content-Type') == 'application/json') {
    return await response.json();
  }
  return null;
}

// Populate selects

export async function populatePlaces() {
  const placesSelect = document.getElementById('place');
  const placeDefault = document.getElementById('place-default');
  const elements = await send('http://localhost:8081/places', 'GET');

  placeDefault.innerHTML = 'Choisir un lieu dans la liste';

  elements.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.id;
    option.innerHTML = element.name;
    placesSelect.add(option);
  });
}

export async function populateThemes() {
  const themesSelect = document.getElementById('theme');
  const themeDefault = document.getElementById('theme-default');
  const elements = await send('http://localhost:8081/themes', 'GET');

  themeDefault.innerHTML = 'Choisir un thème dans la liste';

  elements.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.id;
    option.innerHTML = element.name;
    themesSelect.add(option);
  });
}
/*
// Post event

export async function createEvent() {
  const newEvent = await send('http://localhost:8081/', 'POST');
  const content = await newEvent.json();
  console.log(content);
}*/
