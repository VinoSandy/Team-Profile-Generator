const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team =[];

function init(){

    addManagerDetails();
}

function addManagerDetails(){

    inquirer.prompt([
                      { type: "input",
                        name : "name",
                        message: "Enter Team Manager's name:"
                      },
                      {
                        type: "input",
                        name: "id",
                        message:"Enter Team Manager's Id:"

                      },
                      {
                        type: "input",
                        name: "email",
                        message:"Enter Team Manager's Email-Id:"

                      },
                      {
                        type: "input",
                        name: "officeNumber",
                        message:"Enter Team Manager's officeNumber:"

                      },

]).then(answer =>{
    const manager = new Manager(
                        answer.name,
                         answer.id,
                         answer.email,
                          answer.officeNumber
                            );
      team.push(manager);                            
      console.log(team[0]);
})
}



init();