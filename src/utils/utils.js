import moment from 'moment';
import Toast from 'react-native-root-toast';

const getTimeTips = () => {
    const hour = moment().format('HH');
    let tips = '';
    if (hour > 6 && hour < 11) {
        tips = '早上好';
    } else if (hour < 13) {
        tips = '中午好';
    } else if (hour < 18) {
        tips = '下午好';
    } else {
        tips = '晚上好';
    }
    return tips;
};

const ShowToast = (message, setting = {}) => {
    Toast.show(message, { position: 100, ...setting });
};

export {
    getTimeTips,
    ShowToast
};
