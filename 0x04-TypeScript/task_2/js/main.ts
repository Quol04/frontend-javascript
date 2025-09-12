// Define interfaces
interface Director {
  workDirectorTasks(): string;
}

interface Teacher {
  workTeacherTasks(): string;
}

// Create Employee function
export function createEmployee(salary: number): Director | Teacher {
  if (salary < 500) {
    return {
      workTeacherTasks: () => "Getting to work",
    };
  } else {
    return {
      workDirectorTasks: () => "Getting to director tasks",
    };
  }
}

// Type predicate to check if employee is Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work depending on type of employee
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test cases
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
