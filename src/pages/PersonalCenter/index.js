import React, { Fragment } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';

const PersonalCenter = () => (
    <Fragment>
        <SafeAreaView style={ styles.safe_area_view }>
            <View style={ styles.container }>
                <Text>PersonalCenter</Text>
            </View>
        </SafeAreaView>
    </Fragment>
);
export default PersonalCenter;
