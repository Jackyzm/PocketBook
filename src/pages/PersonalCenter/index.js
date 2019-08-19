import React, { Fragment } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavBar } from '@/components';
import { commonBlue } from '@/utils/style';
import styles from './styles';

const PersonalCenter = () => (
    <Fragment>
        { /* <StatusBar barStyle="dark-content" backgroundColor={ commonBlue } /> */ }
        <SafeAreaView style={ styles.safe_area_view }>
            <NavBar title="我爱记账" bgColor={ commonBlue } color="#fff" />
            <View style={ styles.container }>
                <Text>PersonalCenter</Text>
            </View>
        </SafeAreaView>
    </Fragment>
);
export default PersonalCenter;
