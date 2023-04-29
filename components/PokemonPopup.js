import React from 'react';
import { Modal, StyleSheet, Text, View, Image, Button } from 'react-native';


const PokemonPopup = ({ pokemon, visible, onClose }) => {
    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.title}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.img }} style={styles.image} />
            <Text style={styles.text}>Type: {pokemon.type.join(', ')}</Text>
            <Text style={styles.text}>Height: {pokemon.height}</Text>
            <Text style={styles.text}>Weight: {pokemon.weight}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Close" onPress={onClose} />
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#008080',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      marginBottom: 5,
    },
    buttonContainer: {
      marginTop: 10,
    },
  });
  
export default PokemonPopup;