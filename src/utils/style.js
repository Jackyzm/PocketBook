// 公共样式/颜色
const commonRed = '#ff4d4f';
const commonYellow = '#faad14';
const commonGreed = '#52c41a';
const commonBlue = '#1890ff';

const fontColor = '#333';

const getPadding = (...rest) => {
    let obj = {};
    if (!rest.length) {
        throw Error('至少传入一个参数');
    };
    switch (rest.length) {
        case 1:
            obj = { padding: rest[0] };
            break;
        case 2:
            obj = {
                paddingTop: rest[0],
                paddingBottom: rest[0],
                paddingLeft: rest[1],
                paddingRight: rest[1]
            };
            break;
        case 3:
            obj = {
                paddingTop: rest[0],
                paddingBottom: rest[2],
                paddingLeft: rest[1],
                paddingRight: rest[1]
            };
            break;
        case 4:
            obj = {
                paddingTop: rest[0],
                paddingRight: rest[1],
                paddingBottom: rest[2],
                paddingLeft: rest[3]
            };
            break;
        default:
            return;
    }
    return obj;
};

export {
    commonRed,
    commonYellow,
    commonGreed,
    commonBlue,
    fontColor,
    getPadding
};
