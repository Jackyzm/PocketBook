import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    View,
    Text
    // TouchableOpacity,
} from 'react-native';
import { NavBar } from '@/components';
import styles from './styles';

const Home = () => (
    <>
        <SafeAreaView style={ styles.safe_area_view }>
            <NavBar
                title="记账"
                bgColor="#f00"
                color="#fff"
                showBack={ false }
            />
            <View>
                <Text>1234</Text>
            </View>
        </SafeAreaView>
    </>
);

export default Home;
