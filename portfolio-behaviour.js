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
    <table border="0" width="100%" height="100%">
        <tr>
            <td width="30%">
                <h2>Work experience</h2>
                <p>
                    <b>Supplemental Instruction Leader - C# 2023</b><br>
                    North West University<br>
                    Had the opportunity to help over 350 students grasp and understand the C#
                    programming language along with User Interface programming.
                    <br><br>
                    <b>Skills Gained:</b><br>
                    Time Management | Attention to Detail | Interpersonal Communication | C# |
                    Technical Education & Communication | Management
                </p>
            </td>
            <td>
                <h2>Work experience</h2>
                <p>
                    <b>Student Assistant - Python 2024</b><br>
                    North West University<br>
                    Had the opportunity to help over 300 students grasp and understand the
                    Python programming language along with SQL databases.<br><br>
                    <b>Skills Gained:</b><br>
                    Time Management | Attention to Detail | Interpersonal Communication | Python |
                    SQLite | Administration
                </p>
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
            <td width="20%">
                <h2>Education</h2>
                <p>
                    2022 - 2024<br>
                    North West University<br>
                    -Bachelor of science in Information Technology
                </p>
            </td>
        </tr>
    </table>
`;

const projectText = `
    <table border="0" width="100%" height="100%">
        <tr>
            <td align="center" width="50%">
                <h2>Project 1</h2>
                <h2><a href="https://github.com/DhuJUICE/Ecommerce-Backend">Ecommerce Web Application Backend</a></h2>
                <p>
                    With this project i was asked to help with the development of the backend for a ecommerce web application using the Django
                    Web Development Framework and Python. I had to work with PostgreSQL and develop the different models for the data requirements
                    as well as to link the backend to the PostgreSQL database for seemless interaction between database and backend using the ORM django provides.
                    I look forward to completing the financial transaction functionality on this project using the Stripe API.
                </p>
            </td>
            <td align="center" width="50%">
                <h2>Project 2</h2>
                <h2><a href="https://github.com/DhuJUICE/Encryption-Project">SecureCrypt Encryption</a></h2>
                <p>
                    This was a fun project to be apart of and is actually quite useful for encrypting my personal files that 
                    i do not want others to access without unauthorized access. Using python to build this project was challenging at first but as me and my team got deeper into understanding the concepts behind
                    the encryption algorithms we were able to complete this encryption program.
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