import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function LocationsIndex() {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/location`);
      const data = await response.json();
      const locations = data.results.map((location) => ({
        id: location.id,
        name: location.name,
        type: location.type,
      }));
      setLocations(locations);
    }
    setLocations(null);
    fetchData();
  }, []);

  if (!locations) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
      data={locations}
      renderItem={({ item }) => (
        <Link href={`/locations/${item.id}`}>
          <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
          </View>
        </Link>
      )}
    />
  );
}
