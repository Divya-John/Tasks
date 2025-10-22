const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let employees = [];

function promptUser() {
  console.log("\n--- Employee Manager ---");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Delete Employee");
  console.log("4. Exit");

  rl.question("Enetr your choice: ", (choice) => {
    switch (choice.trim()) {
      case "1":
        addEmployee();
        break;
      case "2":
        listEmployees();
        break;
      case "3":
        deleteEmployee();
        break;
      case "4":
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again");
        promptUser();
        break;
    }
  });
}

function addEmployee() {
  rl.question("Enter employee name: ", (name) => {
    rl.question("Enter employee age:", (age) => {
      rl.question("Enter employee role: ", (role) => {
        employees.push({
          name: name.trim(),
          age: parseInt(age),
          role: role.trim(),
        });
        console.log("Employee added successfully!");
        promptUser();
      });
    });
  });
}

function listEmployees() {
  if (employees.length === 0) {
    console.log("No employees to display");
  } else {
    console.log("\n--- Employee List ---");
    employees.forEach((emp, index) => {
      console.log(
        `${index + 1}. Name:${emp.name}, Age:${emp.age},Role:${emp.role}`
      );
    });
  }
  promptUser();
}

function deleteEmployee() {
  rl.question(
    "Enter the name of the employee to delete: ",
    (nameToDelete) => {
      const initialLength = employees.length;
      employees = employees.filter(emp=>
        emp.name.toLowerCase() !== nameToDelete.trim().toLowerCase()
      );
      if (employees.length < initialLength) {
        console.log("Employee deleted successfully!");
      } else {
        console.log("Employee not found.");
      }
      promptUser();
    }
  );
}
promptUser();

rl.on("close", () => {
  console.log("Exiting Employee Manager.Goodbye!");
  process.exit(0);
});
