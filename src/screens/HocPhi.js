import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HocTapItem from '../components/HocTapItem'
import AxiosInstance from '../apis/AxiosInstance'

const formattedData = (item) => {
  const date = new Date(item.createAt);
  const formattedDate = date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return { ...item, createAt: formattedDate };
};

const HocPhi = ({ navigation }) => {

  const [notifyData, setNotifyData] = useState([]);
  const [reloading, setReloading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let newData = [];
      const res = await AxiosInstance().get('news/listNews');
      res.forEach(item => {
        item.newsType === 'hocphi' ? newData.push(formattedData(item)) : null;
      });
      setNotifyData(newData.reverse());
    }
    getData();
    setReloading(false);
  }, [reloading]);

  const handlePress = (item) => {
    navigation.navigate('NewsDetail', item);
  }
  return (
    <View style={styles.body}>
      <FlatList
        refreshing={false}
        onRefresh={() => { setReloading(true) }}
        showsVerticalScrollIndicator={false}
        data={notifyData}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <HocTapItem item={item} handlePress={handlePress} />} >
      </FlatList>
    </View>
  )
}

export default HocPhi

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 15,
    backgroundColor: '##f8f4f4',
  },

})