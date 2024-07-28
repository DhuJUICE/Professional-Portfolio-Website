const btnAbout = document.getElementById('btnAbout');
const btnProjects = document.getElementById("btnProjects");
const bodyText = document.getElementById("bodyText");

const aboutText = `
    <table border="1" width="100%" height="100%">
        <tr>
            <td>
                About 
                <p>
                    I am an enthusiastic life long learner driven by excellence and efficiency. My mission and goal in life is to make the
                    world a better place for the current and future generations to come by using
                    hard work, dedication, intelligence, and technology. 
                    I enjoy working alongside like minded individuals who are passionate and always strives to be the best in or at what they do.
                </p>
            </td>
            <td>
                <tr>
                    <td>
                        Hobbies
                        <p>
                            I enjoy playing chess and working on and building electric circuits in my spare time.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Interests
                        <p>
                             with a keen interest in computer
                            networks, and robotics.
                        </p>
                    </td>
                </tr>
            </td>
        </tr>
    </table>
`;
var projectText = "PROJECTS";

btnAbout.addEventListener('click', function(){
    bodyText.innerHTML = aboutText;
});


btnProjects.addEventListener("click", function(){
    bodyText.innerHTML = projectText;
});