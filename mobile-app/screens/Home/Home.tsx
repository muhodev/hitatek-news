import { View } from "react-native";
import Topbar from "../../components/Topbar";
import { OpinionTitle } from "./components/";

export default function Home() {
  return (
    <View>
      <Topbar />
      <OpinionTitle />
    </View>
  );
}
