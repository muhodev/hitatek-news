import { Author } from "@/components";
import { Article } from "@/types";
import Image from "next/image";
import format from "date-fns/formatDistanceToNowStrict";
import isValid from "date-fns/isValid";
import Link from "next/link";

export default function LatestPosts({ posts }: { posts: Article[] }) {
  return (
    <div className="h-latest-posts">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={"h-post" + ((index + 1) % 3 === 0 ? " h-post__full" : "")}
          style={
            index > 0
              ? {
                  paddingTop: "24px",
                  marginTop: "24px",
                  borderTop: "1px solid var(--sky-40)",
                }
              : {}
          }
        >
          <div className="h-post__image">
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={984}
              height={400}
            />
          </div>
          <div className="h-post__content">
            <div>
              <time className="h-post__time">
                {isValid(new Date(post.createdAt)) &&
                  format(new Date(post.createdAt)) + " ago"}
              </time>
            </div>
            <h3 className="h-post__title h-post__title--normal">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="h-post__excerpt h-post__excerpt--normal">
              {post.excerpt}
            </p>
            <Author avatar={post.author.avatar} name={post.author.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
