import React from 'react';
import PropTypes from 'prop-types';
import {
    Picker as PickerIOS,
    View,
    Text
} from 'react-native';

const { Item } = PickerIOS;
const Picker = ({ title, data }) => (
    <View
        style={{
            width: '100%',
            position: 'relative'
        }}
    >
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <Text>取消</Text>
            <Text>{ title }</Text>
            <Text>确定</Text>
        </View>
        <View>
            <PickerIOS
                style={{ height: 50 }}
                onValueChange={ (itemValue, itemIndex) => console.log(itemValue, itemIndex) }
            >
                { data.map((item) => (<Item key={ item.value } label={ item.label } value={ item.value } />)) }
            </PickerIOS>
        </View>
    </View>
);

Picker.defaultProps = {
    title: ''
    // visible: false,
};

Picker.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired
    // visible: PropTypes.bool,
};
export default Picker;
