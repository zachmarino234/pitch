export interface CardProps {
    cardTitle: string;
    cardType: 'GAME' | 'PROMPT' | 'TOPIC';
    players?: number;
    time?: string;
    content: string;
}