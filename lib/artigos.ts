import artigosJson from "../data/artigos.json";

export type Artigo = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  topic: "Layout" | "Cores" | "Tipografia" | string;
  cover: string; // ex: "/images/contraste.png"
  tags?: string[];
  content: string[];
};

const artigos = artigosJson as Artigo[];

export function getAllArtigos() {
  return artigos;
}

export function getArtigoBySlug(slug: string) {
  return artigos.find((a) => a.slug === slug);
}

export function getRecentArtigos(limit = 4) {
  // ordena por data desc
  return [...artigos]
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, limit);
}

export function getTopicsWithCounts() {
  const counts: Record<string, number> = {};
  for (const a of artigos) counts[a.topic] = (counts[a.topic] || 0) + 1;
  return counts;
}
