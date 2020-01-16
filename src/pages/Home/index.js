import React, { useState } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    View,
    Text,
    Button,
    StatusBar,
    Platform
    // Modal
    // TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-community/picker';
import Picker from '@/components/Picker';
import { NavBar } from '@/components';
import TopContent from './TopContent';
import { commonBlue } from '@/utils/style';
import styles from './styles';

const Home = () => {
    const [show, setShow] = useState(false);
    // const deviceWidth = Dimensions.get('window').width;
    const data = [{
        label: '2015',
        value: '2015'
    }, {
        label: '2016',
        value: '2016'
    }];
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={ commonBlue } />
            <SafeAreaView style={ styles.safe_area_view }>
                <NavBar
                    title="记账"
                    showBack={ false }
                />
                <View style={ styles.home_container }>
                    <TopContent />
                    <View style={{ height: 50 }}>
                        <Button style={{ height: 50 }} onPress={ () => setShow(true) } title="Show date picker!" />
                    </View>
                    <Picker data={ data } />
                </View>
            </SafeAreaView>
            { /* <SafeAreaBottomView /> */ }
            { show && (
                Platform.OS === 'ios'
                    ? (
                        <Modal
                            isVisible={ show }
                            style={{ margin: 0, justifyContent: 'flex-end' }}
                            onBackdropPress={ () => setShow(false) }
                        >
                            <View style={{ backgroundColor: '#fff', padding: 20 }}>
                                <View>
                                    <Text>取消</Text>
                                    <Text>确定</Text>
                                </View>
                                <DateTimePicker
                                    value={ new Date('2020-06-12') }
                                    mode="date"
                                    // is24Hour
                                    display="default"
                                    locale="zh"
                                    onChange={ () => (Platform.OS === 'ios' ? null : setShow(false)) }
                                />
                            </View>
                        </Modal>
                    )
                    : (
                        <DateTimePicker
                            value={ new Date('2020-06-12') }
                            mode="date"
                            // is24Hour
                            display="spinner"
                            locale="zh"
                            onChange={ () => setShow(false) }
                        />
                    )
            ) }
        </>
    );
};

export default Home;
