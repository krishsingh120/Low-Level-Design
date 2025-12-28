class Employee {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  fetchBioData() {
    // fetching data using some mechanism
    return "some bio data";
  }

  calculateSalary() {
    return 0;
  }

  printPerformanceData() {
    console.log("some performance related data");
  }
}

const employee = new Employee(1);
console.log(employee.getId());
console.log(employee.calculateSalary());
console.log(employee.fetchBioData());
employee.printPerformanceData();
