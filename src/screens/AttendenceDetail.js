import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const AttendenceDetail = ({ navigation }) => {
    const attendenceData = useRoute().params;

    const getAttendence = () => {
        let present = 0;
        let absent = 0;
        let future = 0;
        attendenceData.attendences.forEach(attendence => {
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

    const renderItem = (item) => {
        return (
            <View style={{ flexDirection: 'row', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#cacaca' }}>
                <View style={{ flexDirection: 'row', width: '50%' }}>
                    <Text style={{ padding: 12, flex: 3, textAlign: 'center' }}>
                        {item.lesson}
                    </Text>
                    <Text style={{ padding: 12, textAlign: 'center', flex: 7 }}>
                        {item.date}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '50%' }}>
                    <Text style={{ padding: 12, flex: 3, textAlign: 'center' }}>
                        {item.time}
                    </Text>
                    <Text style={[item.status === 'Present' ? { color: 'green' } : item.status === 'Absent' ? { color: 'red' } : null, { padding: 12, textAlign: 'center', flex: 7 }]}>
                        {item.status}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 64, flexDirection: 'row', paddingHorizontal: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fe930f' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={require('../assets/icons/arrow_back_48.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', marginRight: 24, fontWeight: 'bold', fontSize: 18, color: 'white' }}>
                    Điểm Danh
                </Text>
            </View>
            <View style={{ paddingVertical: 8, paddingHorizontal: 12 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
                    {attendenceData.subjectName + ' - ' + attendenceData.subjectCode}
                </Text>
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 12, paddingTop: 12 }}>
                <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca' }}>
                    <View style={{ flexDirection: 'row', width: '50%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                            Buổi
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                            Ngày học
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '50%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                            Ca
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                            Trạng thái
                        </Text>
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <FlatList
                        scrollEnabled={false}
                        data={attendenceData.attendences}
                        keyExtractor={item => item.lesson}
                        renderItem={({ item }) => renderItem(item)}
                        showsVerticalScrollIndicator={false} />
                    <View style={{ flexDirection: 'row', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#cacaca', justifyContent: 'space-around', backgroundColor: '#f2f2f2', padding: 12 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                            <Text>Vắng: </Text>
                            <Text style={{ color: 'red' }}>
                                {getAttendence().absent + '/' + (getAttendence().absent + getAttendence().present + getAttendence().future) + ' '}
                                {Math.floor(getAttendence().absent / (getAttendence().absent + getAttendence().present + getAttendence().future) * 100) + '% '}
                            </Text>
                            <Text>
                                trên tổng số
                            </Text>
                        </Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                            <Text>Vắng: </Text>
                            <Text style={{ color: 'red' }}>
                                {getAttendence().absent + '/' + (getAttendence().absent + getAttendence().present) + ' '}
                                {Math.floor(getAttendence().absent / (getAttendence().absent + getAttendence().present) * 100) + '% '}
                            </Text>
                            <Text>
                                cho đến hiện tại
                            </Text>
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AttendenceDetail