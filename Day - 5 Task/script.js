// Create your own resume data in JSON format
let resume={
    "profile": {
      "name": "GOBINATH R",
      "email": "gobigobi@gamil.com",
      "phone": 1234567890,
      "degree": "B.F.Sc",
      "location": {
        "address": "5/87,South Street",
        "postalCode": 636112,
        "city": "Salem",
        "state": "Tamilnadu",
        "country": "India"
      },
    },
  

    "education":[ 
      {
        "institution": "Annamalai University",
        "department": "Marine Science",
        "studyType": "Regular",
        "batch start year": 2019,
        "batch end year": 2023,
        "gpa": 7.5,
      }],
    "skills":[ 
      {
        "name": "javascript,c++,html",
        "level": "beginer",
      }],

    "languages":[ 
      {
        "language": "Tamil,Enlish",
      }],

    "hobbies": [
      {
        "hobbies": "Chess,Cricket",
      }],
    
  }
  console.log(resume);


  //for loop purpose

  let myResume=[{
    "profile": {
      "name": "GOBINATH R",
      "email": "gobigobi@gamil.com",
      "phone": 1234567890,
      "degree": "B.F.Sc",
      "location": {
        "address": "5/87,South Street",
        "postalCode": 636112,
        "city": "Salem",
        "state": "Tamilnadu",
        "country": "India"
      },
    },
  

    "education": 
      {
        "institution": "Annamalai University",
        "department": "Marine Science",
        "studyType": "Regular",
        "batch start year": 2019,
        "batch end year": 2023,
        "gpa": 7.5,
      },
    "skills": 
      {
        "name": "javascript,c++,html",
        "level": "beginer",
      }
    ,
    "languages": 
      {
        "language": "Tamil,Enlish",
      }
    ,
    "hobbies": 
      {
        "hobbies": "Chess,Cricket",
      }
    
  }]

  //Over all for loop

  //for loop
  for(let i = 0; i < myResume.length ; i++){

    let profile =myResume[i];
    console.log(profile.profile.name);
    console.log(profile.profile.email);
    console.log(profile.profile.phone);
    console.log(profile.profile.degree);
  }

  // for Each
  myResume.forEach (function(education) {
    console.log(education.education.institution);
    console.log(education.education.department);
    console.log(education.education.studyType);

  });

  // for In
  for (let key in myResume){
    if( myResume.hasOwnProperty (key)) {
      console.log(myResume[key].hobbies.hobbies);
    }
  }
  
  //for Of
  for (let resume of myResume){
    let skills = resume.skills.name
    console.log(skills);
  }