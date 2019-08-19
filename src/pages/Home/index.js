import React, { Fragment, useEffect } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    // View,
    // Text,
    // TouchableOpacity,
    StatusBar
} from 'react-native';
import { NavBar } from '@/components';
import styles from './styles';
import { commonBlue } from '@/utils/style';

const Home = (props) => {
    console.log(props);
    useEffect(() => {
        console.log('111');
    }, []);
    return (
        <Fragment>
            <StatusBar barStyle="light-content" backgroundColor={ commonBlue } />
            <SafeAreaView style={ styles.safe_area_view }>
                <NavBar
                    title="我爱记账"
                    bgColor={ commonBlue }
                    color="#fff"
                />
            </SafeAreaView>
        </Fragment>
    );
};

export default Home;
