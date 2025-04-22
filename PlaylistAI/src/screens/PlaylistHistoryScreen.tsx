import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Text, Button, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

type PlaylistHistoryNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

// Mock data for playlist history
const MOCK_PLAYLISTS = [
  {
    id: '1',
    title: 'Chill Summer Vibes',
    type: 'Music',
    language: 'English',
    createdAt: '2024-07-10T14:30:00.000Z',
    thumbnailUrl: 'https://picsum.photos/seed/playlist1/200',
    videoCount: 12,
  },
  {
    id: '2',
    title: 'Productivity Podcasts',
    type: 'Podcast',
    language: 'English',
    createdAt: '2024-07-08T10:15:00.000Z',
    thumbnailUrl: 'https://picsum.photos/seed/playlist2/200',
    videoCount: 8,
  },
  {
    id: '3',
    title: 'Spanish Learning Series',
    type: 'Educational',
    language: 'Spanish',
    createdAt: '2024-07-05T09:45:00.000Z',
    thumbnailUrl: 'https://picsum.photos/seed/playlist3/200',
    videoCount: 15,
  },
  {
    id: '4',
    title: 'Workout Motivation',
    type: 'Fitness',
    language: 'English',
    createdAt: '2024-07-01T17:20:00.000Z',
    thumbnailUrl: 'https://picsum.photos/seed/playlist4/200',
    videoCount: 10,
  },
];

const PlaylistHistoryScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation<PlaylistHistoryNavigationProp>();

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filteredPlaylists = MOCK_PLAYLISTS.filter(playlist => 
    playlist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const renderPlaylistItem = ({ item }: { item: typeof MOCK_PLAYLISTS[0] }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('PlaylistPreview', { playlistId: item.id })}>
      <Card.Cover source={{ uri: item.thumbnailUrl }} style={styles.cardCover} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>
          {item.type} • {item.language} • {item.videoCount} videos
        </Paragraph>
        <Text style={styles.date}>Created on {formatDate(item.createdAt)}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => navigation.navigate('PlaylistPreview', { playlistId: item.id })}>
          View
        </Button>
        <Button>Share</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search playlists"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      
      {filteredPlaylists.length > 0 ? (
        <FlatList
          data={filteredPlaylists}
          renderItem={renderPlaylistItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No playlists found</Text>
          {searchQuery ? (
            <Text>Try adjusting your search query</Text>
          ) : (
            <Text>Create your first playlist in the Home tab</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 8,
    elevation: 2,
  },
  listContent: {
    padding: 8,
  },
  card: {
    marginBottom: 16,
    elevation: 3,
  },
  cardCover: {
    height: 150,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default PlaylistHistoryScreen; 