import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SemesterItem = (props) => {
    const item = props.item;
    const handlePress = props.handlePress;

    return (
        <TouchableOpacity onPress={() => { handlePress(item) }} style={{ marginVertical: 8, backgroundColor: 'white', borderRadius: 8 }}>
            <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center',}}>
                <View style={{ width: '93%' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
                        {item.subjectName + ' - ' + item.subjectCode}
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                        <Text>Điểm Trung Bình : </Text>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>
                           {item.Score}
                        </Text> 
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                        <Text>Trạng Thái : </Text>
                        <Text style={[item.Status === 'Passed' ? { color: 'green' } : item.Status === 'Failed' ? { color: 'orange' } : null, { padding: 12}]}>
                            {item.Status}
                        </Text>
                    </Text>
                </View>
                <Image source={require('../assets/icons/navigate_next_48.png')} style={{ width: 24, height: 24 }} />
            </View>
        </TouchableOpacity>
    )
}

export default SemesterItem