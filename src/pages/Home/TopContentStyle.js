import { StyleSheet } from 'react-native';
import { getPadding } from '@/utils/style';

const styles = StyleSheet.create({
    // home_top_container: { height: 100 },
    home_top_content: {
        ...getPadding(20, 0),
        // flex: 1,
        // backgroundColor: 'transparent'
        color: '#fff'
        // backgroundColor: commonBlue
    },
    icon: {
        fontFamily: 'iconfont',
        // textAlign: 'center',
        fontSize: 28,
        lineHeight: 48
    }
});

export default styles;
