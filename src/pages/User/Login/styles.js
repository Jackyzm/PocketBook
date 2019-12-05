import { StyleSheet } from 'react-native';
import {
    getPadding,
    commonBlue
} from '@/utils/style';

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
    registered_forget_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...getPadding(16, 0),
        alignItems: 'center'
    },
    registered_row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    registered_btn: {
        backgroundColor: '#fff',
        color: commonBlue,
        width: 80
    },
    login_row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    login_btn: {
        borderRadius: 4,
        height: 48,
        lineHeight: 48,
        fontSize: 18,
        width: '100%'
    }
});

export default styles;
