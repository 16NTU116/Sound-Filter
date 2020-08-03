import React, {Component} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

class Recording extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Recording"
                onPress={() => (this.props.navigation.navigate('recordlogic'))}>
                </Button>
                <Button title="Video Filter"
                onPress={() => (this.props.navigation.navigate('recordVideo'))}>
                </Button>
                {/* <Button>
                    <Text>Video Audio Mixing</Text>
                </Button> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "column"
    },
});


export default Recording;
