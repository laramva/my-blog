import { notFound } from "next/navigation";
import Image from "next/image";
import artigosJson from "../../../data/artigos.json";

type Artigo = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  topic: string;
  cover: string;
  tags: string[];
  content: string[];
};

export const dynamicParams = false;

export function generateStaticParams() {
  const artigos = artigosJson as Artigo[];
  return artigos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artigos = artigosJson as Artigo[];
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) return { title: "Artigo não encontrado" };

  return {
    title: artigo.title,
    description: artigo.description,
  };
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artigos = artigosJson as Artigo[];
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) return notFound();

  return (
    <main className="container">
      <section className="articleLayout">
        {/* CONTEÚDO */}
        <div className="articleMain">
          <div className="articleTop">
            <span className="badge">{artigo.topic}</span>
            <span className="meta">{artigo.date}</span>
          </div>

          <h1 className="articleTitle">{artigo.title}</h1>
          <p className="articleDesc">{artigo.description}</p>

          <div className="articleContent">
            {artigo.content.map((p, i) => (
              <p key={`${artigo.slug}-p-${i}`}>{p}</p>
            ))}
          </div>
        </div>

        {/* IMAGEM LATERAL */}
        <aside className="articleSide">
          <div className="articleImageFrame">
            <Image
              src={artigo.cover}
              alt={artigo.title}
              width={1200}          // 👈 reduz request real
              height={1200}
              quality={100}
              priority
              sizes="(max-width: 980px) 92vw, 420px" // 👈 limite visual
              className="articleImage"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
