const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

export async function fetchChatResponse(messages) {
    // Use the OpenAI-compatible endpoint on the router for better stability
    const response = await fetch(
        "/api-hf/v1/chat/completions",
        {
            headers: {
                Authorization: `Bearer ${HF_TOKEN}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                model: "mistralai/Mistral-7B-Instruct-v0.3",
                messages: messages.map(m => ({
                    role: m.role === 'bot' ? 'assistant' : 'user',
                    content: m.content
                })),
                max_tokens: 500,
            }),
        }
    );

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("HF Error:", errorData);
        throw new Error(errorData.error || "Failed to fetch chat response");
    }

    const result = await response.json();
    return result.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
}

export async function fetchImageResponse(prompt) {
    // Use FLUX.1-schnell as it's highly available and fast on the serverless API
    const response = await fetch(
        "/api-hf/hf-inference/models/black-forest-labs/FLUX.1-schnell",
        {
            headers: {
                Authorization: `Bearer ${HF_TOKEN}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ inputs: prompt }),
        }
    );

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("HF Image Error:", errorData);
        throw new Error(errorData.error || "Failed to generate image");
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
}
