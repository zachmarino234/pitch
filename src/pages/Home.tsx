import { useNavigate } from 'react-router';
import { SplitScreen } from '../layouts/SplitScreen';
import '../styles/home.css'
import GameCard from '../assets/gamecard.svg'
import PromptCard from '../assets/promptcard.svg'
import TopicCard from '../assets/topiccard.svg'

export const Home = () => {
    const navigate = useNavigate();

    return (
        <SplitScreen
            child1={<div className='titleContainer'>
                <h1 className='title'>Create Your Next Great <span className='accent text'>Story</span></h1>
                <p className='subText'>Pitch is a card game that supports journalists in pursuit of their next great idea </p>
                <button className='primaryButton' onClick={() => navigate('cards')}>Explore Cards</button>
            </div>}
            child2={<div className='imageContainer'>
                <img src={GameCard} alt='Game Card'/>
                <img src={PromptCard} alt='Prompt Card'/>
                <img src={TopicCard} alt='Topic Card'/>
            </div>} />
    );
};

export default Home;