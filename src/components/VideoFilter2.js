import React, {Component} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {VESDK, VideoEditorModal, Configuration} from 'react-native-videoeditorsdk';

function Recording({ navigation, route }){
        const { external } = route.params;

        return (
            <View style={styles.container}>
                <Button title="Recording"
                    onPress={() => (VESDK.openEditor({uri:external}))}>
                </Button>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "column"
    },
});


export default Recording;
