//How to compare two JSON have the same properties without order ?
var object1={ name:"Person1", age:5};
var object2= { age:5 , name:"Person1"};

function areObjectsEqual(object1,object2){
  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2); 
 
  if (keys1.length !== keys2.length){
    return false;
    }
    for (var key of keys1){
      if (object1[key]!==object2[key]){
        return false;
        }
      }
      return true;
  }
  console.log(areObjectsEqual(object1,object2));

  // Q NO 2 AND 3 

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