

export const About = () => {

    return (
        <>

            <div className="my-4 p-4 rounded-xl border-2">
                <h1>About</h1>
                <p>
                    Pitch is a design kit that provides journalists a more structured and engaging method for brainstorming story ideas.
                    The deck is based on the concept of cognitive load, which is the amount of information that someone
                    can hold onto at one time. By breaking down the brainstorming process into more specific and guided
                    steps, the user can reduce their cognitive load which leads to more focused ideas. The cards are divided into three categories:
                    game cards, prompt cards, and topic cards. Game cards are activites one or more journalists can do together to brainstorm.
                    Prompt cards are guided questions to kick-off idea generation. Topic cards are evergreen topics that can serve as inspiration for new stories and styles.
                </p>
                <br />
                <p>
                    This project was created by <a href="https://www.linkedin.com/in/zach-marino/">Zach Marino</a> through Northeastern's College of Arts, Media, and Design.
                    Special thank you to <a href="https://www.linkedin.com/in/emily-wyrwa220/">Emily Wyrwa</a>, <a href="https://www.bostonglobe.com/about/staff-list/columnist/brian-mcgrory/">Brian McGrory</a>, <a href="https://www.linkedin.com/in/turneremily/">Emily Turner</a>, <a href="https://www.linkedin.com/in/luke-scotchie/">Luke Scotchie</a>, <a href="https://www.linkedin.com/in/daisylevine/">Daisy Levine</a>, <a href="https://www.linkedin.com/in/katrina-liu-1311a218b/">Katrina Liu</a>, <a href="https://www.linkedin.com/in/eli-cloutier-7249a6264/">Eli Cloutier</a>, and my Supervising Professor <a href="https://sofie.space/">Sofie Hodara</a> for their input, time, and guidance with this project!
                </p>
                <br />
                <p>
                    A full write-up of the project can be found at <a href="https://zmarino.com/posts/pitch/">zmarino.com</a>.
                </p>

            </div>

            <div className="my-4 p-4 rounded-xl border-2">
                <h1>Download</h1>
                <p>
                    The best way to use Pitch is to download the cards and print them out. 
                    The PDF below has all of the cards on 8.5x11 inch (letter-sized) paper.
                    I recommend printing the cards on cardstock or thicker paper and/or laminating them.
                    In the future, I hope to have a physical deck available for purchase, but this website and the files will always be free!
                </p>

                <a href="/pitch-cards.pdf" download className="py-2 px-4 bg-gradient-to-r from-orange-1 to-orange-2 text-white rounded-lg inline-block mt-2">Download</a>

            </div>

            <iframe className="w-full p-9" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} height="850" src="https://embed.figma.com/slides/H1QxQ68WMjtA6wrn0egYWp/Pitch-Project-Presentation?node-id=1-587&embed-host=share"></iframe>
        </>
    );
};

export default About;