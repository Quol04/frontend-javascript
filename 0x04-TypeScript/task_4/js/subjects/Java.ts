/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // declaration merging: add optional property
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends SubjectClass {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
