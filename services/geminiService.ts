import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are UcreationAI, an elite hardware diagnostic specialist for Ucreationtech pro. 
You specialize in laptop repairs for high-end machines (like Razer, Alienware, ASUS ROG).
Your tone is professional, technical, yet helpful.
When a user describes a laptop problem, you should:
1. Ask clarifying questions if needed.
2. Provide a likely diagnosis.
3. Suggest a potential repair service (Display Replacement, Thermal Repasting, Battery, or Logic Board).
4. Give a rough estimate based on the hardware tier.
Keep responses concise and formatted with markdown.
`;

export const getDiagnosticResponse = async (history: ChatMessage[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having trouble analyzing the issue. Please bring your device into the lab.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to UcreationAI neural link. Please check your connection.";
  }
};