import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import SelectDialog from '../components/SelectDialog';
import DateSelect from '../components/DateSelect'
import AttendenceItem from '../components/AttendenceItem';

const semesterData = [
    { id: 0, label: 'Fall 2023' },
    { id: 1, label: 'Summer 2023' },
    { id: 2, label: 'Spring 2023' },
    { id: 3, label: 'Fall 2022' },
    { id: 4, label: 'Summer 2022' },
    { id: 5, label: 'Spring 2022' }
];

const Attendence = ({ navigation }) => {
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [attendenceData, setAttendenceData] = useState([{
        id: 0,
        subjectCode: 'MOB305',
        subjectName: 'Lập trình game 2D',
        attendences: [
            {
                lesson: 1,
                date: "09/05/2023",
                time: 2,
                status: "Absent"
            },
            {
                lesson: 2,
                date: "11/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 3,
                date: "13/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 4,
                date: "16/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 5,
                date: "18/05/2023",
                time: 2,
                status: "Absent"
            },
            {
                lesson: 6,
                date: "20/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 7,
                date: "23/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 8,
                date: "25/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 9,
                date: "27/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 10,
                date: "30/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 11,
                date: "01/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 12,
                date: "03/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 13,
                date: "06/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 14,
                date: "08/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 15,
                date: "10/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 16,
                date: "13/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 17,
                date: "15/06/2023",
                time: 2,
                status: "Future"
            }
        ]
    }, {
        id: 1,
        subjectCode: 'MOB306',
        subjectName: 'Lập trình Mobile đa nền tảng',
        attendences: [
            {
                lesson: 1,
                date: "09/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 2,
                date: "11/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 3,
                date: "13/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 4,
                date: "16/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 5,
                date: "18/05/2023",
                time: 2,
                status: "Absent"
            },
            {
                lesson: 6,
                date: "20/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 7,
                date: "23/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 8,
                date: "25/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 9,
                date: "27/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 10,
                date: "30/05/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 11,
                date: "01/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 12,
                date: "03/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 13,
                date: "06/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 14,
                date: "08/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 15,
                date: "10/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 16,
                date: "13/06/2023",
                time: 2,
                status: "Future"
            },
            {
                lesson: 17,
                date: "15/06/2023",
                time: 2,
                status: "Future"
            }
        ]
    }, {
        id: 2,
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        attendences: [
            {
                lesson: 1,
                date: "09/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 2,
                date: "11/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 3,
                date: "13/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 4,
                date: "16/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 5,
                date: "18/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 6,
                date: "20/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 7,
                date: "23/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 8,
                date: "25/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 9,
                date: "27/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 10,
                date: "30/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 11,
                date: "01/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 12,
                date: "03/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 13,
                date: "06/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 14,
                date: "08/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 15,
                date: "10/06/2023",
                time: 2,
                status: "Absent"
            },
            {
                lesson: 16,
                date: "13/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 17,
                date: "15/06/2023",
                time: 2,
                status: "Present"
            }
        ]
    }, {
        id: 3,
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        attendences: [
            {
                lesson: 1,
                date: "09/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 2,
                date: "11/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 3,
                date: "13/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 4,
                date: "16/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 5,
                date: "18/05/2023",
                time: 2,
                status: "Absent"
            },
            {
                lesson: 6,
                date: "20/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 7,
                date: "23/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 8,
                date: "25/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 9,
                date: "27/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 10,
                date: "30/05/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 11,
                date: "01/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 12,
                date: "03/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 13,
                date: "06/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 14,
                date: "08/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 15,
                date: "10/06/2023",
                time: 2,
                status: "Absent"
            },
            {
                lesson: 16,
                date: "13/06/2023",
                time: 2,
                status: "Present"
            },
            {
                lesson: 17,
                date: "15/06/2023",
                time: 2,
                status: "Present"
            }
        ]
    }])

    const handleSelect = (item) => {
        setSelectedItem(item);
        setDialogVisible(false);
    };

    const handleCancel = () => {
        setDialogVisible(false);
    };

    const handlePress = (item) => {
        navigation.navigate('AttendenceDetail', item);
    }

    return (
        <View style={{ paddingTop: 16, paddingHorizontal: 12, flex: 1 }}>
            <TouchableOpacity style={{ marginBottom: 8 }} onPress={() => { setDialogVisible(true) }}>
                <DateSelect title={selectedItem ? selectedItem.label : semesterData[0].label} />
            </TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={attendenceData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <AttendenceItem item={item} handlePress={handlePress} />} />
            <SelectDialog
                visible={isDialogVisible}
                data={semesterData}
                onSelect={handleSelect}
                onCancel={handleCancel}
            />
        </View>
    )
}

export default Attendence