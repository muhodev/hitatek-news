import {
  OpinionTitle,
  FeaturedPost,
  HeroPosts,
  LatestPosts,
  PickedPosts,
} from "./components";
import { array } from "@/lib/array";
import "./style.css";
import { getHome } from "@/lib/api/getHome";

export const revalidate = 1;
export default async function Home() {
  const data: any = await getHome();

  return (
    <main>
      <div className="h-top__grid">
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
      </div>

      <div className="h-container h-posts__grid">
        <LatestPosts posts={array(data?.latestPosts)} />
        <PickedPosts posts={array(data?.pickedPosts)} />
      </div>
    </main>
  );
}
