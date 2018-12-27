import { apiKey } from "./env.js";

const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export { apiKey, topHeadlinesUrl };
