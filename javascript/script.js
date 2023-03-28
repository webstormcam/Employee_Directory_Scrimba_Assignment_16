import employees from "./employees.js";
let rolePicked = document.getElementById('roleFinder')
const allEmployeesRender = () =>{

    for(const person of employees  )
    if(person.team==="leadership"){
        console.log(person)
    }
    
}

allEmployeesRender()