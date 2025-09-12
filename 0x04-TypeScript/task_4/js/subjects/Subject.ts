/// <reference path="./Teacher.ts" />

namespace Subjects {
  // Interface for Subject
  export interface Subject {
    teacher: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  // Class implementing the Subject interface
  export class SubjectClass implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
