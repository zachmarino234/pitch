import { ArticleCard } from "../components/ArticleCard";
import GlobeLogo from '../assets/The_Boston_Globe.svg';
import BeaconLogo from '../assets/Newton_Beacon.png';


export const CaseStudies = () => {

    return (
        <div className="mt-5 sm:mx-36">
            <div className="mb-5">
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

            <div className="mb-5">
                <img src={BeaconLogo} alt="The Newton Beacon Logo" className="w-1/2 sm:w-1/4 mb-3" />
                <ArticleCard
                    headline="Authors Phoebe Sinclair and Lisa Stringfellow talk writing at Newtonville Books"
                    author="Emily Wyrwa"
                    cardsUsed={['Events']}
                    cardType={['topic']}
                    link="https://www.newtonbeacon.org/authors-phoebe-sinclair-and-lisa-stringfellow-talk-writing-at-newtonville-books/"
                />
                <ArticleCard
                    headline="Authors Phoebe Sinclair and Lisa Stringfellow talk writing at Newtonville Books"
                    author="Emily Wyrwa"
                    cardsUsed={['On the Beat', 'Events']}
                    cardType={['prompt', 'topic']}
                    link="https://www.newtonbeacon.org/passport-to-discovher-highlights-newtons-women-owned-small-businesses/"
                />
            </div>
        </div>
    );
};

export default CaseStudies;