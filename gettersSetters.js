class Event {
    constructor(name, startTime, endTime, location) {
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location;
    }
    
    toString() {
      const { name, startTime, endTime, location } = this;
      return `${startTime} - ${endTime}: ${name} at ${location}`;
    }
    
    get startHours() {
      return Number(this.startTime.split(":")[0]);
    }
    
    get startMinutes() {
      return Number(this.startTime.split(":")[1]);
    }
    
    get endHours() {
      return Number(this.endTime.split(":")[0]);
    }
    
    get endMinutes() {
      return Number(this.endTime.split(":")[1]);
    }
  
    set startMinutes(mins) {
      if (typeof(mins) !== "number") throw "A number is required."; //It will validate the typeof of mins before it runs
      if (mins >= 60) throw "A number less than 60 is required.";
      if (mins < 0) throw "A number above or equal to 0 is required.";
      this.startTime = `${this.startHours}:${mins}`;
    }

    set startHours(hours){
      if (typeof(hours) !== "number") throw "A number is required.";
      if (hours >= 24) throw "A number less than 24 is required.";
      if (hours < 0) throw "A number above or equal to 0 is required.";
      this.startTime = `${hours}:${this.startMinutes}`;
    }

    set endMinutes(mins) {
      if (typeof(mins) !== "number") throw "A number is required.";
      if (mins >= 60) throw "A number less than 60 is required.";
      if (mins < 0) throw "A number above or equal to 0 is required.";
      this.endTime = `${this.endHours}:${mins}`;
    }

    set endHours(hours){
      if (typeof(hours) !== "number") throw "A number is required.";
      if (hours >= 24) throw "A number less than 24 is required.";
      if (hours < 0) throw "A number above or equal to 0 is required.";
      this.endTime = `${hours}:${this.endMinutes}`;
    }

    isBefore(other) {
      return (
        this.endHours < other.startHours ||
        (this.endHours === other.startHours &&
          this.endMinutes <= other.startMinutes)
      );
    }
  }
  
  const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");
  lunchEvent.startMinutes = 15;
  console.log(lunchEvent);


//Error validation checks - Uncomment the lines to see the error throw
//lunchEvent.startMinutes = "15"; //> Error: A number is required.
//lunchEvent.startMinutes = 75; //> Error: A number less than 60 is required.
//lunchEvent.startMinutes = -10; //> Error: A number above or equal to 0 is required.

//Example from Roger
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  get personsName(){
    return this.name;
  }

  set setPersonsAge(newAge){
    if(typeof newAge !== "number"){
      console.log("Please provide a number")
    }else{
      this.age = newAge;
    }
  }
}

const scarlet = new Person ("Scarlet", 32);
console.log(scarlet.name);
console.log(scarlet.personsName);

console.log(`${scarlet.personsName} age before using the setPersonAge is: ${scarlet.age}`)
scarlet.setPersonsAge = 33;
//carlet.setPersonsAge = "Treinta y tres"; //> It will throw an error un_comment to see it
console.log(`${scarlet.personsName} age after using the setPersonAge is: ${scarlet.age}`)
