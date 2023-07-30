import { Image, StyleSheet, View } from "react-native";
import { Article } from "../../../../types";

export default function FeaturedPost({ thumbnail }: Article) {
  return (
    <View>
      <Image style={styles.thumbnail} source={{ uri: thumbnail }} />
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 240,
  },
});
