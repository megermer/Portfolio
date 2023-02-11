const Projects = () => {
    return (
        <div className="articleContainer">
            <h1 id="projects" className="articleHeader projectsHeader">projects</h1>
            <ul className="articlePar projectsList">
                <li>
                    Bundle Marketplace (ongoing): A web application built with React.js, Flask, and
                    SQLite that allows users to advertise and sell textbooks, clothing, and sports 
                    equiptment across campus. Codeveloped with a team of eight fellow students. 
                </li>
                <li>
                    Context (ongoing): A Google chrome extension built with React.js that,
                    when opened in a news article, generates a list of related articles from
                    across the political spectrum based on the Bidirectional Encoder Representation 
                    from Transformers (BERT) model. It also displays the All-Sides Media Bias ranking
                    for each article. Codeveloped with Matthew Li at the 2022 GA Tech Annual Hackathon.
                </li>
                <li>
                    Chess: A pass-and-play chess application built in Python that checks for and allows
                    all legal moves, including en passant, castling, and pawn promotion. It recognizes
                    and announces checkmates and stalemates. Codeveloped with Kelvin Feitosa.
                </li>
            </ul>
        </div>
    )
}

export default Projects