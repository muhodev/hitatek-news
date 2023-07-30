import { StyleSheet, Text, View } from "react-native";
import Topbar from "../../components/Topbar";
import { OpinionTitle } from "./components/";
import { useFetch } from "../../hooks";
import { API_BASE_URL } from "../../constants";

type Author = {
  id: string;
  avatar: string | null;
  name: string;
};

type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: Author;
  thumbnail: string;
  createdAt: string;
};

type HomeResponse = {
  featuredPost: Article;
  popularPosts: Article[];
  topPosts: Article[];
  latestPosts: Article[];
  pickedPosts: Article[];
};

export default function Home() {
  const { loading, error, data } = useFetch<HomeResponse>(
    `${API_BASE_URL}/v1/home`
  );

  return (
    <View>
      <Topbar />
      <OpinionTitle />
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>{error.message}</Text>
        ) : !data ? (
          <Text>No found any data</Text>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
