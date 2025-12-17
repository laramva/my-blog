import Link from "next/link";
import Image from "next/image";
import type { Artigo } from "../../lib/artigos";

export default function RecentPosts({ posts }: { posts: Artigo[] }) {
  return (
    <div className="panel">
      <h3 className="panelTitle">Recent Posts</h3>

      <ul className="recentList">
        {posts.map((p) => (
          <li key={p.slug} className="recentItem">
            <Link href={`/artigos/${p.slug}`} className="recentLink">
              <div className="thumb">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  // ✅ pede maior pra telas grandes (e retina)
                  sizes="(max-width: 980px) 120px, 200px"
                  quality={100}
                  className="thumbImg"
                />
              </div>

              <div>
                <span className="recentTitle">{p.title}</span>
                <span className="recentMeta">
                  {p.date} • {p.topic}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
