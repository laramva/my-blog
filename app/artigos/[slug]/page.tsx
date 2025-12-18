import { notFound } from "next/navigation";
import Image from "next/image";
import artigos from "../../../data/artigos.json";

type Artigo = {
  slug: string;
  title: string;
  description: string;
  date: string;
  topic: string;
  cover: string;
  content: string[];
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ArtigoPage({ params }: PageProps) {
  const artigo = (artigos as Artigo[]).find(
    (a) => a.slug === params.slug
  );

  if (!artigo) {
    notFound();
  }

  return (
    <main className="articlePage">
      <article className="articleCard">
        <header className="articleHeader">
          <span className="articleTopic">{artigo.topic}</span>
          <span className="articleDate">{artigo.date}</span>
        </header>

        <h1 className="articleTitle">{artigo.title}</h1>
        <p className="articleDescription">{artigo.description}</p>

        <div className="articleImage">
          <Image
            src={artigo.cover}
            alt={artigo.title}
            width={900}
            height={560}
            quality={90}
            priority
          />
        </div>

        <div className="articleContent">
          {artigo.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
