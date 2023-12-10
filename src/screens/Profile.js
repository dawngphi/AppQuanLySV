import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Profile = () => {
    const { userData } = useContext(AppContext);

    return (
        <View>
            <View style={{ backgroundColor: '#fe930f', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={userData?.googleUser?.user?.photo ? { uri: userData?.googleUser?.user?.photo } : require('../assets/icons/ong.png')} style={{ width: 48, height: 48, borderRadius: 24 }} />
                    <Text style={{ color: 'white', marginLeft: 10 }}>
                        {userData?.user[0]?.fullname}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/icons/qr-code_64.png')} style={{ width: 24, height: 24 }} />
                    <Image source={require('../assets/icons/notification_64.png')} style={{ width: 24, height: 24, marginLeft: 24 }} />
                </View>
            </View>
            <View style={styles.container}>

                <TouchableOpacity style={styles.text1}>
                    <Image style={styles.image1} source={require('../assets/icons/world.png')} />
                    <View style={styles.text2}>
                        <Text style={styles.text3}>Dịch vụ trực tuyến</Text>
                        <Text style={styles.text4}>Sử dụng dịch vụ trực tuyến</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text1}>
                    <Image style={styles.image1} source={require('../assets/icons/credit.png')} />
                    <View style={styles.text2}>
                        <Text style={styles.text3}>Học phí</Text>
                        <Text style={styles.text4}>Thông tin giao dịch, hóa đơn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text1}>
                    <Image style={styles.image1} source={require('../assets/icons/ong.png')} />
                    <View style={styles.text2}>
                        <Text style={styles.text3}>Emotion Password</Text>
                        <Text style={styles.text4}>Sự kiện và lịch sử tham gia sự kiện</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text1}>
                    <Image style={styles.image1} source={require('../assets/icons/everybody.png')} />
                    <View style={styles.text2}>
                        <Text style={styles.text3}>Cộng đồng sinh viên</Text>
                        <Text style={styles.text4}>Thực học, thực nghiệp</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text1}>
                    <Image style={styles.image1} source={require('../assets/icons/checklist.png')} />
                    <View style={styles.text2}>
                        <Text style={styles.text3}>Khảo sát</Text>
                        <Text style={styles.text4}>Khảo sát đánh giá</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    text4: {
        marginTop: 5,
        color: 'black',
    },
    text3: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },
    text2: {
        marginLeft: 20,
    },
    text1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        elevation: 10,
        marginBottom: 20,

    },
    container: {
        padding: 20,
    },
    image1: {
        width: 30,
        height: 30,
        marginLeft: 5,

    }
})