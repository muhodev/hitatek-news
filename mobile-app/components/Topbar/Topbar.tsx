import { TouchableOpacity, StyleSheet, View } from "react-native";
import { themeConfig } from "../../contants/theme";
import { MenuIcon, SearchIcon } from "../Icons";

export default function Topbar() {
  return (
    <View style={styles.topbar}>
      <View style={styles.topbarNav}>
        <TouchableOpacity style={styles.button}>
          <SearchIcon fill="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MenuIcon fill="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: themeConfig.solidBlue70,
    height: 40,
    color: "white",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  topbarNav: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 12,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
});
