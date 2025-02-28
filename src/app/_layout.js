import { Link, Tabs, usePathname } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

export default function HomeLayout() {
  const pathname = usePathname();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "orange" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text>{pathname}</Text>
          <Link href="/_sitemap">
            <Text>Sitemap</Text>
          </Link>
        </View>
        <Tabs
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="characters"
            options={{
              title: "Characters",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="person" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="locations"
            options={{
              title: "Locations",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="planet" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="episodes"
            options={{
              title: "Episodes",
              tabBarIcon: ({ color, size }) => (
                <Entypo name="book" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen name="index" options={{ href: null }} />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
