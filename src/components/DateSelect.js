import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DateSelect = (props) => {
    const title = props.title;
    return (
        <View style={{ height: 56, backgroundColor: 'white', borderRadius: 10, elevation: 5 }}>
            <View style={{ borderRadius: 8, borderWidth: 1, borderColor: '#e8e8e8', flex: 1, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black' }}>{title}</Text>
            </View>
        </View>
    )
}

export default DateSelect