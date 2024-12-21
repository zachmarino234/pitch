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
            child1={
                <div className='inline-flex flex-col items-center gap-5 sm:items-start'>
                    <h1 className='text-black font-richmond font-semibold m-0 text-4xl sm:text-6xl'>Create Your Next Great <span className='accent text font-bold'>Story</span></h1>
                    <p className=' text-xl sm:w-5/6'>Pitch is a card game that supports journalists in pursuit of their next great idea </p>
                    <button className='flex justify-center px-4 py-3 font-source-serif text-xl rounded-lg text-white bg-gradient-to-r from-orange-1 to-orange-2 primaryButton' onClick={() => navigate('cards')}>Explore Cards</button>
                </div>}
            child2={<div className='flex gap-3 justify-center'>
                <img src={GameCard} alt='Game Card' className='w-1/3' />
                <img src={PromptCard} alt='Prompt Card' className='w-1/3' />
                <img src={TopicCard} alt='Topic Card' className='w-1/3' />
            </div>} 
        />
    );
};

export default Home;