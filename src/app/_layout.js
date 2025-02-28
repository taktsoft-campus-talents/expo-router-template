import { Link, Slot, useRouter } from "expo-router";
import { Button, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", gap: 20, padding: 15 }}>
          <Link href="/">Startseite</Link>
          <Link href="/about">About</Link>
          <Button onPress={() => router.navigate("/")} title="Startseite" />
          <Button onPress={() => router.navigate("/about")} title="About" />
        </View>
        <View style={{ flex: 1, padding: 15 }}>
          <Slot />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
