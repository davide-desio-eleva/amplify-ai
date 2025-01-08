import {Card} from "@aws-amplify/ui-react";
import {useState} from "react";
import {client} from "./client";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import {TextAreaField} from "@aws-amplify/ui-react";

export default function App() {

    const [controlsVisible, setControlsVisible] = useState(true);
    const [postVisible, setPostVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [chatLog, setChatLog] = useState('');
    const [cringeLevel, setCringeLevel] = useState(50);
    const [argument, setArgument] = useState('');

    const handleRangeChange = (event:any) => {
        setCringeLevel(event.target.value);
    };

    const handleArgumentChange = (event:any) => {
        setArgument(event.target.value);
    };

    const handleClick = async () => {
        console.log("Click");
        setControlsVisible(false)
        setLoading(true);

        try {
            // 1. Create a conversation
            const { data: chat } = await client.conversations.chat.create();

            if (chat) {
                // 2. Subscribe to assistant responses
                chat.onStreamEvent({
                    next: (event) => {
                        // handle assistant response stream events
                        if(event.text){
                            console.log("Acquiring text: "+event.text);
                            setChatLog(prev => `${prev}${event.text}`);
                        }
                        if(event.contentBlockDoneAtIndex){
                            setPostVisible(true);
                            setLoading(false);
                        }
                    },
                    error: (error) => {
                        // handle errors
                        console.error(error);
                        setControlsVisible(true);
                        setLoading(false);
                    },
                });

                // 3. Send a message to the conversation
                await chat.sendMessage("Utilizza l'argomento "+argument+" ed un livello di cringe pari a "+cringeLevel +" su 100");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <>
            <Header/>

            { loading && <Card><Loader cringeLevel={cringeLevel} /></Card> }

            { controlsVisible && (
                <div id="controls">
                    <Card variation="outlined">
                        <div>
                            Ciao! Sono il tuo assistente virtuale Eleva per i buoni propositi del 2025:
                            forniscimi un argomento e io farò il resto con un po' di magia.
                            Ad esempio:
                        </div>
                        <ul style={{fontSize:"11px"}}>
                            <li>non fare più di 3 call al giorno</li>
                            <li>non far salire il cane sul divano</li>
                            <li>scrivere un libro</li>
                            <li>partecipare come speaker a un ted talk</li>
                            <li>imparare a ballare la polka</li>
                            <li>tornare a giocare a calcetto preservando i menischi</li>
                            <li>usare 🐙meno 🐙 emoticon 🐙</li>
                            <li>comprare camicie che non siano a quadri</li>
                            <li>eliminare whatsapp web dalle 9 alle 18</li>
                            <li>fare sport con i colleghi il giorno dopo gli offsite</li>
                        </ul>
                        <div>Scrivi il tuo argomento qui sotto:</div>
                        <div className="argument-container">
                            <TextAreaField value={argument} onChange={handleArgumentChange}></TextAreaField>
                        </div>
                    </Card>

                    <div className="range-container">
                        <label>Cringe Meter: {cringeLevel}</label>
                        <input
                            id="cringeRange"
                            type="range"
                            min="0"
                            max="100"
                            value={cringeLevel}
                            onChange={handleRangeChange}
                        />
                        <div>
                            <span>No Cringe</span>
                            <span>Super-Cringe</span>
                        </div>
                    </div>
                    <button id="generate" onClick={handleClick}>Genera i tuoi nuovi propositi</button>
                </div>
            )}

            { postVisible && (
                <Post chatLog={chatLog}/>
            )}

            <Footer/>
        </>
    );
}
