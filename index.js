const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { assertNewExpression } = require("@babel/types");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//Array to hold all team member objects
const team =[];

//Function to invoke Manager Details
function init(){
    addManagerDetails();
}

// Function to get Team Manager details
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
    const manager = new Manager(answer.name,answer.id,answer.email,answer.officeNumber);
      team.push(manager);                            
      addNewTeamMember(); 
})
}

function addNewTeamMember(){

    inquirer.prompt([
                    {type:"confirm",
                    name:"check",
                    message:"Do you like to add new Team Member(Y/N):"
                    }])
    .then(response => {
   if(response.check === true)
          {
            inquirer.prompt([
                    {
                           type: "list",
                           name:"addMember",
                           message:"Do you like to add Engineer or Intern?:",
                           choices:["Engineer","Intern","Exit"]
       
                       }])
            .then(answer => {
                if(answer.addMember === "Engineer"){
                   addEngineer();
                    console.log(answer.addMember);
                    }
                else if(answer.addMember === "Intern")
                 {
                    addIntern();
                 console.log(answer.addMember);
                 }
                else{
                    exit();
                 console.log("its a exit");
                }
       })                       
    }
     else
        {
          console.log("write the data to the file.");
        }

    })
}

function addEngineer(){
  inquirer.prompt([
                   { type: "input",
                     name: "name",
                     message:"Enter Engineer's name:"
                   },
                   {
                    type: "input",
                    name: "id",
                    message:"Enter Engineer's id:"
                   },
                   {
                    type: "input",
                    name: "email",
                    message:"Enter Engineer's Email-Id:"
                   },
                   {
                    type: "input",
                    name: "github",
                    message:"Enter Engineer's GitHub user name:"
                   }
                   
])
  .then(answer => {
        const engineer = new Engineer( answer.name,answer.id,answer.email, answer.github);
        team.push(engineer);
        addNewTeamMember();
  })  
}

function addIntern(){
    inquirer.prompt([
      { type: "input",
        name: "name",
        message:"Enter Intern's name:"
      },
      {
       type: "input",
       name: "id",
       message:"Enter Intern's id:"
      },
      {
       type: "input",
       name: "email",
       message:"Enter Intern's Email-Id:"
      },
      {
       type: "input",
       name: "school",
       message:"Enter Intern's school details:"
      }

    ])
    .then(answer =>{
        const intern = new Intern(answer.name,answer.id,answer.email,answer.school);
        team.push(intern);
        addNewTeamMember();

    })
}

function exit(){
console.log("exit");
}


/*
function addNewTeamMember(){
inquirer.prompt([
                 {
                    type: "list",
                    name:"addMember",
                    message:"Do you like to add Engineer or Intern?:",
                    choices:["Engineer","Intern","Exit"]

                 }
]).then(answer => {
    if(answer.addMember === "Engineer"){
        console.log(answer.addMember);
    }
    else if(answer.addMember === "Intern"){
        console.log(answer.addMember);
    }
    else{
        console.log("its a exit");
    }
})

}
*/
init();