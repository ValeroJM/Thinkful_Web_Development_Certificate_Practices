const people = {
    "Lee Finch": { address: "913 Hunts Lane", isCustomer: true },
    "Whitney Shawna": { address: "392 Norfolk Street", isCustomer: false },
    "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false },
  };
  
  for (let name in people) {
    const person = people[name];
    console.log("This is the data type of person" + typeof(person));
    const address = person.address;
    console.log(`Sending mail to ${name} at ${address}.`);
  }