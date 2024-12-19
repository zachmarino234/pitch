import { useNavigate } from 'react-router';
import { SplitScreen } from '../layouts/SplitScreen';
import '../styles/home.css'
import Cards from '../assets/cards.svg'

export const Home = () => {
    const navigate = useNavigate();

    return (
        <SplitScreen
            child1={<div className='titleContainer'>
                <h1 className='title'>Create Your Next Great <span className='accent text'>Story</span></h1>
                <p className='subText'>Pitch is a card game that supports journalists in pursuit of their next great idea </p>
                <button className='primaryButton' onClick={() => navigate('cards')}>Explore Cards</button>
            </div>}
            child2={<img src={Cards} alt='Example cards' />} />
    );
};

export default Home;