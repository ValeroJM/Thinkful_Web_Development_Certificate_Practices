const contacts = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      picture: "https://via.placeholder.com/150/008600/FFFFFF?text=LG",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Green Vale",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      picture: "https://via.placeholder.com/150/0000FF/FFFFFF?text=EH",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Blue Vale",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      picture: "https://via.placeholder.com/150/34F500/FFFFFF?text=CB",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "Green Vale",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      picture: "https://via.placeholder.com/150/008600/FFFFFF?text=PL",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Vale",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      picture: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=CD",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "North Vale",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      picture: "https://via.placeholder.com/150/000086/FFFFFF?text=DS",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Vale",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      picture: "https://via.placeholder.com/150/860000/FFFFFF?text=KW",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Blue Vale",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.me",
      picture: "https://via.placeholder.com/150/FF0000/FFFFFF?text=NR",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Green Vale",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      picture: "https://via.placeholder.com/150/226688/FFFFFF?text=GR",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "White Vale",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      picture: "https://via.placeholder.com/150/000000/FFFFFF?text=CD",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Blue Vale",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];


 function loadCities(contacts) {
    let citiesList = [];
    contacts.forEach((contact) => {
        if (!citiesList.includes(contact.address.city)){
            citiesList.push(contact.address.city);
        }
     });   
    
    
    
   return citiesList;
 }

console.log(loadCities(contacts));