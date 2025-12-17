import Image from "next/image";
import TopicMenu from "./components/TopicMenu";
import RecentPosts from "./components/RecentPosts";
import PostCard from "./components/PostCard";
import { getAllArtigos, getRecentArtigos, getTopicsWithCounts } from "../lib/artigos";

export const dynamic = "force-static";

export default async function HomePage() {
  const posts = getAllArtigos();
  const recent = getRecentArtigos(4);
  const counts = getTopicsWithCounts();

  const topics = [
    {
      id: "cores",
      label: "Cores",
      icon: "/images/iconecores.png",
      count: counts["Cores"] ?? 0,
      href: "/?topic=Cores#artigos",
    },
    {
      id: "layout",
      label: "Layout",
      icon: "/images/iconelayout.png",
      count: counts["Layout"] ?? 0,
      href: "/?topic=Layout#artigos",
    },
    {
      id: "tipografia",
      label: "Tipografia",
      icon: "/images/iconetipografia.png",
      count: counts["Tipografia"] ?? 0,
      href: "/?topic=Tipografia#artigos",
    },
  ];

  // se você já tem filtro por query, mantém; se não, deixa assim por enquanto
  const selectedTopic: string | undefined = undefined;

  return (
    <main className="container">
      {/* HERO (texto + home.png) */}
      <section className="hero">
        <div className="heroCol">
          <div className="heroLeft">
            <h1 className="heroTitle">Hello</h1>

            <p className="heroText">
              Sou a <strong>Lara</strong>, designer focada em <strong>UI</strong> e <strong>UX</strong>.
            </p>
            <p className="heroText">
              Trabalho com interfaces que priorizam hierarquia visual, legibilidade e decisões claras.
            </p>
            <p className="heroText">
              Aqui compartilho estudos e práticas sobre layout, tipografia e cor, com foco em interfaces funcionais e bem
              construídas.
            </p>
          </div>

          {/* hero1 SOLTA (fora do card do texto) */}
          <div className="heroExtras">
            <Image
              src="/images/hero1.png"
              alt=""
              width={900}
              height={450}
              priority
              quality={100}
              className="heroExtraImg"
            />
          </div>
        </div>

        <div className="heroImageWrap">
          <Image
            src="/images/home.png"
            alt="Ilustração"
            width={1200}
            height={1200}
            priority
            quality={100}
            className="heroImage"
          />
        </div>
      </section>

      {/* ASSUNTOS */}
      <section className="topics">
        <h2 className="sectionTitle" style={{ textAlign: "center", fontSize: 26 }}>
          Assuntos
        </h2>
        <TopicMenu topics={topics} selected={selectedTopic} />
      </section>

      {/* CONTEÚDO */}
      <section className="content" id="artigos">
        <aside className="sidebar">
          <RecentPosts posts={recent} />
        </aside>

        <div>
          <div className="feedHeader">
            <h2 className="sectionTitle" style={{ fontSize: 28 }}>
              Últimos artigos
            </h2>
          </div>

          <div className="postList">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
