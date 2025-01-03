import { useState, useEffect } from 'react';
import { SectionLayout } from '../layouts/SectionLayout';
import instructions from '../assets/cards/instructions.svg'
import credits from '../assets/cards/credits.svg'

export const Cards = () => {
    const [gameCardImages, setGameCardImages] = useState<string[]>([]);
    const [promptCardImages, setPromptCardImages] = useState<string[]>([]);
    const [topicCardImages, setTopicCardImages] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const gameImages = import.meta.glob('../assets/cards/game/*.svg', { eager: true });
        const promptImages = import.meta.glob('../assets/cards/prompt/*.svg', { eager: true });
        const topicImages = import.meta.glob('../assets/cards/topic/*.svg', { eager: true });

        const gameImagePaths = Object.values(gameImages).map((module: any) => module.default);
        const promptImagePaths = Object.values(promptImages).map((module: any) => module.default);
        const topicImagePaths = Object.values(topicImages).map((module: any) => module.default);

        setGameCardImages(gameImagePaths);
        setPromptCardImages(promptImagePaths);
        setTopicCardImages(topicImagePaths);
    }, []);

    const selectRandomImage = () => {
        const allImages = [...gameCardImages, ...promptCardImages, ...topicCardImages];
        const randomImage = allImages[Math.floor(Math.random() * allImages.length)];
        setSelectedImage(randomImage);
    };

    const selectRandomGameImage = () => {
        const randomImage = gameCardImages[Math.floor(Math.random() * gameCardImages.length)];
        setSelectedImage(randomImage);
    };

    const selectRandomPromptImage = () => {
        const randomImage = promptCardImages[Math.floor(Math.random() * promptCardImages.length)];
        setSelectedImage(randomImage);
    };

    const selectRandomTopicImage = () => {
        const randomImage = topicCardImages[Math.floor(Math.random() * topicCardImages.length)];
        setSelectedImage(randomImage);
    };

    return (
        <>
            <div className="flex flex-col items-center mb-4">
                <div className="flex gap-2  justify-center flex-wrap my-4 p-4 rounded-xl border-2">
                    <button onClick={selectRandomImage} className="py-2 px-3 bg-gradient-to-r from-orange-1 to-orange-2 text-white rounded-lg mr-2">Select Random Card</button>
                    <button onClick={selectRandomGameImage} className="py-2 px-3 bg-game-red text-white rounded-lg mr-2">Select Random Game Card</button>
                    <button onClick={selectRandomPromptImage} className="py-2 px-3 bg-prompt-teal text-white rounded-lg mr-2">Select Random Prompt Card</button>
                    <button onClick={selectRandomTopicImage} className="py-2 px-3 bg-topic-yellow text-white rounded-lg">Select Random Topic Card</button>
                </div>
                {selectedImage && <img src={selectedImage} className="flex justify-center w-auto mb-4" alt="Selected Card" />}
            </div>
            <SectionLayout sectionName="Instructions">
                <div className="grid grid-cols-1 gap-6 m-8 sm:grid-cols-4 2xl:grid-cols-8">
                    <img src={instructions} className="w-full" alt="Instructions" />
                    <img src={credits} className='w-full' alt='Credits' />
                </div>
            </SectionLayout>
            <SectionLayout sectionName="Game Cards">
                <div className="grid grid-cols-1 gap-6 m-8 sm:grid-cols-4 2xl:grid-cols-8">
                    {gameCardImages.map((src, index) => (
                        <img key={index} src={src} className="w-full" alt={`Game Card ${index + 1}`} />
                    ))}
                </div>
            </SectionLayout>
            <SectionLayout sectionName="Prompt Cards">
                <div className="grid grid-cols-1 gap-6 m-8 sm:grid-cols-4 2xl:grid-cols-8">
                    {promptCardImages.map((src, index) => (
                        <img key={index} src={src} className="w-full" alt={`Prompt Card ${index + 1}`} />
                    ))}
                </div>
            </SectionLayout>
            <SectionLayout sectionName="Topic Cards">
                <div className="grid grid-cols-1 gap-6 m-8 sm:grid-cols-4 2xl:grid-cols-8">
                    {topicCardImages.map((src, index) => (
                        <img key={index} src={src} className="w-full" alt={`Topic Card ${index + 1}`} />
                    ))}
                </div>
            </SectionLayout>
        </>
    );
};

export default Cards;