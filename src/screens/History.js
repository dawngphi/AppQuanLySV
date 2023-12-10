import { View, Text, FlatList } from 'react-native'
import React,{useState} from 'react'
import HistoryItem from '../components/HistoryItem';

const History = () => {
    const [semesterData, setsemesterData] = useState([{
        id: 0,
        Semester: 'Fall 2023',
        subjectCode: 'MOB401',
        subjectName: 'Lập trình server cho Android',
        status: 'Passed',
        class: 'MD18101',
        score: '9.5',
        teach: '17',
    }, {
        id: 1,
        Semester: 'Summer 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình game 2D nâng cao',
        status: 'Passed',
        class: 'MD18101',
        score: '7.0',
        teach: '17'
    }, {
        id: 2,
        Semester: 'Spring 2023',
        subjectCode: 'MOB403',
        subjectName: 'Lập trình Java2',
        status: 'Failed',
        class: 'MD18101',
        score: '4.5',
        teach: '17'
    }, {
        id: 3,
        Semester: 'Fall 2022',
        subjectCode: 'MOB405',
        subjectName: 'Lập trình game 2D',
        status: 'Passed'
        ,
        class: 'MD18101',
        score: '8.5',
        teach: '17'
    },
    {
        id: 4,
        Semester: 'Fall 2022',
        subjectCode: 'MOB407',
        subjectName: 'Thiết kế Website',
        status: 'Passed'
        ,
        class: 'MD18101',
        score: '9.0',
        teach: '17'
    
    },
    {
        id: 5,
        Semester: 'Fall 2022',
        subjectCode: 'MOB408',
        subjectName: 'Lập trình Java1',
        status: 'Passed'
        ,
        class: 'MD18108',
        score: '7.0',
        teach: '17'
    
    },
    {
        id: 6,
        Semester: 'Fall 2022',
        subjectCode: 'MOB409',
        subjectName: 'Thiết Kế Giao Diện Android',
        status: 'Failed'
        ,
        class: 'MD18101',
        score: '4.0',
        teach: '17'
    
    }])
    
    const handlePress = (item) => {
        item.isExpanded = !item.isExpanded;
        const newData = [...semesterData];
        setsemesterData(newData);
           }
  return (
    <View style={{ paddingTop: 16, paddingHorizontal: 12, flex: 1 }}>
       <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca' }}>
                    <View style={{ flexDirection: 'row', width: '70%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                           Học Kỳ
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          Tên Môn
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '30%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                            Trạng thái
                        </Text>
                    </View>
                </View>
                <FlatList 
                 showsVerticalScrollIndicator={false}
                 data={semesterData}
                 keyExtractor={item => item.id}
                 renderItem={({ item }) => <HistoryItem item={item} handlePress={handlePress} />
                    }
                />
    </View>

  )
}

export default History