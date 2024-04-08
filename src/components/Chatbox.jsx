import './Chatbox.css';
import { useEffect, useState } from 'react';
import { sendMessage } from '../services/GeminiSevice';

export default function Chatbox() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSend = async () => {
        try {
            const data = await sendMessage(input);
            setResponse(data);
        } catch (error) {
            console.error('Error fetching generated content:', error.message);
        }
    };

    useEffect(() => {
        const initialMessage = "Welcome to the chat! Start typing your message...";
        setResponse(initialMessage);
    }, []);

    return (
        <div className="Chatbox">
            <div className="response-area">
                <p>{response}</p>
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}
