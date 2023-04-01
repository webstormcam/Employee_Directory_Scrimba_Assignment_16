import employees from "./employees.js";
const gridArea = document.getElementById('gridArea')
let rolePicked = document.getElementById('roleFinder')

const NameSearch = document.getElementById('NameSearch')


const allEmployeesRender = () =>{
    gridArea.innerHTML=``
    let people =``
    for(const person of employees  ){
        let socialCollecter =``
        if(person.social.twitter){
           socialCollecter+=`<a href="${person.social.twitter}"><img src="./images/twitter 2.png"></a>`
        }
        if(person.social.linkedin){
            socialCollecter+=`<a href="${person.social.linkedin}"><img src="./images/linkedin 1.png"></a>`
        }
        if(rolePicked.value===`everyone`){
            people+=`<div class="grid-item">
            <img class="profile-pic" src="./images/${person.image}" alt="A man with glasses">
            <div class="name-title">
                <h2>${person.name}</h2>
                <h3>${person.title}</h3>
            </div>
            ${person.bio}
                <div class="socials">
                ${socialCollecter}
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
                ${socialCollecter}
                </div>
                </div>
    `
        }
    }
    gridArea.innerHTML=people
}
rolePicked.addEventListener('change',allEmployeesRender)
NameSearch.addEventListener('keyup',function(){
    console.clear()
for(const person of employees){
    if(person.name.toLowerCase().includes(NameSearch.value)){
        console.log(person)
    }
}
  
   
})
allEmployeesRender()

// const str = "To be, or not to be, that is the question.";

// console.log(str.includes("z"));

