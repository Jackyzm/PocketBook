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
    }
});

export default styles;
