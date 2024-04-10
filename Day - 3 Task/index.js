
  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.com/v3.1/all", true);
  xhr.onload = function () {

    //console.log("XMLHttpRequest - status",xhr.status );
    var countries = JSON.parse(xhr.responseText);
    countries.forEach(country=> {
      console.log("Country Name:",country.name.common)
      console.log("Flag:", country.flag);
      console.log("Populations:" , country.population)
      console.log("Region:" , country.region)
      console.log("Subregion:",country.subregion)
    });
      
  };
  xhr.send();