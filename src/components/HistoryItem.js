import { View, Text,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const HistoryItem = (props) => {
    const item = props.item;
    const handlePress = props.handlePress;
  return (
    <TouchableOpacity onPress={() => { handlePress(item) }} style={{ marginVertical: 8, backgroundColor: 'white', borderRadius: 8 }}>
    <View style={{ flexDirection: 'row', padding: 12, alignItems: 'center' }}>
        <View style={{ width: '25%', borderRadius: 8,}}>
            <Text style={{ color: 'black', padding: 8 }}>
             {item.Semester}
            </Text>
        </View>
        <View style={{ width: '45%', marginLeft: 12 }}>
            <Text style={{ color: 'black' }}>
                {item.subjectName + ' - ' + item.subjectCode}
            </Text>
        </View>
        <View style={{ width: '23%', borderRadius: 8,}}>
            <Text style={[item.status === 'Passed' ? { color: 'green' } : item.status === 'Failed' ? { color: 'orange' } : null,{padding:8}]}>
             {item.status}
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
                                <Text>Mã môn: </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.subjectCode}</Text>
                            </Text>
                            <Text style={{ color: 'black' }}>
                                <Text>Điểm Trung Bình :  </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.score}</Text>
                            </Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ color: 'black' }}>
                                <Text>Lớp : </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.class}</Text>
                            </Text>
                            <Text style={{ color: 'black' }}>
                                <Text>Tổng số buổi học: </Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.teach}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
    
</TouchableOpacity>
  )
}

export default HistoryItem