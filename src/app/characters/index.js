import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      const characters = data.results.map((character) => ({
        id: character.id,
        name: character.name,
      }));
      setCharacters((prev) => [...prev, ...characters]);
    }
    fetchData();
  }, [page]);

  function handleLoadMoreButtonClick() {
    setPage((prev) => prev + 1);
  }

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <Link href={`/characters/${item.id}`} style={{ padding: 10 }}>
            <Text
              style={{
                color: "#007aff",
                fontSize: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              {item.name}
            </Text>
          </Link>
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <Button
            title="Load More"
            onPress={() => handleLoadMoreButtonClick()}
          />
        }
      />
    </View>
  );
}
