import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VideoRecorder from 'react-native-beautiful-video-recorder';
import RNFS from 'react-native-fs';
// import {RNCamera} from 'react-native-camera';

class RecordVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: "No File",
            availiable: false
        };
    }

     savefile(sourcePath, medianame) {
        let destinationPath = RNFS.PicturesDirectoryPath + '/' + medianame;
        RNFS.copyFile(sourcePath, destinationPath)
            .then(result => {
                console.log('file copied:', result);
            })
            .catch(err => {
                console.log("Erooro Produces",err);
            });
    }

    start = () => {
        // 30 seconds
        let url = "";
        this.videoRecorder.open({ maxLength: 30 }, (data) => {
            url = data.uri;
            url = url.slice(52);
            this.setState({ uri: RNFS.PicturesDirectoryPath + '/' + url, availiable: true })
            this.savefile(data.uri, url);
        });
    }

    render() {

        const { uri, availiable } = this.state;
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.startButton} onPress={this.start}>
                    <Text style={styles.startText}>Start</Text>
                </TouchableOpacity>
                <VideoRecorder ref={(ref) => { this.videoRecorder = ref; }} />
                {/* {this.state.availiable && <} */}
                <Text style={styles.startText}>File Saved on: {uri}</Text>
                <TouchableOpacity
                    disabled={!availiable}
                    style={styles.startButton}
                    onPress={() => (navigation.navigate('VideoFilter', {
                        external: uri
                    }))}>
                    <Text style={styles.startText}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default RecordVideo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    startText: {
        fontSize: 22,
        fontWeight: "900",
        textAlign: 'center',
        justifyContent: 'center'
    },
    startButton: {
        backgroundColor: "#24a0ed",
        width: "40%",
        height: 100,
        borderRadius: 80,
        marginTop: 20,
        marginBottom: 50,
        marginLeft: "30%",
        marginRight: "30%",
        alignItems: 'center',
        justifyContent: 'center'
    }
});

