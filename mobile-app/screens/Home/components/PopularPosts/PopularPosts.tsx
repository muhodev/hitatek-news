import { StyleSheet, Text, View } from "react-native";
import { Article } from "../../../../types";
import { Author } from "../../../../components";
import { themeConfig } from "../../../../constants";

export default function PopularPosts({ posts }: { posts: Article[] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>POPULAR</Text>
      {posts.map((post, index) => {
        return (
          <View
            key={post.id}
            style={{
              ...styles.postContainer,
              ...(index > 0 ? styles.separator : {}),
            }}
          >
            <View style={styles.counterContainer}>
              <Text style={styles.counter}>{index + 1}</Text>
            </View>
            <View>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Author id={post.author.id} name={post.author.name} avatar="" />
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderBottomColor: themeConfig.ink50,
    borderBottomWidth: 1,
    paddingBottom: 24,
    marginBottom: 24,
  },
  title: {
    fontWeight: "700",
    fontFamily: themeConfig.secondaryFontBold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 2,
    paddingBottom: 24,
  },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  postTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: themeConfig.primaryFontRegular,
    marginBottom: 8,
  },
  counterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    color: themeConfig.sky50,
    textAlign: "center",
    fontSize: 48,
    fontWeight: "700",
  },
  separator: {
    paddingTop: 24,
    marginTop: 24,
    borderTopColor: themeConfig.sky40,
    borderTopWidth: 1,
  },
});
