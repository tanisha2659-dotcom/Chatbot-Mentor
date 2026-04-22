import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY || '';

// Initialize the client only if the API key is present
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `You are an empathetic, AI-driven life companion and mentor. 
Your primary goal is to provide emotional support, help users organize their lives, and manage long-term goals. 
Respond with a calm, nurturing, and empathetic tone. 
Always acknowledge the user's emotional state before offering practical advice.
Keep your responses concise but meaningful.`;

export const generateMentorResponse = async (prompt: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  if (!ai) {
    // Robust mock fallback if API key is not present
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    
    const mockResponses = [
      "I hear you. That sounds completely valid.",
      "Take a deep breath. It's okay to feel this way. How can we make today a little easier?",
      "I'm here for you, no matter what. You're doing your best, and that's enough.",
      "That makes a lot of sense. Want to explore that feeling a bit more?",
      "It takes courage to express that. I'm listening."
    ];
    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    
    return `(Mock Mode) ${randomResponse}`;
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    // If there is history, we could potentially pass it, but for simplicity in this setup, 
    // we'll just send the prompt. The @google/genai SDK supports passing history when creating a chat.
    // For now we'll just send the current message.
    
    const response = await chat.sendMessage({
      message: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};
