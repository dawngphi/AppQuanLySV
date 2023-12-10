import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const getTime = (item) => {
    switch (item.time) {
        case '07:30 - 09:30':
            return 'Ca 1'
        case '09:45 - 11:45':
            return 'Ca 2'
        case '13:00 - 15:00':
            return 'Ca 3'
        case '15:15 - 17:15':
            return 'Ca 4'
        case '17:30 - 19:30':
            return 'Ca 5'
        default: 'Please set time'

    }
}

const ScheduleItem = (props) => {
    const item = props.item;
    const handlePress = props.handlePress;
    return (
        <TouchableOpacity onPress={() => { handlePress(item) }} style={{ marginVertical: 8, backgroundColor: 'white', borderRadius: 8 }}>
            <View style={{ flexDirection: 'row', padding: 12, alignItems: 'center' }}>
                <View style={{ width: '30%', borderRadius: 8, borderWidth: 1, borderColor: '#ee9c6c' }}>
                    <Text style={{ color: 'black', padding: 8 }}>
                        {'Phòng ' + item.room + ' - ' + getTime(item)}
                    </Text>
                </View>
                <View style={{ width: '60%', marginLeft: 12 }}>
                    <Text style={{ color: 'black' }}>
                        {item.date}
                    </Text>
                    <Text style={{ color: 'black' }}>
                        {item.subjectName + ' - ' + item.subjectCode}
                    </Text>
                </View>
                <Image source={item.isExpanded ? require('../assets/icons/expand_more_48.png') : require('../assets/icons/navigate_next_48.png')} style={{ width: 24, height: 24 }} />
            </View>
            <View style={[item.isExpanded ? { display: 'flex' } : { display: "none" }, { paddingHorizontal: 12, paddingBottom: 12, alignItems: 'center' }]}>
                <View style={{ justifyContent: 'center', width: '97%' }}>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#e9e9e9', marginBottom: 8 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ color: 'black' }}>
                                <Text>Giảng đường: </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.amphitheater}</Text>
                            </Text>
                            <Text style={{ color: 'black' }}>
                                <Text>Phòng: </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.room}</Text>
                            </Text>
                            <Text style={{ color: 'black' }}>
                                <Text>Mã môn: </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.subjectCode}</Text>
                            </Text>
                            <Text style={{ color: 'black' }}>
                                <Text>Thời gian: </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.time}</Text>
                            </Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ color: 'black' }}>
                                <Text>Lớp: </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.className}</Text>
                            </Text>
                            <Text style={{ color: 'black' }}>
                                <Text>Giảng viên: </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.teacher}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ScheduleItem