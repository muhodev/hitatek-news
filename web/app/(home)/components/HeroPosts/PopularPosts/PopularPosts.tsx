import { Author } from "@/components";
import { Article } from "@/types";
import "./style.css";

export default function PopularPosts({ posts }: { posts: Article[] }) {
  return (
    <div className="h-popular-posts">
      <h3 className="h-post--headline">Popular</h3>
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="h-popular__content"
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
          <div className="h-popular__count">{index + 1}</div>
          <div className="h-popular__right">
            <h3 className="h-popular__title">{post.title}</h3>
            <Author avatar="" name={post.author?.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
