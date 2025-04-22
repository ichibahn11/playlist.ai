import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text, Divider, Menu, Provider } from 'react-native-paper';

const playlistTypes = [
  'Music', 'Educational', 'Podcast', 'Motivational', 'Comedy',
  'Cooking', 'Fitness', 'Gaming', 'Travel', 'Technology'
];

const languages = [
  'English', 'Spanish', 'French', 'German', 'Chinese',
  'Japanese', 'Hindi', 'Arabic', 'Portuguese', 'Russian'
];

const HomeScreen = () => {
  const [description, setDescription] = useState('');
  const [playlistType, setPlaylistType] = useState('Music');
  const [language, setLanguage] = useState('English');
  const [typeMenuVisible, setTypeMenuVisible] = useState(false);
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);

  const handleCreatePlaylist = () => {
    // This would be connected to the backend service in a future task
    console.log({
      type: playlistType,
      language,
      description,
    });
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Create AI Playlist</Text>
          <Divider style={styles.divider} />
          
          <Text style={styles.label}>Playlist Type</Text>
          <Menu
            visible={typeMenuVisible}
            onDismiss={() => setTypeMenuVisible(false)}
            anchor={
              <Button 
                mode="outlined" 
                onPress={() => setTypeMenuVisible(true)}
                style={styles.dropdown}
              >
                {playlistType}
              </Button>
            }
          >
            {playlistTypes.map((type) => (
              <Menu.Item
                key={type}
                title={type}
                onPress={() => {
                  setPlaylistType(type);
                  setTypeMenuVisible(false);
                }}
              />
            ))}
          </Menu>
          
          <Text style={styles.label}>Language</Text>
          <Menu
            visible={languageMenuVisible}
            onDismiss={() => setLanguageMenuVisible(false)}
            anchor={
              <Button 
                mode="outlined" 
                onPress={() => setLanguageMenuVisible(true)}
                style={styles.dropdown}
              >
                {language}
              </Button>
            }
          >
            {languages.map((lang) => (
              <Menu.Item
                key={lang}
                title={lang}
                onPress={() => {
                  setLanguage(lang);
                  setLanguageMenuVisible(false);
                }}
              />
            ))}
          </Menu>
          
          <Text style={styles.label}>Description (25-50 words)</Text>
          <TextInput
            mode="outlined"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
            placeholder="Describe the type of playlist you want..."
            maxLength={500}
            style={styles.textInput}
          />
          <Text style={styles.counter}>
            {description.split(/\s+/).filter(Boolean).length} words
          </Text>
          
          <Button 
            mode="contained" 
            onPress={handleCreatePlaylist} 
            style={styles.button}
            disabled={
              description.split(/\s+/).filter(Boolean).length < 25 || 
              description.split(/\s+/).filter(Boolean).length > 50
            }
          >
            Create Playlist
          </Button>
        </View>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  divider: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  dropdown: {
    marginBottom: 16,
    width: '100%',
  },
  textInput: {
    marginBottom: 4,
  },
  counter: {
    textAlign: 'right',
    marginBottom: 24,
    fontSize: 12,
    color: '#666',
  },
  button: {
    marginTop: 8,
    paddingVertical: 8,
  },
});

export default HomeScreen; 