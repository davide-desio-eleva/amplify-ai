import { useEffect, useState } from 'react';

const Loader = ({ cringeLevel }: { cringeLevel: number }) => {
    const [messageIndex, setMessageIndex] = useState(0);

    // Define phrases for each range
    const messages = {
        low: [
            'Stiamo generando idee raffinate e sobrie. 🍸',
            'La creatività scorre come un buon vino. 🍷',
            'Eleganza e buon gusto, stiamo lavorando sui tuoi nuovi propositi! 🎩',
            'Le idee sofisticate stanno arrivando... attendi con stile. 🕴️',
        ],
        medium: [
            'Attenzione: potrebbero arrivare propositi con un pizzico di ironia. 😉',
            'Siamo a metà strada tra il serio e il faceto. 😏',
            'L’ironia è pronta a far capolino. Aspetta e vedrai. 😜',
            'Propositi semiseri in arrivo... resta sintonizzato! 📻',
        ],
        high: [
            'Prepara i meme, questi buoni propositi sono in arrivo! 🐙',
            'Le idee stanno diventando sempre più spassose. 🎉',
            'Cringe mode attivato! Sta per diventare divertente. 🤡',
            'Aspetta un attimo... sta arrivando qualcosa di epico! 🚴‍♂️',
        ],
        superHigh: [
            'Stiamo raggiungendo il livello SUPER CRINGE... tieniti forte! 🚀',
            'L’apice del cringe sta per arrivare! Preparati. 🛸',
            'Propositi così cringy che potresti non dimenticarli mai. 🤯',
            'Il massimo livello di follia sta per essere raggiunto. 🌋',
        ],
    };

    // Select the appropriate set of messages based on cringeLevel
    let selectedMessages = [];
    if (cringeLevel <= 25) {
        selectedMessages = messages.low;
    } else if (cringeLevel <= 50) {
        selectedMessages = messages.medium;
    } else if (cringeLevel <= 75) {
        selectedMessages = messages.high;
    } else {
        selectedMessages = messages.superHigh;
    }

    // Update the message index every 30 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % selectedMessages.length);
        }, 1500);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [selectedMessages.length]);

    return (
        <div className="spinner-container">
            <div className="spinner-title">{selectedMessages[messageIndex]}</div>
            <div className="spinner-subtitle">Stiamo generando i tuoi buoni propositi...</div>
            <div className="spinner">
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
