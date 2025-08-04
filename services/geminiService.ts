import { GoogleGenAI, Type } from "@google/genai";
import type { Product } from '../types';

// The API key must be provided as an environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface AiResponse {
  reply: string;
  recommendations: {
    productId: string;
    reason: string;
  }[];
}

export const askAiAssistant = async (query: string, products: Product[]): Promise<AiResponse> => {
  const model = "gemini-2.5-flash";
  
  const productInfoForPrompt = products.map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      description: p.description,
      specs: p.specs
  }));

  // System instruction defines ONLY the AI's persona.
  const systemInstruction = `You are "Pulse", a friendly and knowledgeable AI assistant for AutoPulse RC, an e-commerce store specializing in high-performance RC drift cars. Your goal is to help users find the perfect car based on their needs. Be enthusiastic and use drifting-related slang where appropriate (e.g., "get sideways", "king of the corners", "ace the apex").`;

  // The 'contents' will hold the task, the dynamic data (products), and the user's query.
  const contents = {
    parts: [
      {
        text: `Your task is to analyze the user's query against the list of available products and provide a helpful response.

Your response MUST be in the structured JSON format defined by the response schema.
- In the 'reply' field, provide a friendly, conversational text answer to the user's query.
- In the 'recommendations' field, list the product IDs of the cars that best match the query. For each recommendation, provide a brief, compelling 'reason'.
- If no products are a good match for the query, say so in the 'reply' and leave the 'recommendations' array empty.
- If the user asks a general question not related to products, provide a helpful answer in the 'reply' and leave 'recommendations' empty.

Here is the list of available products:
${JSON.stringify(productInfoForPrompt, null, 2)}

Please answer the following user query:
"${query}"`
      }
    ]
  };

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: contents,
        config: {
            systemInstruction: systemInstruction,
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    reply: {
                        type: Type.STRING,
                        description: "A friendly, conversational response to the user's query."
                    },
                    recommendations: {
                        type: Type.ARRAY,
                        description: "A list of recommended product IDs and reasons.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                productId: {
                                    type: Type.STRING,
                                    description: "The unique ID of the recommended product."
                                },
                                reason: {
                                    type: Type.STRING,
                                    description: "A short, compelling reason for the recommendation."
                                }
                            },
                            required: ["productId", "reason"]
                        }
                    }
                },
                required: ["reply", "recommendations"]
            }
        },
    });
    
    // The response.text is a string, we need to parse it into JSON
    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as AiResponse;

  } catch (error) {
    console.error("Gemini API call failed:", error);
    // Graceful fallback
    return {
      reply: "Oops! I hit a patch of oil and spun out. I couldn't process that request. Please try rephrasing or ask something else.",
      recommendations: [],
    };
  }
};