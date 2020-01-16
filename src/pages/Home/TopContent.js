import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { commonBlue } from '@/utils/style';
import styles from './TopContentStyle';

const TopContent = () => (
    <LinearGradient colors={ [commonBlue, '#09a8fa'] } style={ styles.home_top_container }>
        <View style={ styles.home_top_content }>
            <Text>2020年1月</Text>
            <View>
                <Text>支出</Text>
                <View>
                    <Text>同比上月</Text>
                    <Text
                        style={ [
                            styles.icon,
                            { color: '#B2B2B2' }
                        ] }
                    >
                        &#xe67e;
                    </Text>
                </View>
            </View>
            <View>
                <Text>收入</Text>
                <View>
                    <Text>同比上月</Text>
                    <Text
                        style={ [
                            styles.icon,
                            { color: '#B2B2B2' }
                        ] }
                    >
                        &#xe67f;
                    </Text>
                </View>
            </View>
        </View>
    </LinearGradient>
);

export default TopContent;
