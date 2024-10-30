var toggleskill = document.getElementById("toggle skill");
var Skill = document.getElementById("Skill");
toggleskill.addEventListener("click", function () {
    if (Skill.style.display === 'none') {
        Skill.style.display = 'block';
    }
    else {
        Skill.style.display = 'none';
    }
});
