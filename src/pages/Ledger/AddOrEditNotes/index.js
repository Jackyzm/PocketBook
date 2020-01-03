import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { NavBar, SafeAreaBottomView } from '@/components';
import { commonBlue } from '@/utils/style';
import styles from './styles';

const BookKeepingIndexPage = ({ navigation }) => {
    console.log('----', navigation);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={ commonBlue } />
            <SafeAreaView style={ styles.safe_area_view }>
                <NavBar title="记账" />
                <View style={ styles.container }>
                    <Text>BookKeepingIndexPage</Text>
                </View>
            </SafeAreaView>
            <SafeAreaBottomView />
        </>
    );
};

BookKeepingIndexPage.propTypes = { navigation: PropTypes.object };
export default BookKeepingIndexPage;
