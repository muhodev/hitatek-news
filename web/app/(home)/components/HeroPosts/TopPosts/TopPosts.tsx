import { useMemo } from "react";
import Image from "next/image";
import { Author } from "@/components";
import { Article } from "@/types";

import "./style.css";
import Link from "next/link";

export default function TopPosts({ posts }: { posts: Article[] }) {
  const firstPost = useMemo(() => {
    return posts.slice(0, 1)?.[0];
  }, [posts]);

  const otherPosts = useMemo(() => {
    return posts.slice(1, 3);
  }, [posts]);

  return (
    <>
      <div className="h-top-posts__first">
        <div className="h-post__image">
          <Image
            src={firstPost?.thumbnail}
            width={648}
            height={364}
            alt={firstPost?.title}
          />
        </div>
        <div className="h-post__content">
          <h2 className="h-post__title h-post__title--big">
            <Link href={`/post/${firstPost?.slug}`}>{firstPost?.title}</Link>
          </h2>
          <p className="h-post__excerpt h-post__excerpt--big">
            {firstPost?.excerpt}
          </p>
          <Author
            avatar={firstPost?.author?.avatar}
            name={firstPost?.author?.name}
          />
        </div>
      </div>
      <div className="h-top-posts__others">
        {otherPosts.map((post, index) => (
          <div
            key={post.id}
            style={
              index > 0
                ? {
                    paddingTop: "24px",
                    marginTop: "24px",
                    borderTop: "1px solid var(--sky-40)",
                  }
                : {}
            }
            className="h-top-posts__other"
          >
            <div className="h-post__image">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={288}
                height={162}
              />
            </div>
            <div className="h-post__content">
              <h3 className="h-post__title">
                <Link href={`/post/${post?.slug}`}>{post.title}</Link>
              </h3>
              <p className="h-post__excerpt h-post__excerpt--small">
                {post.excerpt}
              </p>
              <Author avatar={post.author.avatar} name={post.author.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
