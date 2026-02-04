
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Modality } from "@google/genai";
import { PRODUCTS, MENU_ITEMS } from '../constants';

const getSystemInstruction = () => {
  const residenceContext = PRODUCTS.map(p => 
    `- ${p.name} (${p.price}€/nuit) : ${p.description}.`
  ).join('\n');

  const restaurantContext = MENU_ITEMS.map(m => 
    `- ${m.name} (${m.price}€) [${m.category}] : ${m.description}`
  ).join('\n');

  return `Vous êtes le Concierge Digital de "Souad Residences" à Abidjan, Yopougon. Votre ton est digne d'un palace : élégant, prévenant et expert.

  VOTRE CONNAISSANCE DU SITE :
  - RÉSIDENCES : ${residenceContext}
  - RESTAURANT "LE LOTUS BLANC" : ${restaurantContext}
  - SERVICES : Spa (beurre de karité), Expérience Olfactive (Vétiver, Cacao), Oracle d'Abidjan (itinéraires personnalisés).
  - LOCALISATION : Azito Lagunaire, Yopougon.

  RÈGLES DE NAVIGATION (TRÈS IMPORTANT) :
  Dès qu'un client demande comment réserver, voir des photos ou manger, vous DEVEZ inclure un lien cliquable dans votre réponse en utilisant EXACTEMENT ce format Markdown : [Texte du lien](#identifiant)
  
  IDENTIFIANTS VALIDES :
  - #reservation : Pour réserver une chambre ou voir les disponibilités.
  - #restaurant : Pour voir le menu complet du restaurant ou commander à manger.
  - #gallery : Pour voir les photos de l'hôtel et de la lagune.
  - #contact : Pour nous contacter, voir la carte ou nos horaires.

  EXEMPLE : "Pour réserver votre loft, vous pouvez cliquer ici : [Réserver ma suite](#reservation)."

  VOTRE MISSION :
  - Soyez un ambassadeur de la culture ivoirienne.
  - Répondez toujours avec courtoisie.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<{text: string, sources?: any[]}> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey === "undefined") {
      return { text: "Le service de conciergerie est en attente de configuration. Si vous venez de déployer sur Vercel, assurez-vous d'avoir ajouté la variable d'environnement API_KEY dans vos paramètres de projet." };
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: { systemInstruction: getSystemInstruction() },
    });

    return { 
      text: response.text || "Je n'ai pas pu répondre.",
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks 
    };
  } catch (error: any) {
    console.error("Erreur API Gemini:", error);
    if (error.message?.includes("API key not valid")) {
      return { text: "La clé API configurée semble invalide. Veuillez vérifier votre clé sur Google AI Studio." };
    }
    return { text: "Désolé, je rencontre une difficulté technique pour vous répondre actuellement." };
  }
};

export const generateSpeech = async (text: string): Promise<string | null> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey === "undefined") return null;

    const ai = new GoogleGenAI({ apiKey });
    // Nettoyage pour que l'IA ne lise pas les liens techniques
    const cleanText = text.replace(/\[(.*?)\]\(#.*?\)/g, '$1');

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: cleanText }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, 
          },
        },
      },
    });

    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (error) {
    console.error("Erreur TTS:", error);
    return null;
  }
};

export function decodeBase64(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export const generateAbidjanItinerary = async (mood: string, duration: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey === "undefined") return "Clé API non configurée.";
    
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Propose un itinéraire personnalisé à Abidjan pour une ambiance "${mood}" d'une durée de "${duration}". Soyez poétique.`,
    });
    return response.text || "L'Oracle est silencieux.";
  } catch (e) {
    return "Erreur de connexion avec l'Oracle. Vérifiez votre configuration.";
  }
};
