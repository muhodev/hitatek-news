import { getHomeDataService } from "@/services";
import {
  OpinionTitle,
  FeaturedPost,
  PopularPosts,
  TopPosts,
  LatestPosts,
  PickedPosts,
} from "./components";
import { array } from "@/lib/array";

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
      <div>
        <TopPosts posts={array(data?.topPosts)} />
        <PopularPosts posts={array(data?.popularPosts)} />
      </div>
      <div>
        <LatestPosts posts={array(data?.latestPosts)} />
        <PickedPosts posts={array(data?.pickedPosts)} />
      </div>
    </main>
  );
}
