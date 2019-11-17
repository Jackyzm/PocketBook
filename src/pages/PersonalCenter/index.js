import React from 'react';
import {
    View, Text, SafeAreaView
} from 'react-native';
import styles from './styles';

const PersonalCenter = () => (
    <>
        <SafeAreaView style={ styles.safe_area_view }>
            <View style={ styles.container }>
                <Text>PersonalCenter</Text>
            </View>
        </SafeAreaView>
    </>
);
export default PersonalCenter;
