import { StyleSheet, View } from "react-native";
import { themeConfig } from "../../../../constants";

export default function Footer() {
  return <View style={styles.footer}></View>;
}

const styles = StyleSheet.create({
  footer: {
    minHeight: 80,
    backgroundColor: themeConfig.solidBlue80,
    marginTop: 100,
  },
});
