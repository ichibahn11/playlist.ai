import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Switch, Divider, Text, Button } from 'react-native-paper';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [saveHistory, setSaveHistory] = useState(true);
  const [highQualityThumbnails, setHighQualityThumbnails] = useState(false);
  
  // Mock user data - would come from authentication in a real app
  const isLoggedIn = false;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Divider style={styles.divider} />
        
        {isLoggedIn ? (
          <>
            <List.Item
              title="Profile"
              description="Edit your profile information"
              left={props => <List.Icon {...props} icon="account" />}
              onPress={() => {}}
            />
            <List.Item
              title="YouTube Account"
              description="Connect your YouTube account"
              left={props => <List.Icon {...props} icon="youtube" />}
              onPress={() => {}}
            />
            <Button
              mode="outlined"
              style={styles.logoutButton}
              onPress={() => {}}
            >
              Log Out
            </Button>
          </>
        ) : (
          <View style={styles.authButtons}>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => {}}
            >
              Log In
            </Button>
            <Button
              mode="outlined"
              style={styles.button}
              onPress={() => {}}
            >
              Sign Up
            </Button>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <Divider style={styles.divider} />
        
        <List.Item
          title="Dark Mode"
          description="Use dark theme throughout the app"
          left={props => <List.Icon {...props} icon="brightness-6" />}
          right={() => (
            <Switch
              value={darkMode}
              onValueChange={() => setDarkMode(!darkMode)}
            />
          )}
        />
        
        <List.Item
          title="Notifications"
          description="Receive notifications when playlists are ready"
          left={props => <List.Icon {...props} icon="bell" />}
          right={() => (
            <Switch
              value={notifications}
              onValueChange={() => setNotifications(!notifications)}
            />
          )}
        />
        
        <List.Item
          title="Save Playlist History"
          description="Keep record of your generated playlists"
          left={props => <List.Icon {...props} icon="history" />}
          right={() => (
            <Switch
              value={saveHistory}
              onValueChange={() => setSaveHistory(!saveHistory)}
            />
          )}
        />
        
        <List.Item
          title="High Quality Thumbnails"
          description="Use higher resolution images (uses more data)"
          left={props => <List.Icon {...props} icon="high-definition" />}
          right={() => (
            <Switch
              value={highQualityThumbnails}
              onValueChange={() => setHighQualityThumbnails(!highQualityThumbnails)}
            />
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Divider style={styles.divider} />
        
        <List.Item
          title="App Version"
          description="1.0.0"
          left={props => <List.Icon {...props} icon="information" />}
        />
        
        <List.Item
          title="Terms of Service"
          left={props => <List.Icon {...props} icon="file-document" />}
          onPress={() => {}}
        />
        
        <List.Item
          title="Privacy Policy"
          left={props => <List.Icon {...props} icon="shield-account" />}
          onPress={() => {}}
        />
        
        <List.Item
          title="Feedback"
          description="Report issues or suggest improvements"
          left={props => <List.Icon {...props} icon="message" />}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  divider: {
    marginBottom: 16,
  },
  authButtons: {
    padding: 16,
  },
  button: {
    marginVertical: 8,
  },
  logoutButton: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default SettingsScreen; 