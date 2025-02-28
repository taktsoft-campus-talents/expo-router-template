import { Stack } from "expo-router";

export default function LocationsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Locations",
          headerBackTitleVisible: true,
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Location Details",
          headerBackTitleVisible: true,
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
