'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data?.name?.official}</h3>
    <h4 class="country__region">${data.region}</h4>
<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} people</p>
<p class="country__row"><span>🗣️</span>${Object.keys(data?.languages)?.[0]}</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)?.[0].name
    }</p>

  </div>
</article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data, '-------********---------');
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.svg}" />
//       <div class="country__data">
//         <h3 class="country__name">${data?.name?.official}</h3>
//         <h4 class="country__region">${data.region}</h4>
// <p class="country__row"><span>👫</span>${(
//   +data.population / 1000000
// ).toFixed(1)} people</p>
// <p class="country__row"><span>🗣️</span>${
//   Object.keys(data?.languages)?.[0]
// }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)?.[0].name
//         }</p>

//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('brazil');
// getCountryData('armenia');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => res.json())
//     .then(([data]) => {
//       const html = `
//       <article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data?.name?.official}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${
//             Object.keys(data?.languages)?.[0]
//           }</p>
//           <p class="country__row"><span>💰</span>${
//             Object.values(data.currencies)?.[0].name
//           }</p>

//         </div>
//       </article>
//       `;
//       countriesContainer.insertAdjacentHTML('beforeend', html);
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('armenia');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(([data]) => {
      renderCountry(data);

      console.log(data);
      // const neighbour = data[0].borders[0];
      const neighbour = data.borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/name/${data.borders[0]}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(([data]) => {
      console.log(data);
      return renderCountry(data);
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 . Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCountryData('france');
