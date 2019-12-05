import { StyleSheet } from 'react-native';
import { getPadding } from '@/utils/style';

const styles = StyleSheet.create({
    safe_area_view: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...getPadding(60, 40)
    },
    tips: { fontSize: 24, marginBottom: 20 },
    input_view: {
        ...getPadding(10, 0),
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    register_row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40
    },
    register_btn: {
        borderRadius: 4,
        height: 48,
        lineHeight: 48,
        fontSize: 18,
        width: '100%'
    }
});

export default styles;
