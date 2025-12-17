import Link from "next/link";
import Image from "next/image";
import type { Artigo } from "../../lib/artigos";

export default function PostCard({ post }: { post: Artigo }) {
  return (
    <article className="postCard">
      <div className="postCover">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 980px) 100vw, 520px"
          quality={100}
          priority={false}
          className="postCoverImg"
        />
      </div>

      <div>
        <div className="postTop">
          <span className="badge">{post.topic}</span>
          <span className="meta">{post.date}</span>
        </div>

        <h3 className="postTitle">{post.title}</h3>
        <p className="postDesc">{post.description}</p>

        {/* ✅ LINK CERTO */}
        <Link href={`/artigos/${post.slug}`} className="readMore">
          Ler artigo →
        </Link>
      </div>
    </article>
  );
}
