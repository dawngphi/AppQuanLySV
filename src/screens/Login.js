import { Image, StyleSheet, Text, View, TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useState, useCallback, useEffect, useContext } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AxiosInstance from '../apis/AxiosInstance';
import { AppContext } from '../context/AppContext';


const Login = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const { setUserData } = useContext(AppContext);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const handleItemPress = (index) => {
        setSelectedItemIndex(index);
    };
    const handleConfirm = () => {

        setModalVisible(false);
    };
    useEffect(() => {
        GoogleSignin.configure();
    }, []);
    const signInGoogle = useCallback(async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signOut();
            const googleUser = await GoogleSignin.signIn();
            const user = await AxiosInstance().get('user/getUserByEmail/' + googleUser.user.email);
            if (user[0]) {
                setUserData({
                    googleUser,
                    user
                });
            } else {
                Alert.alert("Email của bạn không hợp lệ");
            }


        } catch (error) {
            switch (error.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    console.log('SIGN_IN_CANCELLED')
                    // sign in was cancelled
                    break;
                case statusCodes.IN_PROGRESS:
                    console.log('IN_PROGRESS')
                    // operation (e.g. sign in) already in progress
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    console.log('PLAY_SERVICES_NOT_AVAILABLE')
                    // android only
                    break;
                default:
                    // some other error happened
                    console.error('signInGoogle', error);
            }
        }
    })

    const sampleList = ['FPT Polytechnic HO'
        , 'FPT Polytechnic Hà Nội', 'FPT Polytechnic Hồ Chí Minh'
        , 'FPT Polytechnic Đà Nẵng', 'FPT Polytechnic Cần Thơ', 'FPT Polytechnic Tây Nguyên', 'FPT Polytechnic Hải Phòng'];

    return (
        <View style={styles.body}>
            <Image style={styles.image1} source={require('../assets/images/Logo1.png')} />
            <TouchableOpacity onPress={toggleModal} style={styles.text1} >
                <Text style={styles.text2}>{selectedItemIndex !== -1 ? sampleList[selectedItemIndex] : 'Chọn một mục'}</Text>
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {sampleList.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleItemPress(index)}
                                style={[
                                    styles.item,
                                    index === selectedItemIndex && { backgroundColor: '#ff940c', color: 'white' },
                                ]}
                            >
                                <Text style={index === selectedItemIndex && { color: 'white' }}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity onPress={handleConfirm}>
                            <Text style={styles.confirmText}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.text3} >
                <Image style={styles.image2} source={require('../assets/icons/GG.png')} />
                <TouchableOpacity onPress={signInGoogle}>
                    <Text style={styles.text4}>Đăng nhập với Google</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    item: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    confirmText: {
        color: '#ff940c',
        fontSize: 15,
        left: 150,
        marginTop: 17,
    },

    TouchableOpacity1: {
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        marginTop: 10,
        forcus: 'blue',
    },
    text5: {
        fontSize: 20,
        color: '#000',
        marginTop: 10,


    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',


    },
    modalContent: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 25,
        fontSize: 20,
    },
    closeText: {
        marginTop: 10,
        color: 'blue',
        left: 120,
    },
    text4: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        marginLeft: 60,


    },
    text3: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 26,
        padding: 11,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 20,

    },
    image2: {
        width: 30,
        height: 30,
        marginLeft: 10,

    },
    text2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    text1: {
        backgroundColor: '#fff',
        borderRadius: 26,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 40,
    },
    image1: {
        width: 360,
        height: 260,
        borderRadius: 10,

    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
})