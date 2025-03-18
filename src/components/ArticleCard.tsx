const cardTypeColors: { [key: string]: string } = {
    game: 'bg-game-red',
    prompt: 'bg-prompt-teal',
    topic: 'bg-topic-yellow',
    // Add more card types and their corresponding colors here
};

export const ArticleCard = ({
    headline,
    author,
    cardsUsed,
    cardType,
    link
}: {
    headline: string;
    author: string;
    cardsUsed: string[];
    cardType: string[];
    link: string;
}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 p-4 mb-2 rounded-xl border-2 no-underline text-black hover:text-inherit">
            <h2 className="font-richmond text-2xl font-semibold">{headline}</h2>
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-baseline">
                <span>{author}</span>
                <div className="flex gap-2 items-start">

                    {cardsUsed.map((card, index) => (
                        <span key={index} className={` text-white px-2 py-1 rounded ${cardTypeColors[cardType[index]] || 'bg-gray-200'}`}>
                            {card}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}