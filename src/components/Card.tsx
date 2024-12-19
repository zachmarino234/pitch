import User from '../assets/user.svg'
import Clock from '../assets/clock.svg'
import { CardProps } from '../types/CardProps';
import '../styles/card.css'

// Generic Card component.
export const Card: React.FC<CardProps> = ({
    cardTitle,
    cardType,
    players,
    time,
    content
}) => {
    function renderCard() {
        switch (cardType) {
            case 'GAME':
                return {
                    
                }
            case 'PROMPT':
                return 'Prompt'
            case 'TOPIC':
                return 'Topic'
            default:
                return 'Unknown'
        }
    }
    return (
        <div className='container'>
            <div className='body'>
                <p className='cardTitle'>{cardTitle}</p>
                <div className='cardDetails'>
                    <div className='cardDetailsItem'>
                        <img src={User} alt='User icon' />
                        <p>{players}</p>
                    </div>
                    <div className='cardDetailsItem'>
                        <img src={Clock} alt='Clock icon' />
                        <p>{time}min</p>
                    </div>
                </div>
                <p className='cardText'>{content}</p>
            </div>
            <p className='cardType'>{cardType}</p>
        </div>
    );
}