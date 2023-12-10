import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const NewsDetail = ({ navigation }) => {

    const item = useRoute().params;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 64, flexDirection: 'row', paddingHorizontal: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fe930f' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={require('../assets/icons/arrow_back_48.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', marginRight: 24, fontWeight: 'bold', fontSize: 18, color: 'white' }}>
                    {item.newsType === 'hoctap' ? 'Học Tập' : item.newsType === 'hoatdong' ? 'Hoạt Động' : 'Học Phí'}
                </Text>
            </View>
            <Text style={{ color: 'orange', fontSize: 18, fontWeight: 'bold', textAlign: 'center', padding: 16 }}>
                {item.title}
            </Text>
            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 16 }}>
                {item.content.split('\\n').map((line, index) => (
                    <View key={index}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            {line}
                        </Text>
                    </View>
                ))}
            </ScrollView>
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    {'Người đăng: ' + item.createBy}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    {'Thời gian: ' + item.createAt}
                </Text>
            </View>
        </View>
    )
}

export default NewsDetail