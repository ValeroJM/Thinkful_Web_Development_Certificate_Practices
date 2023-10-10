class Test{
    constructor(){
        console.log('Calling the constructor function!')
    }
}

class Event{
    constructor(name, startTime, endTime, location) {
        // console.log("Calling the constructor function!");
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
      }
}


new Test();
const lunch = new Event("lunch","12:00","13:00","Chipotle");
const dinner = new Event("Dinner", "18:00", "19:00");


console.log(lunch);
console.log(dinner);

class Phone{
    constructor(make, model, phoneNumber){
        this.make = make;
        this.model = model;
        this.phoneNumber = phoneNumber;
    }
}

const iphone = new Phone("Apple", "iPhone 12", "954-555-4233");
const iphoneTwo = new Phone("Apple", "iPhone 2", "301-555-4233");


console.log(iphone);
console.log(iphone.make);
console.log(iphone.model);
console.log(iphone.phoneNumber);

console.log(iphoneTwo);
