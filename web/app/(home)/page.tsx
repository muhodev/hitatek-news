import { getHomeDataService } from "@/services";
import { OpinionTitle, FeaturedPost } from "./components";

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
    </main>
  );
}
