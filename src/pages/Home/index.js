import React, { Fragment, useEffect } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    View,
    Text
    // TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Home = () => {
    useEffect(() => {
        // console.log('111');
    }, []);
    return (
        <Fragment>
            <SafeAreaView style={ styles.safe_area_view }>
                <View>
                    <Text>1234</Text>
                </View>
            </SafeAreaView>
        </Fragment>
    );
};

export default Home;
