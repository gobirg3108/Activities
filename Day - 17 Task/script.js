const loadCountryAPI = () => {
  fetch("https://restcountries.com/v3.1/all") 
  .then(res => res.json())
  .then(data => displayCountries(data))
}
const displayCountries = countries => {
      // console.log(countries);
      const countriesHTML = countries.map(country => getCountry(country))
      const container = document.getElementById("countries")
      container.innerHTML = countriesHTML.join(' ');
}

const getCountry = (country) =>{
  console.log(country);
  return`
  <div class="country-div bg-info">
  <h6 class="text-center bg-black text-white py-2">${country.name.common}</h6>
  <img src="${country.flags.png}" class="py-3">
  <h5 class="text-center">Capital:${country.capital}</h5>
  <h5 class="text-center">Region:${country.region}</h5>
  <h5 class="text-center">Country Code:${country.ccn3}</h5>
  <button type ="button"class="btn btn-primary btn-sm">Click for Weather</button>
  </div>`
}

loadCountryAPI();