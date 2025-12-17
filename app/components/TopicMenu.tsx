import Image from "next/image";
import Link from "next/link";

export type TopicMenuItem = {
  id: string;       // "cores" | "layout" | "tipografia"
  label: string;    // "Cores" | ...
  href: string;     // "/?topic=Cores#artigos" etc
  count: number;    // quantidade
  icon: string;     // "/images/iconecores.png" etc
};

export default function TopicMenu({
  topics,
  selected,
}: {
  topics: TopicMenuItem[];
  selected?: string;
}) {
  return (
    <div className="topicsRow">
      {topics.map((t) => {
        const isActive =
          selected?.toLowerCase() === t.label.toLowerCase() ||
          selected?.toLowerCase() === t.id.toLowerCase();

        return (
          <Link
            key={t.id}
            href={t.href}
            className={`topicItem ${isActive ? "topicItemActive" : ""}`}
          >
            <span className="topicIconWrap" aria-hidden="true">
              <Image
                src={t.icon}
                alt=""
                fill
                sizes="(max-width: 980px) 96px, 120px"
                quality={100}
                className="topicIconImg"
                priority
              />
              <span className="topicCount">{t.count}</span>
            </span>

            <span className="topicLabel">{t.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
