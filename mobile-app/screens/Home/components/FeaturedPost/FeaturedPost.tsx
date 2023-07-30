import { Image, StyleSheet, Text, View } from "react-native";
import { Article } from "../../../../types";
import { Author } from "../../../../components";
import { themeConfig } from "../../../../constants";

export default function FeaturedPost({ thumbnail, title, author }: Article) {
  return (
    <View>
      <Image style={styles.thumbnail} source={{ uri: thumbnail }} />
      <View style={styles.postContent}>
        <Text style={styles.title}>{title}</Text>
        <Author {...author} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 120,
  },
  postContent: {
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: themeConfig.primaryFontBold,
    lineHeight: 28,
    color: "white",
    marginBottom: 16,
  },
});
