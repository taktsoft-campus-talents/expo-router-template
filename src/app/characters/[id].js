import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function CharacterPage() {
  const searchParams = useLocalSearchParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${searchParams.id}`
      );
      const data = await response.json();
      const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        image: data.image,
      };
      console.debug("CharacterPage fetched data");
      setCharacter(character);
    }
    setCharacter(null);
    fetchData();
  }, [searchParams.id]);

  console.debug("Render CharacterPage");

  if (!character) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text>Character Page</Text>
      <Text>{character.name}</Text>
      <Text>{character.status}</Text>
      <Text>{character.species}</Text>
      <Text>{character.image}</Text>
      <Image
        source={{ uri: character.image }}
        placeholder={{ blurhash }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
