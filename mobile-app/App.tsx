import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";

import Home from "./screens/Home";
import { themeConfig } from "./constants";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
        <StatusBar style="auto" backgroundColor={themeConfig.solidBlue70} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
