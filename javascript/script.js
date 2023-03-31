import employees from "./employees.js";
const gridArea = document.getElementById('gridArea')
let rolePicked = document.getElementById('roleFinder')

const allEmployeesRender = () =>{
    gridArea.innerHTML=``
    let people =``
    let socialCollecter =``
    for(const person of employees  )
    if(rolePicked.value===`everyone`){
        people+=`<div class="grid-item">
        <img class="profile-pic" src="./images/${person.image}" alt="A man with glasses">
        <div class="name-title">
            <h2>${person.name}</h2>
            <h3>${person.title}</h3>
        </div>
        ${person.bio}
            <div class="socials">
            </div>
            </div>`
    } else if(person.team===rolePicked.value){
        people+=`<div class="grid-item">
        <img class="profile-pic" src="./images/${person.image}" alt="A man with glasses">
        <div class="name-title">
            <h2>${person.name}</h2>
            <h3>${person.title}</h3>
        </div>
        ${person.bio}
            <div class="socials">
            </div>
            </div>
`
    }
    gridArea.innerHTML=people
}
rolePicked.addEventListener('change',allEmployeesRender)
allEmployeesRender()
