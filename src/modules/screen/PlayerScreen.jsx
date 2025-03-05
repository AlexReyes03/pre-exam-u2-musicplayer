import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlayerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-down' type='font-awesome' size={25} color='white' />
        </TouchableOpacity>
        <Icon name='ellipsis-v' type='font-awesome' size={25} color='white' style={styles.iconSpacing} />
      </View>
      <Text style={styles.playlistName}>WEEKEND PLAYLIST</Text>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/943e5196913939.5eb973be8e3b7.jpg' }} style={styles.image} resizeMode='cover' />
        <Image source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/943e5196913939.5eb973be8e3b7.jpg' }} style={styles.blurImage} resizeMode='cover' />
        <View style={styles.textOverlay}>
          <Text style={styles.songTitle}>STARBOY</Text>
          <Text style={styles.artist}>THE WEEKND</Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progress}></View>
      </View>
      <View style={styles.controls}>
        <Icon name='random' type='font-awesome' size={18} color='white' />
        <Icon name='step-backward' type='font-awesome' size={45} color='white' />
        <Icon name='play-circle' type='font-awesome' size={60} color='white' />
        <Icon name='step-forward' type='font-awesome' size={45} color='white' />
        <MaterialCommunityIcons name='repeat' size={18} color='black' />
      </View>
      <View style={styles.bottomControls}>
        <MaterialCommunityIcons name='ipod' size={25} color='white' />
        <MaterialCommunityIcons name='repeat' size={25} color='white' />
      </View>
      <TouchableOpacity style={styles.lyricsButton}>
          <Text style={styles.lyricsText}>Lyrics</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    width: '90%',
    top: 50,
    left: 10,
    right: 10,
    zIndex: 10,
  },
  iconSpacing: {
    marginLeft: 'auto',
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '80%',
    height: 250,
    top: 30,
    borderRadius: 10,
    zIndex: 2,
  },
  blurImage: {
    position: 'absolute',
    width: '100%',
    height: 350,
    opacity: 0.5,
  },
  textOverlay: {
    position: 'absolute',
    top: 315,
    left: 40,
    zIndex: 3,
    alignItems: 'flex-start',
  },
  songTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  artist: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
  },
  playlistName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  progressBar: {
    width: '80%',
    height: 4,
    backgroundColor: 'gray',
    borderRadius: 2,
    marginTop: 150,
  },
  progress: {
    width: '30%',
    height: 4,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 40,
  },
  bottomControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 30,
  },
  lyricsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    paddingVertical: 10,
    width: '90%',
    marginTop: 10,
    paddingBottom: 150,
    borderRadius: 20,
    justifyContent: 'center',
  },
  lyricsText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PlayerScreen;
