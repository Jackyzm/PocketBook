import { StyleSheet } from 'react-native';
import { commonBlue } from '@/utils/style';

const styles = StyleSheet.create({
    safe_area_view: {
        flex: 1,
        backgroundColor: commonBlue
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
