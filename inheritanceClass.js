class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.enrolledActivities = [];
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    enrollInActivity(activity) {
      this.enrolledActivities.push(activity);
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, enrollmentDate) {
      super(firstName, lastName);
      this.enrollmentDate = enrollmentDate;
      this.enrolledCourses = [];
    }
    
    enrollInCourse(course) {
      this.enrolledCourses.push(course);
    }
  }
  
  class Instructor extends Person {
    constructor(firstName, lastName, course) {
      super(firstName, lastName);
      this.course = course;
    }
  }
  
  /**
    TESTING THE PERSON CLASS
  */
  
  const mae = new Student("Mae", "Ollo", "2018-10-04");
  console.log(mae);
  /*
    Student {
      firstName: 'Mae',
      lastName: 'Ollo',
      enrolledActivities: [],
      enrollmentDate: '2018-10-04',
      enrolledCourses: []
    }
  */
  
  /** 
    TESTING THE STUDENT CLASS 
  */
  
  let student = new Student("Jacob", "Lee", "2018-01-02");
  console.log(student.fullName); //> Jacob Lee
  
  student.enrollInActivity("soccer");
  console.log(student.enrolledActivities); //> [ 'soccer' ]
  
  student.enrollInCourse("geometry");
  console.log(student.enrolledCourses); //> [ 'geometry' ]
  
  /**
    TESTING THE INSTRUCTOR CLASS
  */
  let instructor = new Instructor("Mary", "Jo", "geometry");
  console.log(instructor.fullName); //> Mary Jo
  console.log(instructor.course); //> geometry
  
  instructor.enrollInActivity("yoga");
  console.log(instructor.enrolledActivities); //> [ 'yoga' ]

  
  //Inheritance by Roger Thinkful
  //This is a our Parent or Base class
  class Automobile{
    constructor(wheels, doors){
        this.wheels = wheels;
        this.doors = doors;
    }

    get specifications(){
        return `The automobile has ${this.doors} doors and ${this.wheels} wheels`;
    }
  };

  const firstAutomobile = new Automobile(4,2);
  console.log(firstAutomobile);
  console.log(firstAutomobile.specifications);

  class Truck extends Automobile{
    constructor(wheels, doors, canTow){
        super(wheels, doors);
        this.canTow = canTow;
    };
  };

  const firsTruck = new Truck (4,4,true);
  console.log(firsTruck);

