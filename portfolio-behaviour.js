const btnAbout = document.getElementById('btnAbout');
const btnCV = document.getElementById("btnCV");
const btnProjects = document.getElementById("btnProjects");
const bodyText = document.getElementById("bodyText");

var aboutText = "ABOUT<br>HOBBIES/INTERESTS<br>CONTACT INFO";
var cvText = "EDUCATION<br>WORK EXPERIENCE<br>SKILLS";
var projectText = "PROJECTS<br>Project1<br>Project2";

btnAbout.addEventListener('click', function(){
    bodyText.innerHTML = aboutText;
});

btnCV.addEventListener("click", function(){
    bodyText.innerHTML = cvText;
});

btnProjects.addEventListener("click", function(){
    bodyText.innerHTML = projectText;
});