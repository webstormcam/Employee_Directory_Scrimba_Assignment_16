import employees from "./employees.js";

const allEmployeesRender = () =>{

    for(const person of employees  )
    if(person.team==="leadership"){
        console.log(person)
    }
    
}

allEmployeesRender()