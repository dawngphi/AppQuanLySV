import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HocTapItem = (props) => {

    const { item, handlePress } = props;

    return (
        <TouchableOpacity style={styles.body} onPress={() => { handlePress(item) }}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.nguoiDangContainer}>
                <Text>Người đăng: </Text>
                <Text>{item.createBy}</Text>
            </View>
            <View style={styles.nguoiDangContainer}>
                <Text>Ngày đăng: </Text>
                <Text>{item.createAt}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default HocTapItem

const styles = StyleSheet.create({
    nguoiDangContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    body: {
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
})