import { Author } from "@/components";
import { Article } from "@/types";

export default function PopularPosts({ posts }: { posts: Article[] }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id}>
          <div>{index + 1}</div>
          <div>
            <h3>{post.title}</h3>
            <Author avatar="" name={post.author?.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
