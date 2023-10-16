//Roger Example from Thinkiful

//Classes
    //Students
    //Course

//Methods
    //Student -> It seems that no methods will be needed appart from attributes
    //Course
        //enrollStudents

//Attributes
    //Course
        //name: String
        //instructor: String
        //listOfStudents: {id: StudentClass}

    //Student
        //firstName
        //LastName
        //id

class Course{
    constructor(courseName, instructor){
        this.courseName = courseName;
        this.instructor = instructor;
        this.listOfStudents = {};
    }

    enrollStudent(student){
        this.listOfStudents[student.id] = student; //This will take the student.id as Key and assigne the student as value
        //console.log(`${student.fullName} has been enrolled in ${this.courseName}`);
    }
}

class Student{
    constructor(firstName, lastName, id){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

const student1 = new Student("Groot", "Skywalker", 1);
const student2 = new Student("Luke", "Skywalker", 2);
const fullStackCourse = new Course("Full Stack Development", "Mrs. Jones");

console.log(fullStackCourse);

fullStackCourse.enrollStudent(student1);
fullStackCourse.enrollStudent(student2);

console.log(fullStackCourse.listOfStudents);