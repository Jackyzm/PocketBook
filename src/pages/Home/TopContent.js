import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { commonBlue } from '@/utils/style';
import styles from './TopContentStyle';

const TopContent = () => (
    <LinearGradient colors={ [commonBlue, '#09a8fa'] } style={ styles.home_top_container }>
        <View style={ styles.home_top_content }>
            <Text>2020年1月</Text>
            <Text>支出</Text>
            <Text>同比上月</Text>
            <Text>收入</Text>
            <Text>同比上月</Text>
        </View>
    </LinearGradient>

);


export default TopContent;
