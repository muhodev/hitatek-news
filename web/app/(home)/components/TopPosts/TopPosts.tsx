import { Author } from "@/components";
import { Article } from "@/types";
import Image from "next/image";
import { useMemo } from "react";

export default function TopPosts({ posts }: { posts: Article[] }) {
  const firstPost = useMemo(() => {
    return posts.slice(0, 1)?.[0];
  }, [posts]);

  const otherPosts = useMemo(() => {
    return posts.slice(1, 3);
  }, [posts]);

  return (
    <div>
      <div>
        <div>
          <Image
            src={firstPost?.thumbnail}
            width={648}
            height={364}
            alt={firstPost?.title}
          />
        </div>
        <div>
          <h2>{firstPost?.title}</h2>
          <p>{firstPost?.excerpt}</p>
          <Author
            avatar={firstPost?.author?.avatar}
            name={firstPost?.author?.name}
          />
        </div>
      </div>
      <div>
        {otherPosts.map((post) => (
          <div key={post.id}>
            <div>
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={288}
                height={162}
              />
            </div>
            <div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Author avatar={post.author.avatar} name={post.author.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
