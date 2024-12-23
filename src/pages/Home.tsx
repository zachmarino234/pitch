import { useNavigate } from 'react-router';
import { SplitScreen } from '../layouts/SplitScreen';
import '../styles/home.css';
import HomeBg from '../assets/homebg.svg';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <SplitScreen
                child1={
                    <div className='inline-flex flex-col items-center gap-5 sm:items-start sm:mr-10 bg-white p-4 rounded-xl border-2'>
                        <h1 className='text-black font-richmond font-semibold m-0 text-4xl sm:text-6xl'>Create Your Next Great <span className='accent text font-bold'>Story</span></h1>
                        <p className=' text-xl sm:w-5/6'>Pitch is a card game that supports journalists in pursuit of their next great idea </p>
                        <button className='flex justify-center px-4 py-3 font-source-serif text-xl rounded-lg text-white bg-gradient-to-r from-orange-1 to-orange-2 primaryButton' onClick={() => navigate('cards')}>Explore Cards</button>
                    </div>}
                child2={<img src={HomeBg} alt="Background" className="home-bg w-full sm:w-1/2" />}
            />
        </>
    );
};

export default Home;