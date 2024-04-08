export async function sendMessage(message) {
    try {
        const requestBody = {
            contents: [{ parts: [{ text: message }] }]
        };

        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDtmY-f7bEnrSBHnvvbbrJ58nO9YwqbYuI', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch generated content');
        }

        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text !== undefined && text !== null) {
            console.log(text);
            return text;
        } else {
            throw new Error('Text is undefined or null');
        }
    } catch (error) {
        throw error;
    }
}
