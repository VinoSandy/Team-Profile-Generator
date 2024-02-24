// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
/*In addition to Employee's properties and methods, Engineer will also have the following:
github—GitHub username
getGithub()
getRole()—overridden to return 'Engineer' */

const employee = require('./Employee')


class Engineer extends employee{

    constructor(name, id, email, github){
      super (name,id,email)
      this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}
module.exports= Engineer;