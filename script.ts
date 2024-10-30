const toggleskill = document.getElementById("toggle skill") as HTMLButtonElement;
const Skill = document.getElementById("Skill") as HTMLElement

toggleskill.addEventListener("click", () =>{
    if(Skill.style.display === 'none' ){
        Skill.style.display = 'block'
    }
    else{
        Skill.style.display = 'none'
    }
})   

  
