import profile from "../images/profile.jpg"

const About = () => {
    return (
        <section className="articleContainer">
            <h1 id="about" className="articleHeader aboutMeHeader">about me</h1>
            <div className="firstParAndImgContainer">
                <p className="articlePar firstPar">
                    Hi there! My name is Meg Ermer, and I am a 3rd year at Southern Adventist 
                    University puruing a double degree in Computer Science (B.S.) and Spanish 
                    (B.A.). From Java to Castellano, languages are an integral part of my life, 
                    and I love mastering different forms of communication, whether it be between 
                    machines, people, or even both. 
                </p>
                <img 
                    className="aboutMeImg" 
                    src={profile} 
                    alt="me in front of the colorful coastline of Menton, France"
                />
            </div>
            <p className="articlePar">
                I am currently studying front-end web application development in React,
                as well as expanding my knowledge of object-oriented programming while 
                working mainly in Python. Next semester, I look forward to taking a graduate
                -level class in data visualization as well as a class in database management.
            </p>
            <p className="articlePar">
                One of my most valuable college experiences was my second year, which I 
                spent pursuing my Spanish degree in a small coastal town in Spain. During 
                my time abroad, I not only improved my language skills, but also learned how
                to be more independent and expanded my world views.
            </p>
            <p className="articlePar">
                Outside of school, I enjoy reading, playing violin, running, and spending
                time with friends. I also drink a lot of boba.
            </p>
        </section>
    )
}

export default About