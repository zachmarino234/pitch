import { useNavigate } from 'react-router';
import { SplitScreen } from '../layouts/SplitScreen';
import '../styles/home.css';
import HomeBg from '../assets/homebg.svg';
import Logo from '../assets/logo-orange.svg';
import Cards from '../assets/cards.svg';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <SplitScreen
                child1={
                    <div className='flex flex-col items-center gap-5'>
                        <img src={Logo} alt="Pitch logo" className="w-full px-8 bg-white p-4 rounded-xl border-2 sm:border-0" />
                        <div className='inline-flex flex-col items-center w-full gap-5 sm:items-start bg-white p-4 rounded-xl border-2'>
                            <h1 className='text-black font-richmond font-semibold m-0 text-4xl sm:text-6xl'>Create Your Next Great <span className='accent text font-bold'>Story</span></h1>
                            <p className=' text-xl sm:w-5/6'>Pitch is a card game that supports journalists in pursuit of their next great idea </p>
                            <button className='flex justify-center px-4 py-3 font-source-serif text-xl rounded-lg text-white bg-gradient-to-r from-orange-1 to-orange-2 primaryButton' onClick={() => navigate('cards')}>Explore Cards</button>
                        </div>
                    </div>}
                child2={<div>
                    <img src={HomeBg} alt="Background" className="home-bg w-full sm:w-1/2 lg:px-8 hidden sm:block" />
                    <img src={Cards} alt="Background" className="w-full sm:hidden" />
                </div>}
            />
        </>
    );
};

export default Home;