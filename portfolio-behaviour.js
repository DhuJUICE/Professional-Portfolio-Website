const btnAbout = document.getElementById('btnAbout');
const btnProjects = document.getElementById("btnProjects");
const bodyText = document.getElementById("bodyText");

var aboutText = "ABOUT<br>HOBBIES/INTERESTS";
var projectText = "PROJECTS<br>Project1<br>Project2";

btnAbout.addEventListener('click', function(){
    bodyText.innerHTML = aboutText;
});


btnProjects.addEventListener("click", function(){
    bodyText.innerHTML = projectText;
});