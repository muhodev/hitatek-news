import { Author } from "@/components";
import { Article } from "@/types";
import Image from "next/image";

export default function PickedPosts({ posts }: { posts: Article[] }) {
  return (
    <div>
      <h2>EDITOR'S PICK</h2>
      <div>
        {posts.map((post) => (
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
