// 1st Question

class Movie {
  constructor (title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  get getPG () {
    let titles = "";
    if(this.rating == "PG"){
      titles += this.title;
    }
    return titles;
  }
};
//Movie 1
let rating = new Movie("Leo","Seven Screen");
console.log(`Movie 1:
Title   : ${rating.title}
Studio : ${rating.studio}
Rating : ${rating.rating}`);
//Movie 2
let PG = new Movie("Thunivu", "Zee Studios");
console.log(`Movie 2:
Title  : ${PG.title}
Studio : ${PG.studio}
Rating : ${PG.rating}

Title : ${PG.getPG}, ${rating.title}`);
//Movie 3
let movie = new Movie("Casino Royale", "Eon Productions", "PG-13")
console.log(`Movie 3:
Title  : ${movie.title}
Studio : ${movie.studio}
Rating : ${movie.rating}`)

// Question 2:
class Circle{
  constructor(radius, color){
      this.radius = radius;
      this.color = color;
  }
  get Radius(){
      return this.radius;
  }
  set Radius(radius){
      this.radius = radius;
  }
  get Color(){
      return this.color;
  }
  set Color(color){
      this.color = color;
  }
  get toString(){
      return `"Cercle[radius=${this.radius},color=${this.color}"]`
  }
  get Area(){
      return Math.PI * this.radius * this.radius;
  }
  get Circumference(){
      return Math.PI * this.radius;
  }
}

let circle = new Circle(1.0, "red")

console.log(`2. Question`)
circle.Radius = 1.1
console.log(`radius: ${circle.Radius}, color: ${circle.Color}`)
circle.Color = "green";
console.log(`
setColor: ${circle.Color}

toString: ${circle.toString}

getArea: ${circle.Area}

getCircumference: ${circle.Circumference}`)
 
//3.Write a “person” class to hold all the details.

class Person {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
  };
  const person1 = new Person('Gobi', 21, 'Salem');
  const person2 = new Person('Abi', 19, 'Chidambaram');
   
      console.log(`Person 1 Details : 
      Name: ${person1.name} 
      Age :${person1.age} 
      City: ${person1.city}`);

      console.log(`Person 2 Details : 
      Name: ${person2.name} 
      Age :${person2.age} 
      City: ${person2.city}`);

      // 4.write a class to calculate the uber price.

const uber = {
  set kiloMeter(km){    
     this.price = `${km} km = Rs.${km * 50}` ;
  },
  get kiloMeter(){
     return this.price;
  }
}

uber.kiloMeter = 5;

console.log(`Answer : ${uber.kiloMeter}`)