/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // declaration merging: add optional property
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends SubjectClass {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
