import { View, Text, StyleSheet } from "react-native";
import { themeConfig } from "../../../../constants";

const title = "OPINION";
export default function OpinionTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingLeft: 16,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "TRT-Bold",
    color: themeConfig.solidBlue70,
    textTransform: "uppercase",
    fontStyle: "normal",
    letterSpacing: 2,
  },
});
