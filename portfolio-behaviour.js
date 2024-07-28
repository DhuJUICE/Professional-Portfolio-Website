const btnAbout = document.getElementById('btnAbout');
const btnDetails = document.getElementById("btnDetails");
const btnProjects = document.getElementById("btnProjects");
const bodyText = document.getElementById("bodyText");

const aboutText = `
    <table border="0" width="100%" height="100%">
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

const detailsText = `
    <table border="1" width="100%" height="100%">
        <tr>
            <td>
                <h2>Work experience 1</h2>
            </td>
            <td>
                <h2>Work experience 2</h2>
            </td>
            <td width="20%">
                <h2>Skills</h2>
                <p>
                    Python | C# | Java<br>
                    HTML | CSS | JavaScript<br>
                    SQL | Git | Github<br>
                    Django Framework
                </p>
            </td>
            <td>
                <h2>Education</h2>
            </td>
        </tr>
    </table>
`;

const projectText = `
    <table border="0" width="100%" height="100%">
        <tr>
            <td align="center" width="50%">
                <h2>Project 1</h2>
                <h2>Ecommerce Web Application Backend</h2>
                <p>
                    With this project i was asked to help with the development of the backend for a ecommerce web application using the Django
                    Web Development Framework and Python. I had to work with PostgreSQL and develop the different models for the data requirements
                    as well as to link the backend to the PostgreSQL database for seemless interaction between database and backend using the ORM django provides.
                    I look forward to completing the financial transaction functionality on this project using the Stripe API.
                </p>
            </td>
            <td align="center" width="50%">
                <h2>Project 2</h2>
                <h2>Email Retrieving Automation</h2>
                <p>
                    This was a project i wanted to do for myself as i do not like to open my
                    emails everytime i start up my computer, so i developed a program that will run at startup of my pc and show me all my new inbox emails
                    without having to log in everytime. I made use of the simplegmail Gmail API. It asks you to log into your gmail account once and them stores a gmail_token to be used everytime you run the program without logging into gmail on pc startup again.
                </p>
            </td>
        </tr>
    </table>
`;

btnAbout.addEventListener('click', function(){
    bodyText.innerHTML = aboutText;
});

btnDetails.addEventListener('click', function(){
    bodyText.innerHTML = detailsText;
});

btnProjects.addEventListener("click", function(){
    bodyText.innerHTML = projectText;
});