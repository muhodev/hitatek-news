import { getHomeDataService } from "@/services";
import {
  OpinionTitle,
  FeaturedPost,
  HeroPosts,
  LatestPosts,
  PickedPosts,
} from "./components";
import { array } from "@/lib/array";
import "./style.css";

export const revalidate = 1;
export default async function Home() {
  const data = await getHomeDataService();

  return (
    <main>
      <OpinionTitle />
      <FeaturedPost
        thumbnail={data?.featuredPost?.thumbnail}
        author={data?.featuredPost?.author}
        slug={data?.featuredPost?.slug}
        title={data?.featuredPost?.title}
      />
      <HeroPosts
        topPosts={array(data?.topPosts)}
        popularPosts={array(data?.popularPosts)}
      />
      <div className="h-container h-posts__grid">
        <LatestPosts posts={array(data?.latestPosts)} />
        <PickedPosts posts={array(data?.pickedPosts)} />
      </div>
    </main>
  );
}
