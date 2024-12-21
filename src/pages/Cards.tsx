import { useState, useEffect } from 'react';

export const Cards = () => {
    const [gameCardImages, setGameCardImages] = useState<string[]>([]);
    const [promptCardImages, setPromptCardImages] = useState<string[]>([]);
    const [topicCardImages, setTopicCardImages] = useState<string[]>([]);

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

    return (
        <div>
            <h1>Cards</h1>
            <h2>Game Cards</h2>
            <div className="grid grid-cols-1 gap-2 m-2 sm:grid-cols-4 2xl:grid-cols-8">
                {gameCardImages.map((src, index) => (
                    <img key={index} src={src} className="w-full" alt={`Game Card ${index + 1}`} />
                ))}
            </div>
            <h2>Prompt Cards</h2>
            <div className="grid grid-cols-1 gap-2 m-2 sm:grid-cols-4 2xl:grid-cols-8">
                {promptCardImages.map((src, index) => (
                    <img key={index} src={src} className="w-full" alt={`Prompt Card ${index + 1}`} />
                ))}
            </div>
            <h2>Topic Cards</h2>
            <div className="grid grid-cols-1 gap-2 m-2 sm:grid-cols-4 2xl:grid-cols-8">
                {topicCardImages.map((src, index) => (
                    <img key={index} src={src} className="w-full" alt={`Topic Card ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Cards;