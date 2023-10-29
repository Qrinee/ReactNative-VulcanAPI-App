import React, { useState, useEffect } from 'react';
import { View, Image, Linking } from 'react-native';
import { List, ListItem, Text } from '@ui-kitten/components';

const YouTubeSearch = ({ examData }) => {
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'AIzaSyChmW8PqNhAjbjVlTEGnUojRFgiKZW5a4w';

  useEffect(() => {
    handleSearch();
  }, [examData]);

  const handleSearch = async () => {
    const allResults = [];

    for (const item of examData) {
      const searchQuery = item.Topic;

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchQuery}&part=snippet&type=video`
        );

        const data = await response.json();

        if (data.items) {
          const limitedResults = data.items.slice(0, 3); // Ogranicz wyniki do 3 filmów
          allResults.push(...limitedResults);
        }
      } catch (error) {
        console.error('Error during search:', error);
      }
    }

    setSearchResults(allResults);
  };

  const groupResultsByTest = (results, exams) => {
    const groupedResults = [];
    exams.forEach((exam, index) => {
      const startIndex = index * 3;
      const endIndex = startIndex + 3;
      const examResults = results.slice(startIndex, endIndex);
      groupedResults.push(examResults);
    });
    return groupedResults;
  };

  const groupedResults = groupResultsByTest(searchResults, examData);

  return (
    <View>
      {groupedResults.map((examResults, index) => (
        <React.Fragment key={index}>
          <Text category='h5' style={{ marginLeft: 20, marginTop: 50, marginBottom: 20 }}>
            Wyniki dla testu: {examData[index].LessonName}
          </Text>
          <List
            data={examResults}
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
                onPress={() =>
                  Linking.openURL(`https://www.youtube.com/watch?v=${item.id.videoId}`)
                }
              />
            )}
          />
        </React.Fragment>
      ))}
    </View>
  );
};

export default YouTubeSearch;
