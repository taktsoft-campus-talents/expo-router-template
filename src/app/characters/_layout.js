import { Stack } from "expo-router";

export default function CharactersLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Characters",
          headerBackTitleVisible: true,
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Character Details",
          headerBackTitleVisible: true,
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
