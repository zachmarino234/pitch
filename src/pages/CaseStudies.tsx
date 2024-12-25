import { ArticleCard } from "../components/ArticleCard";
import GlobeLogo from '../assets/The_Boston_Globe.svg'


export const CaseStudies = () => {

    return (
        <div className="mt-5 sm:mx-36">
            <p className="mb-5 font-semibold">Want a story you wrote featured? <a href="mailto:zachmarino234@gmail.com">Email me</a> with the story and the cards you used to develop the idea!</p>
            <img src={GlobeLogo} alt="The Boston Globe Logo" className="w-1/2 sm:w-1/4 mb-3" />
            <ArticleCard
                headline="Video game designer finds ‘Sweet Spot’ through Boston Public Art Triennial Accelerator program"
                author="Emily Wyrwa"
                cardsUsed={['Pair Programming', 'Variety']}
                cardType={['game', 'prompt']}
                link="https://www.bostonglobe.com/2024/12/20/arts/sweet-spot-boston-public-art-triennial-accelerator/" 
            />
        </div>
    );
};

export default CaseStudies;