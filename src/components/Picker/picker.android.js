import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Picker = ({ title, data }) => {
    const [top, setTop] = useState(0);
    const [startTop, setStartTop] = useState(0);
    const ScrollViewRef = useRef();

    // 滚动结束 滑动到具体到一项
    const onScrollEndDrag = ({ nativeEvent: { contentOffset: { y = 0 }}}) => {
        let newY = y;
        if (y % 32 === 0) return;
        const num = Math.floor(y / 32);
        if (-top < startTop) {
            newY = num * 32;
        } else {
            newY = (num + 1) * 32;
        }
        ScrollViewRef.current.scrollTo({
            x: 0,
            y: newY,
            animated: true
        });
    };

    // 点击某个item
    const clickItem = (num) => {
        ScrollViewRef.current.scrollTo({
            x: 0,
            y: num * 32,
            animated: true
        });
    };

    return (
        <View>
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
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: 200,
                    paddingTop: 20,
                    paddingBottom: 20
                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <ScrollView
                        ref={ ScrollViewRef }
                        showsVerticalScrollIndicator={ false }
                        scrollEventThrottle={ 10 }
                        onScroll={ ({ nativeEvent: { contentOffset: { y }}}) => setTop(-y) }
                        onScrollBeginDrag={ ({ nativeEvent: { contentOffset: { y }}}) => setStartTop(y) }
                        onScrollEndDrag={ onScrollEndDrag }
                        style={{
                            position: 'absolute',
                            top: 0,
                            zIndex: 5,
                            width: '100%',
                            height: 158 // padding 40 border 2
                        }}
                    >
                        <View
                            style={{
                                paddingTop: 64,
                                paddingBottom: 64
                            }}
                        >
                            { data.map((_, index) => (
                                <TouchableWithoutFeedback
                                    style={{ height: 32 }}
                                    key={ index }
                                    onPress={ () => clickItem(index) }
                                >
                                    <Text style={{ height: 32 }} />
                                </TouchableWithoutFeedback>
                            )) }
                        </View>
                    </ScrollView>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            zIndex: 3
                        }}
                    >
                        <LinearGradient
                            colors={ ['rgba(255,255,255,1)', 'rgba(255,255,255,0.5)'] }
                            style={{
                                position: 'absolute',
                                top: 0,
                                zIndex: 1,
                                width: '100%',
                                height: 64
                            }}
                        >
                            <View
                                style={{
                                    height: '100%',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ccc'
                                }}
                            />
                        </LinearGradient>
                        <LinearGradient
                            colors={ ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)'] }
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                height: 64
                            }}
                        >
                            <View
                                style={{
                                    height: '100%',
                                    borderTopWidth: 1,
                                    borderTopColor: '#ccc'
                                }}
                            />
                        </LinearGradient>
                    </View>
                    <View
                        style={{
                            paddingTop: 64,
                            paddingBottom: 64,
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top
                        }}
                    >
                        { data.map((item) => (
                            <View
                                style={{ height: 32 }}
                                key={ item.value }
                            >
                                <Text
                                    style={{
                                        lineHeight: 32,
                                        height: 32,
                                        textAlign: 'center'
                                    }}
                                >
                                    { item.label }
                                </Text>
                            </View>
                        )) }
                    </View>
                </View>
            </View>
        </View>

    );
};

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
