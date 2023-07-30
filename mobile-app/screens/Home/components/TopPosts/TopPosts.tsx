import { Image, StyleSheet, Text, View } from "react-native";
import { Article } from "../../../../types";
import { Author } from "../../../../components";
import { themeConfig } from "../../../../constants";

export default function TopPosts({
  mainPost,
  posts,
}: {
  mainPost: Article;
  posts: Article[];
}) {
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
      <View style={styles.otherPostsContainer}>
        {posts.map((post, index) => {
          return (
            <View
              key={post.id}
              style={index > 0 ? styles.otherPostSeparator : null}
            >
              <Image
                style={styles.otherPostThumb}
                source={{ uri: post.thumbnail }}
              />
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.excerpt}>{post.excerpt}</Text>
              <Author {...post.author} />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 240,
  },
  mainPostContainer: {
    paddingTop: 16,
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
  otherPostsContainer: {
    marginHorizontal: 16,
    borderTopColor: themeConfig.ink50,
    borderBottomColor: themeConfig.ink50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 24,
    paddingBottom: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  otherPostThumb: {
    height: 162,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    paddingTop: 12,
  },
  excerpt: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    paddingVertical: 12,
  },
  otherPostSeparator: {
    paddingTop: 24,
    marginTop: 24,
    borderTopColor: themeConfig.sky40,
    borderTopWidth: 1,
  },
});
