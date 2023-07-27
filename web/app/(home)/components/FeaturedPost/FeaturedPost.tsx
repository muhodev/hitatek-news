import type { Article } from "@/types";
import "./style.css";
import { Author } from "@/components";
import Link from "next/link";

export default function FeaturedPost({
  thumbnail,
  title,
  author,
  slug,
}: Pick<Article, "title" | "slug" | "thumbnail" | "author">) {
  return (
    <section
      style={{ backgroundImage: `url("${thumbnail}")` }}
      className="h-featured-post__section"
    >
      <div className="h-feature-post__content">
        <h2 className="h-feature-post__title">
          <Link href={`/post/${slug}`}>{title}</Link>
        </h2>
        <Author avatar={author.avatar} name={author.name} />
      </div>
    </section>
  );
}
