const btnAbout = document.getElementById('btnAbout');
const btnProjects = document.getElementById("btnProjects");
const bodyText = document.getElementById("bodyText");

var aboutText = "ABOUT";
var projectText = "PROJECTS";

btnAbout.addEventListener('click', function(){
    bodyText.innerHTML = aboutText;
});


btnProjects.addEventListener("click", function(){
    bodyText.innerHTML = projectText;
});