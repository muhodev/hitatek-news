import { Author } from "@/components";
import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function PickedPosts({ posts }: { posts: Article[] }) {
  return (
    <div className="h-picked-posts">
      <h2 className="h-post--headline" style={{ paddingBottom: "12px" }}>
        {"EDITOR'S PICK"}
      </h2>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="h-picked-post">
            <div className="h-post__image">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={288}
                height={162}
              />
            </div>
            <div className="h-picked-post__content">
              <h3 className="h-post__title h-post__title--normal">
                <Link href={`/post/${post?.slug}`}>{post.title}</Link>
              </h3>
              <p className="h-post__excerpt h-post__excerpt--normal">
                {post.excerpt}
              </p>
              <Author avatar={post.author.avatar} name={post.author.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
