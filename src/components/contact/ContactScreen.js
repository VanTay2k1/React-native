import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Constant from '../../controller/Constant'
import ContactItem from './components/ContactItems'
import GarageAPIs from '../../controller/APIs/GarageAPIs'

// const contacts = [
//     {
//         id: 1,
//         name: 'Tay',
//         phoneNumber: '0987654321',
//         avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
//     },
//     {
//         id: 2,
//         name: 'Tay2',
//         phoneNumber: '0987654321',
//         avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
//     },
//     {
//         id: 3,
//         name: 'Tay3',
//         phoneNumber: '0987654321',
//         avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
//     },
//     {
//         id: 4,
//         name: 'Tay4',
//         phoneNumber: '0987654321',
//         avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
//     },
//     {
//         id: 5,
//         name: 'Tay5',
//         phoneNumber: '0987654321',
//         avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
//     },
//     {
//         id: 6,
//         name: 'Tay6',
//         phoneNumber: '0987654321',
//         avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
//     },
//     {
//         id: 7,
//         name: 'Tay7',
//         phoneNumber: '0987654321',
//         avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
//     },
//     {
//         id: 8,
//         name: 'Tay8',
//         phoneNumber: '0987654321',
//         avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
//     },
//     {
//         id: 9,
//         name: 'Tay9',
//         phoneNumber: '0987654321',
//         avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
//     },
//     {
//         id: 10,
//         name: 'Tay10',
//         phoneNumber: '0987654321',
//         avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
//     },
//     {
//         id: 11,
//         name: 'Tay11',
//         phoneNumber: '0987654321',
//         avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
//     },
//     {
//         id: 12,
//         name: 'Tay12',
//         phoneNumber: '0987654321',
//         avatar: 'https://storage.googleapis.com/afs-prod/media/7d7380d2633d4aa3a8b9b5b0459e01ed/400.jpeg'
//     },
//     {
//         id: 13,
//         name: 'Tay13',
//         phoneNumber: '0987654321',
//         avatar: 'https://nld.mediacdn.vn/291774122806476800/2022/11/2/hinh-1-16673774006931263959105.jpg'
//     }
// ]

const ContacScreen = () => {

    const [user, setUser] = React.useState([])

    React.useEffect(() => {
        GarageAPIs.getUser()
            .then((data) => {
                // console.log('Danh sach user')
                // console.log(data)
                setUser(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(user)

    return (
        <View style={styles.rootView}>
            <FlatList
                style={styles.flatList}
                data={user}
                renderItem={({ item, index }) => <ContactItem contact={item} />}
                keyExtractor={(item, index) => item?.id.toString()}
            />
        </View>
    )
}

export default ContacScreen

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: Constant.colors.white
    },
    flatList: {
        flex: 1
    }
})
