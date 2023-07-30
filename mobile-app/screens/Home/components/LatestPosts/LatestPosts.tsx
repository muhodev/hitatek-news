import { Image, StyleSheet, Text, View } from "react-native";
import { Article } from "../../../../types";
import { Author } from "../../../../components";
import { themeConfig } from "../../../../constants";
import isValid from "date-fns/isValid";
import format from "date-fns/formatDistanceToNowStrict";

export default function LatestPosts({ posts }: { posts: Article[] }) {
  return (
    <View style={styles.container}>
      {posts.map((post, index) => {
        return (
          <View key={post.id} style={index > 0 ? styles.separator : null}>
            <View style={styles.postHeader}>
              <Image
                style={styles.thumbnail}
                source={{ uri: post.thumbnail }}
              />
              <Text style={styles.date}>
                {isValid(new Date(post.createdAt)) &&
                  format(new Date(post.createdAt)) + " ago"}
              </Text>
            </View>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.excerpt}>{post.excerpt}</Text>
            <Author {...post.author} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  date: {
    color: themeConfig.ink10,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  thumbnail: {
    height: 45,
    width: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    paddingTop: 8,
  },
  excerpt: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    paddingVertical: 8,
  },
  separator: {
    paddingTop: 24,
    marginTop: 24,
    borderTopColor: themeConfig.sky40,
    borderTopWidth: 1,
  },
});
