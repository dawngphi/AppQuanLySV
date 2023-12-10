import React from 'react';
import { Image, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTab = (props) => {
    const tabs = props.tabs;
    const screenWidth = Dimensions.get('screen').width;
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: { height: 64 },
            tabBarButton: ({ onPress, accessibilityState }) => {
                const tabSelected = accessibilityState.selected;
                const tabSelectedIndex = route.name === 'Trang chủ' ? 0 : route.name === 'Lịch học' ? 1 : route.name === 'Điểm' ? 2 : 3;
                if (tabSelected) {
                    return (
                        <TouchableOpacity
                            onPress={onPress}
                            style={{ width: screenWidth / 2 - 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#feebcb', borderRadius: 32, margin: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: screenWidth / 2 - 20 }}>
                                <Image
                                    source={tabs[tabSelectedIndex].icon}
                                    style={{ width: 24, height: 24 }} />
                                <Text style={{ color: '#f5961b', fontSize: 16 }}>
                                    {tabs[tabSelectedIndex].name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                } else {
                    return (
                        <TouchableOpacity
                            onPress={onPress}
                            style={{ width: screenWidth / 6, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Image source={tabs[tabSelectedIndex].iconOutline} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                    )
                }
            }
        })}>
            {tabs.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.name} component={item.screen} />)
            })}
        </Tab.Navigator>
    )
}

export default BottomTab