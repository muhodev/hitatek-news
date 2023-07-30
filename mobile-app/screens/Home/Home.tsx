import { ScrollView, StyleSheet, Text, View } from "react-native";
import Topbar from "../../components/Topbar";
import { FeaturedPost, OpinionTitle, TopPosts } from "./components/";
import { useFetch } from "../../hooks";
import { API_BASE_URL } from "../../constants";
import { Article, Author } from "../../types";
import { useMemo } from "react";

type HomeResponse = {
  featuredPost: Article;
  popularPosts: Article[];
  topPosts: Article[];
  latestPosts: Article[];
  pickedPosts: Article[];
};

const convertImageUrl = (key?: string): string => {
  if (!key) return "";
  return `https://hitatek-news.vercel.app/${key}`;
};

const AuthorModel = (payload: any): Author => {
  return {
    id: payload?.id || "",
    avatar:
      payload?.avatar && typeof payload?.avatar === "string"
        ? convertImageUrl(payload.avatar)
        : null,
    name: payload?.name || "",
  };
};

const ArticleModel = (payload: any): Article => {
  return {
    id: payload?.id,
    author: AuthorModel(payload?.author),
    createdAt: payload?.createdAt,
    excerpt: payload?.excerpt,
    slug: payload?.slug,
    thumbnail: convertImageUrl(payload?.thumbnail),
    title: payload?.title,
  };
};

export default function Home() {
  const { loading, error, data } = useFetch<HomeResponse>(
    `${API_BASE_URL}/v1/home`
  );

  const featuredPost = useMemo(() => {
    return ArticleModel(data?.featuredPost);
  }, [data]);

  const topPosts = useMemo(() => {
    const topPostsData =
      !!data?.topPosts && Array.isArray(data?.topPosts)
        ? data.topPosts.map((post) => ArticleModel(post))
        : [];

    return {
      mainPost:
        topPostsData.length >= 1
          ? topPostsData.slice(0, 1)[0]
          : ArticleModel({}),
      posts: topPostsData.slice(1),
    };
  }, [data]);

  return (
    <View>
      <Topbar />
      <ScrollView>
        <OpinionTitle />
        <View>
          {loading ? (
            <Text>Loading...</Text>
          ) : error ? (
            <Text>{error.message}</Text>
          ) : !data ? (
            <Text>No found any data</Text>
          ) : (
            <View>
              <TopPosts mainPost={topPosts.mainPost} posts={topPosts.posts} />
              <FeaturedPost {...featuredPost} />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
