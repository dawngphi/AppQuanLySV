import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import SelectDialog from '../components/SelectDialog';
import DateSelect from '../components/DateSelect'
import ScheduleItem from '../components/ScheduleItem';
import AxiosInstance from '../apis/AxiosInstance';
import { AppContext } from '../context/AppContext';

const dateData = [
    { id: 0, label: '7 ngày tới' },
    { id: 1, label: '30 ngày tới' },
    { id: 2, label: '90 ngày tới' },
    { id: 3, label: '7 ngày trước' },
    { id: 4, label: '30 ngày trước' },
    { id: 5, label: '90 ngày trước' },
];

const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    const itemDate = new Date(`${year}-${month}-${day}`);
    return itemDate;
}

const scheduleFilter = (selectedItem, scheduleData) => {
    const numOfDate = selectedItem.id === 0 ? 7 : selectedItem.id === 1 ? 30 : selectedItem.id === 2 ? 90 : selectedItem.id === 3 ? -7 : selectedItem.id === 4 ? -30 : -90;
    const newScheduleData = scheduleData.filter((item) => {
        const itemDate = formatDate(item.date)
        const fromDate = new Date();
        const toDate = new Date();
        toDate.setDate(toDate.getDate() + numOfDate);
        if (numOfDate > 0) {
            return itemDate >= fromDate && itemDate <= toDate;
        } else {
            return itemDate <= fromDate && itemDate >= toDate;
        }
    })
    newScheduleData.sort((a, b) => formatDate(a.date) - formatDate(b.date));
    return newScheduleData;
}

const Schedule = () => {
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { userData } = useContext(AppContext);
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await AxiosInstance().get('schedule/listSchedules/' + userData.user[0].className);
            setScheduleData(scheduleFilter(selectedItem, res));
        }
        getData();
    }, [selectedItem]);


    const handleSelect = (item) => {
        setSelectedItem(item);
        setDialogVisible(false);
    };

    const handleCancel = () => {
        setDialogVisible(false);
    };

    const handlePress = (item) => {
        item.isExpanded = !item.isExpanded;
        const newData = [...scheduleData];
        setScheduleData(newData);
    }

    return (
        <View style={{ paddingTop: 16, paddingHorizontal: 12, flex: 1 }}>
            <TouchableOpacity style={{ marginBottom: 8 }} onPress={() => { setDialogVisible(true) }}>
                <DateSelect title={selectedItem ? selectedItem.label : setSelectedItem(dateData[0])} />
            </TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={scheduleData}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <ScheduleItem item={item} handlePress={handlePress} />} />
            <SelectDialog
                visible={isDialogVisible}
                data={dateData}
                onSelect={handleSelect}
                onCancel={handleCancel}
            />
        </View>
    )
}

export default Schedule