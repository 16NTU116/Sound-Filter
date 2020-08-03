import React from 'react';
import Video, { FilterType } from 'react-native-video';
import { View, Button, ScrollView, Text } from 'react-native';
// import RNFS from 'react-native-fs';

export default function VideoPlayerScreen({ navigation, route }) {
    const { external } = route.params;
    const { filterType, setFilterType } = React.useState(FilterType.SEPIA);

    const changeFilter = filterType => {
        setFilterType(filterType)
    };

    return (
        <View style={{ flex: 1 }}>
            <Video
                controls
                paused
                filter={filterType}
                filterEnabled={true}
                source={{ uri: external }}
                style={{ height: 400 }}
            />
            <ScrollView>
                <Button
                    block
                    title='Change to MONOCHROME'
                    onPress={() => {
                        changeFilter(FilterType.MONOCHROME)
                    }}>
                </Button>
                <Button
                    block
                    title='Change to POSTERIZE'
                    onPress={() => {
                        changeFilter(FilterType.POSTERIZE)
                    }}>
                </Button>
                {
                console.warn(external)
                }
                <Button
                    block
                    title='Change to CHROME'
                    onPress={() => {
                        changeFilter(FilterType.CHROME)
                    }}>
                </Button>
                <Button
                    block
                    title='Change to FADE'
                    onPress={() => {
                        changeFilter(FilterType.FADE)
                    }}>
                </Button>
                <Button
                    block
                    title='Change to INSTANT'
                    onPress={() => {
                        changeFilter(FilterType.INSTANT)
                    }}>
                </Button>
                <Button
                    block
                    title='Change to PROCESS'
                    onPress={() => {
                        changeFilter(FilterType.PROCESS)
                    }}>
                </Button>
                <Button
                    block
                    title='Change to TONAL'
                    onPress={() => {
                        changeFilter(FilterType.TONAL)
                    }}>
                </Button>
                <Button
                    block
                    title='Change to SEPIA'
                    onPress={() => {
                        changeFilter(FilterType.SEPIA)
                    }}>
                </Button>
            </ScrollView>
        </View >
    );
}