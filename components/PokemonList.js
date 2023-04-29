import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PokemonList = ({ onPress }) => {
  const [pokemons, setPokemons] = useState([]);
  const [groupedPokemons, setGroupedPokemons] = useState({});
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(response => response.json())
    .then(data => {
      setPokemons(data.pokemon);
      const grouped = {};
      data.pokemon.forEach(pokemon => {
        pokemon.type.forEach(type => {
          if (!grouped[type]) {
            grouped[type] = [];
          }
          grouped[type].push(pokemon);
        });
      });
      setGroupedPokemons(grouped);
    })
    .catch(error => console.error(error))
  }, []);
  
  const renderGroup = (groupName, groupPokemons) => {
    return (
      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>{groupName}</Text>
        <View style={styles.cardContainer}>
          {groupPokemons.map((pokemon, index) => (
            <TouchableOpacity key={index} onPress={() => onPress(pokemon)}>
              <View style={styles.card}>
                <Image source={{ uri: pokemon.img }} style={styles.image} />
                <Text style={styles.title}>{pokemon.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  
  return (
    <ScrollView style={styles.scrollView}>
      {Object.entries(groupedPokemons).map(([groupName, groupPokemons]) => (
        renderGroup(groupName, groupPokemons)
      ))}
    </ScrollView>
  );
};
  
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  groupContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  groupTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize',
    color: '#5d5d5d',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: Dimensions.get('window').width * 0.44,
    height: 220,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default PokemonList;
