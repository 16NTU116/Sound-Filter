import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import theme from './utils/Theme';
import Recording from './screens/Recording';
import Effects from './screens/Effects';
import FrontScreen from './screens/FrontScreen';
import RecordVideo from './screens/RecordVideo';
import VideoFilter from './components/VideoFilter';
// import VideoFilter from './components/VideoFilter2';
import RecordLogic from './components/RecordLogic';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <Stack.Navigator initialRouteName={'record'}>
                    <Stack.Screen name="front" component={FrontScreen} options={{title: 'Front'}}/>
                    <Stack.Screen name="record" component={Recording} options={{title: 'Record'}}/>
                    <Stack.Screen name="effects" component={Effects} options={{title: 'Effects'}}/>
                    <Stack.Screen name="recordlogic" component={RecordLogic} options={{title: 'Recording'}}/>
                    <Stack.Screen name="recordVideo" component={RecordVideo} options={{title: 'Video Recording'}}/>
                    {/* <Stack.Screen name="VideoFilter" component={VideoFilter} options={{title: 'Video Filtering'}}/> */}
                    <Stack.Screen name="VideoFilter" component={VideoFilter} options={{title: 'Video Filtering'}}/>
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}
