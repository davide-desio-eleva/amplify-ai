import { Avatar, Card } from "@aws-amplify/ui-react";
import { AIConversation } from '@aws-amplify/ui-react-ai';
import { useAIConversation } from './client';
import Markdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';

export default function App() {

    const [
        {
            data: { messages },
            isLoading,
        },
        handleSendMessage,
    ] = useAIConversation('chat');
    // 'chat' is based on the key for the conversation route in your schema.

    return (
            <AIConversation
                welcomeMessage={
                    <Card variation="outlined">
                        <div>Ciao! Sono il tuo assistente virtuale Eleva per i buoni propositi del 2025.</div>
                        <div>Se mi fornisci un argomento posso aiutarti a generare dei buoni propositi per il 2025.</div>
                        <div>Potrebbero essere seri, inerenti al lavoro o alla vita privata, ma anche ironici.</div>
                        <div>Ad esempio:</div>
                        <ul>
                            <li>non fare più di 3 call al giorno</li>
                            <li>non far salire il cane sul divano</li>
                            <li>scrivere un libro</li>
                            <li>venderlo</li>
                            <li>partecipare come speaker a un ted talk</li>
                            <li>avere più clienti cuoricino</li>
                            <li>imparare a ballare la polka</li>
                            <li>tornare a giocare a calcetto preservando i menischi</li>
                            <li>usare 🐙meno 🐙emoticon 🐙</li>
                            <li>comprare camicie che non siano a quadri</li>
                            <li>eliminare whatsapp web dalle 9 alle 18</li>
                            <li>fare sport con i colleghi il giorno dopo gli offsite</li>
                        </ul>
                    </Card>
                }
                messageRenderer={{
                    text: ({ text }) => (
                        <Markdown rehypePlugins={[rehypeHighlight]}>
                            {text}
                        </Markdown>
                    )
                }}
                avatars={{
                    user: {
                        avatar: <Avatar src="/images/user.jpg" />,
                        username: 'Tu', // Set the user's email as username
                    },
                    ai: {
                        avatar: <Avatar src="/images/ai.jpg" />,
                        username: "Eleva AI"
                    }
                }}
                messages={messages}
                isLoading={isLoading}
                handleSendMessage={handleSendMessage}
            />
    );
}
