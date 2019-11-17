import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { NavBar } from '@/components';
import styles from './styles';

const BookKeepingIndexPage = ({ navigation }) => {
    console.log('----', navigation);

    return (
        <SafeAreaView style={ styles.safe_area_view }>
            <NavBar
                title="记账"
                bgColor="#f00"
                color="#fff"
            />
            <View style={ styles.container }>
                <Text>BookKeepingIndexPage</Text>
            </View>
        </SafeAreaView>
    );
};

BookKeepingIndexPage.propTypes = { navigation: PropTypes.object };
export default BookKeepingIndexPage;
