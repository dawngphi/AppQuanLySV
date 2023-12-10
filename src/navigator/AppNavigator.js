import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Profile from '../screens/Profile';
import ScoreNavigator from './ScoreNavigator';
import ScheduleNavigator from './ScheduleNavigator';
import HomeNavigator from './HomeNavigator';
import Login from '../screens/Login';
import BottomTab from '../components/BottomTab';
import { NavigationContainer } from '@react-navigation/native';


const tabs = [{
    name: 'Trang chủ',
    screen: HomeNavigator,
    iconOutline: require('../assets/icons/home_outline_48.png'),
    icon: require('../assets/icons/home_48.png'),
}, {
    name: 'Lịch học',
    screen: ScheduleNavigator,
    iconOutline: require('../assets/icons/stack_outline_48.png'),
    icon: require('../assets/icons/stack_48.png')
}, {
    name: 'Điểm',
    screen: ScoreNavigator,
    iconOutline: require('../assets/icons/table_outline_48.png'),
    icon: require('../assets/icons/table_48.png')
}, {
    name: 'Tiện ích',
    screen: Profile,
    iconOutline: require('../assets/icons/person_outline_48.png'),
    icon: require('../assets/icons/person_48.png')
}]

const AppNavigator = () => {
    const { userData } = useContext(AppContext);
    return (
        <NavigationContainer>
            {userData != null ? <BottomTab tabs={tabs} /> : <Login />}
        </NavigationContainer>
    )
}

export default AppNavigator