import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const contacts = [
  {
    id: 1,
    name: 'Phuoc',
    phoneNumber: '0987654321',
    avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
  },
  {
    id: 2,
    name: 'Phuoc2',
    phoneNumber: '0987654321',
    avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
  },
  {
    id: 3,
    name: 'Phuoc3',
    phoneNumber: '0987654321',
    avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
  },
  {
    id: 4,
    name: 'Phuoc4',
    phoneNumber: '0987654321',
    avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
  },
  {
    id: 5,
    name: 'Phuoc5',
    phoneNumber: '0987654321',
    avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
  },
  {
    id: 6,
    name: 'Phuoc6',
    phoneNumber: '0987654321',
    avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
  },
  {
    id: 7,
    name: 'Phuoc7',
    phoneNumber: '0987654321',
    avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
  },
  {
    id: 8,
    name: 'Phuoc8',
    phoneNumber: '0987654321',
    avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
  },
  {
    id: 9,
    name: 'Phuoc9',
    phoneNumber: '0987654321',
    avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
  },
  {
    id: 10,
    name: 'Phuoc10',
    phoneNumber: '0987654321',
    avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
  },
  {
    id: 11,
    name: 'Phuoc11',
    phoneNumber: '0987654321',
    avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
  },
  {
    id: 12,
    name: 'Phuoc12',
    phoneNumber: '0987654321',
    avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
  },
  {
    id: 13,
    name: 'Phuoc13',
    phoneNumber: '0987654321',
    avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
  }
]

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.rootView}>
      <FlatList
        style={styles.FlatList}
        data={contacts}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: 'white'
  },
  FlatList: {
    flex: 1
  }
})