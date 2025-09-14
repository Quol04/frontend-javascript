/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Create constants for each class
const cpp = new Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// Create a Teacher object with experienceTeachingC = 10
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


/// test 
// const cpp = new Cpp()
// const java = new Java()
// const react = new React()
// cTeacher: Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 }

// Cpp
