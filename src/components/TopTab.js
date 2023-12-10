import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTab = (props) => {
    const tabs = props.tabs;
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 14, color: '#fe930f' },
            tabBarIndicatorStyle: { backgroundColor: '#ffeb3c' }
        }}>
            {tabs.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.name} component={item.screen} />)
            })}
        </Tab.Navigator>
    )
}

export default TopTab