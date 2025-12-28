class Employee {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}

class BioDataService {
  fetchBioData(employee) {
    return "some bio data of employee with ID: " + employee.getId();
  }
}

class SalaryCalculator {
  calculateSalary(employee) {
    return 5000;
  }
}

class PerformancePrinter {
  printPerformanceData(employee) {
    console.log(
      "some performance related data for employee with ID: " + employee.getId()
    );
  }
}

const employee = new Employee(1);
const bioDataService = new BioDataService();
const salaryCalculator = new SalaryCalculator();
const performancePrinter = new PerformancePrinter();

console.log(employee.getId());
console.log(salaryCalculator.calculateSalary(employee));
console.log(bioDataService.fetchBioData(employee));
performancePrinter.printPerformanceData(employee);
