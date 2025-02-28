import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function LocationsDetail() {
  const searchParams = useLocalSearchParams();
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/${searchParams.id}`
      );
      const data = await response.json();
      const location = {
        id: data.id,
        name: data.name,
        type: data.type,
      };
      setLocation(location);

      const residents = data.residents.map((resident) =>
        resident.split("/").pop()
      );
      setResidents(residents);
    }
    fetchData();
  }, [searchParams.id]);

  if (!location) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={globalStyles.textHead1}>{location.name}</Text>
      <Text style={globalStyles.textHead2}>{location.type}</Text>
      <FlatList
        data={residents}
        renderItem={({ item }) => (
          <Link href={`/characters/${item}`} style={{ padding: 5 }}>
            <Image
              source={{
                uri: `https://rickandmortyapi.com/api/character/avatar/${item}.jpeg`,
              }}
              style={{ width: "350", height: "400" }}
            />
          </Link>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
