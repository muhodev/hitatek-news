import { Image, StyleSheet, Text, View } from "react-native";
import { Author as AuthorType } from "../../types";
import { themeConfig } from "../../constants";

export default function Author({
  avatar,
  name,
  color,
}: AuthorType & { color?: string }) {
  return (
    <View style={styles.container}>
      {!!avatar ? (
        <Image style={styles.avatar} source={{ uri: avatar }} />
      ) : null}
      <Text style={{ ...styles.name, color: color || "black" }}>
        {name?.toLocaleUpperCase?.()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  name: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: themeConfig.secondaryFontBold,
  },
});
