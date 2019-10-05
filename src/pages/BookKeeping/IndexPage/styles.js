import { StyleSheet } from 'react-native';
import { backgroundColor } from '@/utils/style';

const styles = StyleSheet.create({
    safe_area_view: { flex: 1, backgroundColor: '#fff' },
    container: {
        flex: 1,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
