import { Image, StyleSheet, Text, View } from "react-native";
import { Article } from "../../../../types";
import { Author } from "../../../../components";

export default function TopPosts({
  mainPost,
  posts,
}: {
  mainPost: Article;
  posts: Article[];
}) {
  console.log({ author: mainPost.author });
  return (
    <View>
      <View>
        <Image style={styles.thumbnail} source={{ uri: mainPost.thumbnail }} />
        <View style={styles.mainPostContainer}>
          <Text style={styles.mainPostTitle}>{mainPost.title}</Text>
          <Text style={styles.mainPostExcerpt}>{mainPost.excerpt}</Text>
          <Author {...mainPost.author} />
        </View>
      </View>
      {posts.map((post) => {
        return (
          <View key={post.id}>
            <Image style={styles.thumbnail} source={{ uri: post.thumbnail }} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 240,
  },
  mainPostContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  mainPostTitle: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700",
  },
  mainPostExcerpt: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 16,
  },
});
