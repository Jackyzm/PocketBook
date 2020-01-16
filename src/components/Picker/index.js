import React from 'react';
import { Platform } from 'react-native';
import AndroidPicker from './picker.android';
import IosPicker from './picker.ios';

const Picker = (props) => (Platform.OS === 'ios' ? <IosPicker { ...props } /> : <AndroidPicker { ...props } />);

export default Picker;
