import { useState, useEffect } from 'react';

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
        <div>
            <div className="flex flex-col items-center mb-4">
                <div className="flex gap-2  justify-center flex-wrap my-4 p-4 rounded-xl border-2">
                    <button onClick={selectRandomImage} className="py-2 px-3 bg-gradient-to-r from-orange-1 to-orange-2 text-white rounded mr-2">Select Random Card</button>
                    <button onClick={selectRandomGameImage} className="py-2 px-3 bg-game-red text-white rounded mr-2">Select Random Game Card</button>
                    <button onClick={selectRandomPromptImage} className="py-2 px-3 bg-prompt-teal text-white rounded mr-2">Select Random Prompt Card</button>
                    <button onClick={selectRandomTopicImage} className="py-2 px-3 bg-topic-yellow text-white rounded">Select Random Topic Card</button>
                </div>
                {selectedImage && <img src={selectedImage} className="flex justify-center w-auto mb-4" alt="Selected Card" />}
            </div>
            <h2>Game Cards</h2>
            <div className="grid grid-cols-1 gap-5 m-5 sm:grid-cols-4 2xl:grid-cols-8">
                {gameCardImages.map((src, index) => (
                    <img key={index} src={src} className="w-full" alt={`Game Card ${index + 1}`} />
                ))}
            </div>
            <h2>Prompt Cards</h2>
            <div className="grid grid-cols-1 gap-5 m-5 sm:grid-cols-4 2xl:grid-cols-8">
                {promptCardImages.map((src, index) => (
                    <img key={index} src={src} className="w-full" alt={`Prompt Card ${index + 1}`} />
                ))}
            </div>
            <h2>Topic Cards</h2>
            <div className="grid grid-cols-1 gap-5 m-5 sm:grid-cols-4 2xl:grid-cols-8">
                {topicCardImages.map((src, index) => (
                    <img key={index} src={src} className="w-full" alt={`Topic Card ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Cards;