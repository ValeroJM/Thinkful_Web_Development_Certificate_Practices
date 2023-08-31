const author = {
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    birthday: "1946-10-19",
  };

//Given an object we can destructure by following this formula: Creating a variable + {Objet or key value we want to store} = JSON object
const {name} = author;
const firstName = name.firstName;
const surname = name.surname
console.log(firstName); //> 'Philip'
console.log(surname); //> 'Pullman'

//This is an example of array destructure
const genres = [
    "Fantasy",
    "Fiction",
    "Nonfiction",
    "Science Fiction",
    "Young Adult",
  ];

  const [a,b,c,...theRest] = genres;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(theRest);
