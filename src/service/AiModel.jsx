import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenAI({
  apiKey,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const history = [
  {
    role: "user",
    parts: [
      {
        text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url and take correct Img URL from google, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.`,
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: `YOUR EXISTING LAS VEGAS JSON RESPONSE HERE`,
      },
    ],
  },
];

export const chatSession = {
  sendMessage: async (prompt) => {
    return await genAI.models.generateContent({
      model: "gemini-3.5-flash-lite",

      contents: [
        ...history,

        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],

      config: generationConfig,
    });
  },
};
