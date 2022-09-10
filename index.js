import inquirer from "inquirer";
import process from "process";
import { getDepartments, getEmployees, getRoles } from "./database.js";
// new inquirer.Separator(),
const views = [
  "View all departments",
  "View all roles",
  "View all employees",
  "Exit",
];

function callMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What do you want to do?",
        choices: views,
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      let index = views.indexOf(answers.menu);
      switch (index) {
        case 0:
          getDepartments().then((results) => {
            console.table(results);
            callMenu();
          });
          break;
        case 1:
          getRoles().then((results) => {
            console.table(results);
            callMenu();
          });
          console.log("ROLES SELECTED");
          break;
        case 2:
          console.log("EMPLOYEES");
          getEmployees().then((results) => {
            console.table(results);
            callMenu();
          });
          break;
        default:
          console.log("EXITING APP");
          process.exit(1);
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

callMenu();
