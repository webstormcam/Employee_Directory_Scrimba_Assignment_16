import employees from "./employees.js";
let rolePicked = document.getElementById('roleFinder')



const allEmployeesRender = () =>{
    console.clear()
    for(const person of employees  )
    if(rolePicked.value===`everyone`){
        console.log(person)
    } else if(person.team===rolePicked.value){
        console.log(person)
    }
    
}



rolePicked.addEventListener('change',allEmployeesRender)
allEmployeesRender()
