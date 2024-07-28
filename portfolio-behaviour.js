const btnAbout = document.getElementById('btnAbout');
const btnProjects = document.getElementById("btnProjects");
const bodyText = document.getElementById("bodyText");

const aboutText = `
    <table border="1" width="100%" height="100%">
        <tr>
            <td>
                <h2>About</h2>
                <p>
                    I am an enthusiastic life long learner driven by excellence and efficiency. My mission and goal in life is to make the
                    world a better place for the current and future generations to come by using
                    hard work, dedication, intelligence, and technology. 
                    I enjoy working alongside like minded individuals who are passionate and always striving to be the best in what they do.
                </p>
            </td>
            <td>
                <tr>
                    <td>
                        <h2>Hobbies</h2>
                        <p>
                            I enjoy playing chess and working on and building electric circuits in my spare time.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Interests</h2>
                        <p>
                            I am very interested in computer
                            networks, and robotics. To be able to remotely control a robot through a computer network is such a fascinating idea.
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