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
  
    getStartHours() {
      return Number(this.startTime.split(":")[0]);
    }
    getStartMinutes() {
      return Number(this.startTime.split(":")[1]);
    }
    getEndHours() {
      return Number(this.endTime.split(":")[0]);
    }
    getEndMinutes() {
      return Number(this.endTime.split(":")[1]);
    }
  
    isBefore(otherEvent) {
      return this.getEndHours() < otherEvent.getStartHours() || (
          this.getEndHours() === otherEvent.getStartHours() &&
          this.getEndMinutes() <= otherEvent.getStartMinutes()
        );
    }

    durationMinutes(){
        let endTime = (this.getEndHours() * 60) + this.getEndMinutes();
        let startTime = (this.getStartHours() * 60) + this.getStartMinutes();
        return endTime - startTime;
      }
    
      conflict(otherEvent){
        return !(otherEvent.getEndHours() < this.getStartHours() || 
             (otherEvent.getEndHours() === this.getStartHours() && otherEvent.getEndMinutes() < this.getStartMinutes()) ||
             otherEvent.getStartHours() > this.getEndHours() || 
             (otherEvent.getStartHours() === this.getEndHours() && otherEvent.getStartMinutes() > this.getEndMinutes())
            );
      }
    
  }
  
  const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");
  console.log(lunchEvent.toString()); // > 12:00 - 13:00: Lunch at Chipotle
  console.log(lunchEvent.getStartHours()); // > 12
  console.log(lunchEvent.getStartMinutes()); // > 0
  
  console.log(lunchEvent.getEndHours()); // > 13
  console.log(lunchEvent.getEndMinutes()); // > 0
  
  const meeting = new Event("Meeting", "14:00", "15:30", "Conference room");
  console.log(lunchEvent.isBefore(meeting)); //> true
  console.log(meeting.isBefore(lunchEvent)); // > false

  const party = new Event("Party", "18:00", "21:00", "My House");
  console.log(party.toString());
  console.log(party.isBefore(lunchEvent));

  console.log("The party will last: " + party.durationMinutes() + " minutes");

  const lunchEvent1 = new Event("Lunch", "12:00", "13:00", "Chipotle");
  const meeting1 = new Event("Meeting", "14:00", "15:30", "Conference room");
  console.log("lunch1 vs Meeting1: " + lunchEvent1.conflict(meeting1));
  console.log("Meeting 1 vs lunch1: " + meeting1.conflict(lunchEvent1));


  //Example from Roger
  class Student{
    constructor(name, grade, age, gpa){
        this.name = name;
        this.grade = grade;
        this.age = age;
        this.gpa = gpa;
    }

    printStudentAge(){
        let{name, age} = this;
        console.log(`${name} is ${age} years old`);
    }

  };

  const studentOne = new Student("Groot", 10, 15, 4.0);

  studentOne.printStudentAge();