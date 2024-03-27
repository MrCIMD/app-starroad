import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AuthenticatedWithBottomTapsParamList, HOME_SCREEN, MAP_SCREEN, PROFILE_SCREEN } from '../navigation';
import ProfileScreen from '../screen/Authenticated/ProfileScreen';
import MapScreen from '../screen/Authenticated/MapScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator<AuthenticatedWithBottomTapsParamList>();

const TabsNavigation: FC = () => {
    return(
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={MAP_SCREEN}>
      <Tab.Screen  
      name={MAP_SCREEN} 
      component={MapScreen}
      options={{
        tabBarIcon: ({}) => (
          <Icon name='location-arrow' size={30} color="#42A5F5"/>
        )
      }}/>
      <Tab.Screen  
      name={PROFILE_SCREEN} 
      component={ProfileScreen}
      options={{
        tabBarIcon: ({}) => (
          <Icon name='user' size={30} color="#42A5F5"/>
        )
      }} />
    </Tab.Navigator>
    )
}

export default TabsNavigation;