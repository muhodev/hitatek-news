import { View, Text, StyleSheet } from "react-native";
import { themeConfig } from "../../../../contants/theme";

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
    color: themeConfig.solidBlue70,
    textTransform: "uppercase",
    fontStyle: "normal",
    letterSpacing: 2,
  },
});
