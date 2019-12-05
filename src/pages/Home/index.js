import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar
    // TouchableOpacity,
} from 'react-native';
import { NavBar, SafeAreaBottomView } from '@/components';
import styles from './styles';
import { commonBlue } from '@/utils/style';

const Home = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor={ commonBlue } />
        <SafeAreaView style={ styles.safe_area_view }>
            <NavBar
                title="记账"
                showBack={ false }
            />
            <View style={ styles.container }>
                <Text>1234</Text>
            </View>
        </SafeAreaView>
        <SafeAreaBottomView />
    </>
);

export default Home;
