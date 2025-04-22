import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Button, ActivityIndicator, Divider, IconButton } from 'react-native-paper';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';

type PlaylistPreviewRouteProp = RouteProp<RootStackParamList, 'PlaylistPreview'>;

// Mock data for playlist videos
const MOCK_VIDEOS = [
  {
    id: 'v1',
    title: 'Summer Hits 2024 - Best Music Mix',
    thumbnail: 'https://picsum.photos/seed/video1/300/200',
    duration: '8:21',
    creator: 'Music Channel',
  },
  {
    id: 'v2',
    title: 'How to Stay Productive Every Day',
    thumbnail: 'https://picsum.photos/seed/video2/300/200',
    duration: '12:05',
    creator: 'Productivity Tips',
  },
  {
    id: 'v3',
    title: 'Learn Spanish in 10 Minutes a Day',
    thumbnail: 'https://picsum.photos/seed/video3/300/200',
    duration: '10:00',
    creator: 'Language Learning',
  },
  {
    id: 'v4',
    title: '30-Minute HIIT Workout for Beginners',
    thumbnail: 'https://picsum.photos/seed/video4/300/200',
    duration: '30:15',
    creator: 'Fitness First',
  },
  {
    id: 'v5',
    title: 'How to Make Perfect Pasta',
    thumbnail: 'https://picsum.photos/seed/video5/300/200',
    duration: '7:45',
    creator: 'Cooking Masters',
  },
  {
    id: 'v6',
    title: 'Guitar Tutorial: Basic Chords',
    thumbnail: 'https://picsum.photos/seed/video6/300/200',
    duration: '15:30',
    creator: 'Music Lessons',
  },
  {
    id: 'v7',
    title: 'Introduction to React Native',
    thumbnail: 'https://picsum.photos/seed/video7/300/200',
    duration: '22:15',
    creator: 'Code Academy',
  },
  {
    id: 'v8',
    title: 'Travel Guide: Paris Highlights',
    thumbnail: 'https://picsum.photos/seed/video8/300/200',
    duration: '18:40',
    creator: 'Travel Adventures',
  },
];

// Mock playlist data - in a real app, this would be fetched based on the ID
const MOCK_PLAYLISTS = {
  '1': {
    id: '1',
    title: 'Chill Summer Vibes',
    type: 'Music',
    language: 'English',
    createdAt: '2024-07-10T14:30:00.000Z',
    description: 'A collection of relaxing summer tunes for your beach days.',
    videos: MOCK_VIDEOS.slice(0, 6),
  },
  '2': {
    id: '2',
    title: 'Productivity Podcasts',
    type: 'Podcast',
    language: 'English',
    createdAt: '2024-07-08T10:15:00.000Z',
    description: 'Top productivity podcasts to boost your efficiency.',
    videos: MOCK_VIDEOS.slice(1, 5),
  },
  '3': {
    id: '3',
    title: 'Spanish Learning Series',
    type: 'Educational',
    language: 'Spanish',
    createdAt: '2024-07-05T09:45:00.000Z',
    description: 'Learn Spanish with these beginner-friendly tutorials.',
    videos: MOCK_VIDEOS.slice(2, 8),
  },
  '4': {
    id: '4',
    title: 'Workout Motivation',
    type: 'Fitness',
    language: 'English',
    createdAt: '2024-07-01T17:20:00.000Z',
    description: 'High-energy workout videos to keep you motivated.',
    videos: MOCK_VIDEOS.slice(3, 6),
  },
};

const PlaylistPreviewScreen = () => {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState<typeof MOCK_PLAYLISTS[keyof typeof MOCK_PLAYLISTS] | null>(null);
  const route = useRoute<PlaylistPreviewRouteProp>();
  const navigation = useNavigation();
  const { playlistId } = route.params;
  
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 2;
  const thumbnailWidth = (screenWidth - 32) / numColumns; // 32 = padding and gap

  useEffect(() => {
    // In a real app, fetch the playlist from an API
    setTimeout(() => {
      setPlaylist(MOCK_PLAYLISTS[playlistId as keyof typeof MOCK_PLAYLISTS]);
      setLoading(false);
    }, 800); // Simulate network request
  }, [playlistId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleOpenYouTube = () => {
    // In a real app, this would open the YouTube app or web page with the playlist
    console.log('Opening YouTube playlist:', playlistId);
  };

  const renderVideoItem = ({ item }: { item: typeof MOCK_VIDEOS[0] }) => (
    <TouchableOpacity style={[styles.videoItem, { width: thumbnailWidth }]}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.videoTitle}>{item.title}</Text>
      <Text style={styles.channelName}>{item.creator}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading playlist...</Text>
      </View>
    );
  }

  if (!playlist) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Playlist not found</Text>
        <Button mode="contained" onPress={() => navigation.goBack()}>
          Go Back
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{playlist.title}</Text>
        <Text style={styles.details}>
          {playlist.type} • {playlist.language} • {playlist.videos.length} videos
        </Text>
        <Text style={styles.date}>Created on {formatDate(playlist.createdAt)}</Text>
        <Text style={styles.description}>{playlist.description}</Text>
        
        <View style={styles.actions}>
          <Button 
            mode="contained"
            icon="youtube"
            onPress={handleOpenYouTube}
            style={styles.youtubeButton}
          >
            Open in YouTube
          </Button>
          <IconButton
            icon="share-variant"
            size={24}
            onPress={() => console.log('Share pressed')}
          />
        </View>
      </View>
      
      <Divider />
      
      <FlatList
        data={playlist.videos}
        renderItem={renderVideoItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.videoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  youtubeButton: {
    flex: 1,
    marginRight: 8,
  },
  videoList: {
    padding: 8,
  },
  videoItem: {
    margin: 8,
  },
  thumbnailContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  thumbnail: {
    width: '100%',
    height: 100,
    borderRadius: 4,
  },
  durationBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  durationText: {
    color: '#fff',
    fontSize: 10,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  channelName: {
    fontSize: 12,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default PlaylistPreviewScreen; 