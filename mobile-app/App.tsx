import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import Home from "./screens/Home";
import { themeConfig } from "./constants";
import { useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    [themeConfig.primaryFontRegular]: require("./assets/fonts/noto-serif/NotoSerifRegular.ttf"),
    [themeConfig.primaryFontBold]: require("./assets/fonts/noto-serif/NotoSerif-ExtraBold.ttf"),
    [themeConfig.secondaryFontBold]: require("./assets/fonts/trt/TRTBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Home />
        <StatusBar style="auto" backgroundColor={themeConfig.solidBlue70} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
