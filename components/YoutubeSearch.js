import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { List, ListItem } from '@ui-kitten/components';

const YouTubeSearch = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'AIzaSyChmW8PqNhAjbjVlTEGnUojRFgiKZW5a4w';

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchQuery}&part=snippet&type=video`
      );

      const data = await response.json();

      if (data.items) {
        setSearchResults(data.items);
      }
    } catch (error) {
      console.error('Error during search:', error);
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
