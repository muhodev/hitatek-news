import { Article } from "@/types";
import PopularPosts from "./PopularPosts";
import TopPosts from "./TopPosts";
import { array } from "@/lib/array";

import "./style.css";

export default function HeroPosts({
  topPosts,
  popularPosts,
}: {
  topPosts: Article[];
  popularPosts: Article[];
}) {
  return (
    <div className="h-container h-top-separator h-bottom-separator">
      <div className="h-hero-posts__grid">
        <TopPosts posts={array(topPosts)} />
        <PopularPosts posts={array(popularPosts)} />
      </div>
    </div>
  );
}
