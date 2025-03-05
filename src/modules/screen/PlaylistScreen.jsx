import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from '@rneui/base';
import React from 'react';
import { map } from 'lodash';
import Song from '../../kernel/components/Song';
import PagerView from 'react-native-pager-view';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const imageList = [
  'https://external-preview.redd.it/lzMFPmJPWZ5j07l7xJf3TsZIdecZxpS-16bfbgkI8Y4.jpg?auto=webp&s=e5016508fc233927a1fef6003bb488ec7e17d74a',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvBMMw4qzQ1wL8HCm1Q0zsIqHpBezd1LiFA&s',
  'https://mir-s3-cdn-cf.behance.net/project_modules/hd/943e5196913939.5eb973be8e3b7.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/1200x1200bb.jpg',
  'https://resources.claroshop.com/imagenes-sanborns-ii/1200/602508818387.jpg',
  'https://www.lahiguera.net/musicalia/artistas/the_weeknd/disco/6922/the_weeknd_beauty_behind_the_madness-portada.jpg'
];

const songs = [
  { id: 1, name: 'STARBOY', image: imageList[0], isFavourite: true },
  { id: 2, name: 'A LONELY NIGHT', image: imageList[1], isFavourite: false },
  { id: 3, name: 'REMINDER', image: imageList[3], isFavourite: false },
  { id: 4, name: 'FALSE ALARM', image: imageList[4], isFavourite: false },
  { id: 5, name: 'BLINDING LIGHTS', image: imageList[5], isFavourite: false }
];

const PlaylistScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Icon name='arrow-left' type='font-awesome' size={25} color='white' />
          <View style={{ flexDirection: 'row' ,alignItems: 'flex-end'}}>
            <MaterialCommunityIcons name='heart-multiple-outline' size={25} color='white' style={{marginEnd: 20}} />
            <Icon name='ellipsis-v' type='font-awesome' size={25} color='white' />
          </View>
        </View>
        <PagerView style={styles.pagerView} initialPage={0}>
          {map(imageList, (image, index) => (
            <View style={styles.imageContainer} key={index}>
              <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
            </View>
          ))}
        </PagerView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>WEEKEND PLAYLIST</Text>
          <View style={styles.playlistInfo}>
            <Icon name='heart-o' type='font-awesome' size={15} color='rgba(255, 255, 255, 0.5)' />
            <Text style={styles.infoText}>25,00000 Likes</Text>
            <Icon name='clock-o' type='font-awesome' size={15} color='rgba(255, 255, 255, 0.5)' />
            <Text style={styles.infoText}>2h 25 mins</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Icon name='play-circle' type='font-awesome' size={60} color='#0fd916' />
        </TouchableOpacity>
        <Text style={styles.subtitle}>Featuring</Text>
        <View style={styles.songs}>
          {map(songs, (song) => (
            <Song key={song.id} name={song.name} image={song.image} isFavourite={song.isFavourite} onPress={() => navigation.navigate('PlayerScreen')} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  header: {
    position: 'absolute',
    top: 30,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  pagerView: {
    height: 350,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: -70,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  playlistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  infoText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: 5,
    marginRight: 20
  },
  playButton: {
    alignSelf: 'flex-end',
    top: -100,
    marginRight: 30
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    top: -110,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)'
  },
  songs: {
    top: -110
  }
});

export default PlaylistScreen;