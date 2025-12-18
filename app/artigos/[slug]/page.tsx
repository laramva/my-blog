import { notFound } from "next/navigation";
import Image from "next/image";
import artigos from "@/data/artigos.json";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ArtigoPage({ params }: PageProps) {
  const artigo = artigos.find((a) => a.slug === params.slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main style={{ padding: "48px 0" }}>
      <article className="articlePage">
        {/* HEADER */}
        <header className="articleHeader">
          <span className="articleTopic">{artigo.topic}</span>
          <h1>{artigo.title}</h1>
          <p className="articleDescription">{artigo.description}</p>
          <span className="articleDate">{artigo.date}</span>
        </header>

        {/* IMAGEM */}
        {artigo.cover && (
          <div className="articleCover">
            <Image
              src={artigo.cover}
              alt={artigo.title}
              width={900}
              height={520}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}

        {/* CONTEÚDO */}
        <section className="articleContent">
          {artigo.content.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      </article>
    </main>
  );
}
