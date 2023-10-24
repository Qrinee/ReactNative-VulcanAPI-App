import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { List, ListItem } from '@ui-kitten/components'; // Importujemy komponent ListItem

const YouTubeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const apiKey = 'AIzaSyChmW8PqNhAjbjVlTEGnUojRFgiKZW5a4w'; // Zastąp swoim kluczem API

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchTerm}&part=snippet&type=video`
      );

      const data = await response.json();

      if (data.items) {
        setSearchResults(data.items);
      }
    } catch (error) {
      console.error('Błąd podczas wyszukiwania:', error);
    }
  };

  return (
    <View>
      <List 
        data={searchResults}
        renderItem={({ item }) => (
          <ListItem
            title={item.snippet.title}
            description={item.snippet.description}
            accessoryLeft={() => (
              <Image
                source={{ uri: item.snippet.thumbnails.default.url }}
                style={{ width: 100, height: 100 }}
              />
            )}
          />
        )}
      />
    </View>
  );
};

export default YouTubeSearch;
