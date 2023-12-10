import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const AttendenceItem = (props) => {
    const item = props.item;
    const handlePress = props.handlePress;

    const getAttendence = () => {
        let present = 0;
        let absent = 0;
        let future = 0;
        item.attendences.forEach(attendence => {
            if (attendence.status === 'Present') {
                present++;
            } else if (attendence.status === 'Absent') {
                absent++;
            } else {
                future++;
            }
        });
        return ({
            present,
            absent,
            future
        })
    }
    return (
        <TouchableOpacity onPress={() => { handlePress(item) }} style={{ marginVertical: 8, backgroundColor: 'white', borderRadius: 8 }}>
            <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}>
                <View style={{ width: '93%' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
                        {item.subjectName + ' - ' + item.subjectCode}
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                        <Text>Vắng: </Text>
                        <Text style={{ color: '#fca612', fontWeight: 'bold' }}>
                            {getAttendence().absent + '/' + (getAttendence().absent + getAttendence().present)}
                        </Text>
                        <Text> cho tới hiện tại</Text>
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                        <Text>Vắng: </Text>
                        <Text style={{ color: '#fca612', fontWeight: 'bold' }}>
                            {getAttendence().absent + '/' + (getAttendence().absent + getAttendence().present + getAttendence().future)}
                        </Text>
                        <Text> trên tổng số</Text>
                    </Text>
                </View>
                <Image source={require('../assets/icons/navigate_next_48.png')} style={{ width: 24, height: 24 }} />
            </View>
        </TouchableOpacity>
    )
}

export default AttendenceItem