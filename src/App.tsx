import React, { useState } from "react";
import {Input} from "@aws-amplify/ui-react";
import { client } from "./client";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { TextAreaField } from "@aws-amplify/ui-react";

export default function App() {
    const [controlsVisible, setControlsVisible] = useState(true);
    const [loading, setLoading] = useState(false);
    const [chatLog, setChatLog] = useState('');
    const [cringeLevel, setCringeLevel] = useState(50);
    const [argument, setArgument] = useState('');
    const [userName, setUserName] = useState('Tu'); // User name state
    const [userTitle, setUserTitle] = useState('Il tuo titolo di lavoro'); // User title state
    const [postOpacity, setPostOpacity] = useState(0); // Opacity state
    const currentYear = new Date().getFullYear();

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setCringeLevel(value);
    };

    const handleArgumentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setArgument(event.target.value);
    };

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleUserTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserTitle(event.target.value);
    };

    const handleBack = async () => {
        setPostOpacity(0);
        setControlsVisible(true);
        setLoading(false);
        setChatLog('')
    }

    const handleClick = async () => {
        console.log("Click");
        setControlsVisible(false);
        setLoading(true);

        try {
            // 1. Create a conversation
            const { data: chat } = await client.conversations.chat.create();

            if (chat) {
                // 2. Subscribe to assistant responses
                chat.onStreamEvent({
                    next: (event) => {
                        // Handle assistant response stream events
                        if (event.text) {
                            console.log("Acquiring text: " + event.text);
                            setChatLog((prev) => `${prev}${event.text}`);

                            // Animate opacity of the Post component
                            let opacity = 0;
                            const interval = setInterval(() => {
                                opacity += 0.1;
                                if (opacity >= 1) {
                                    clearInterval(interval);
                                    opacity = 1;
                                }
                                setPostOpacity(opacity);
                            }, 50); // Update every 50ms

                        }
                        if (event.contentBlockDoneAtIndex) {
                            setLoading(false);
                        }
                    },
                    error: (error) => {
                        // Handle errors
                        console.error(error);
                        setControlsVisible(true);
                        setLoading(false);
                    },
                });

                // 3. Send a message to the conversation
                await chat.sendMessage(
                    `Argomento: "${argument}". Cringe level: ${cringeLevel} su 100`
                );
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <>
            <Header />

            {loading && (
                <Loader cringeLevel={cringeLevel} />
            )}

            {controlsVisible && (
                <div id="controls">
                    <div>
                        <div className="hint">
                            Ciao! Sono il generatore di buoni propositi Eleva, il tuo assistente virtuale pronto a rendere i tuoi buoni propositi del {currentYear} ancora più straordinari!
                            Dimmi un argomento, e con un pizzico di magia e tanta ispirazione, farò il resto. Ad esempio:
                        </div>
                        <div className="bullets">
                            <button onClick={() => setArgument("non fare più di 3 call al giorno")} >non fare più di 3 call al giorno</button>
                            <button onClick={() => setArgument("non far salire il cane sul divanoo")} >non far salire il cane sul divano</button>
                            <button onClick={() => setArgument("scrivere un libro")} >scrivere un libro</button>
                            <button onClick={() => setArgument("partecipare come speaker a un ted talk")} >partecipare come speaker a un ted talk</button>
                            <button onClick={() => setArgument("imparare a ballare la polka")}>imparare a ballare la polka</button>
                            <button onClick={() => setArgument("tornare a giocare a calcetto preservando i menischi")}>tornare a giocare a calcetto preservando i menischi</button>
                            <button onClick={() => setArgument("usare 🐙meno 🐙 emoticon 🐙")}>usare 🐙meno 🐙 emoticon 🐙</button>
                            <button onClick={() => setArgument("comprare camicie che non siano a quadri")} >comprare camicie che non siano a quadri</button>
                            <button onClick={() => setArgument("eliminare whatsapp web dalle 9 alle 18")} >eliminare whatsapp web dalle 9 alle 18</button>
                        </div>
                        <div className="argument-container">
                            <label>Il tuo nome:</label>
                            <Input value={userName} onChange={handleUserNameChange}></Input>
                            <label>Il tuo titolo di lavoro:</label>
                            <Input value={userTitle} onChange={handleUserTitleChange}></Input>
                            <TextAreaField
                                value={argument}
                                onChange={handleArgumentChange}
                                label="Scrivi il tuo argomento qui sotto:"
                            />
                        </div>
                    </div>

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
                    <button className="pushable" id="generate" onClick={handleClick}>
                      <span className="front">
                        Genera i tuoi nuovi propositi 🪄
                      </span>
                    </button>
                </div>
            )}

            { postOpacity>0 &&
                <>
                    <div style={{ opacity: postOpacity, transition: "opacity 0.5s ease-in-out" }}>
                        <Post chatLog={chatLog} userName={userName} userTitle={userTitle} />
                    </div>
                    <button className="pushable" id="back" onClick={handleBack}>
                      <span className="front">
                        Genera di nuovo 🪄
                      </span>
                    </button>
                </>
            }

            <Footer />
        </>
    );
}
