import React, { useState, useCallback } from 'react';
import {
    View, Text, Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '@/actions/example';

const Example = () => {
    // console.log(props);
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(1);
    const [form, setForm] = useState({ user: 'admin', pwd: '111111' });
    const { user, pwd } = form;

    const count = useSelector((state) => state.example.count);

    const dispatch = useDispatch();

    const incrementAction = useCallback(() => dispatch(increment(form)), [
        dispatch,
        form
    ]);

    return (
        <View>
            <Text>Example</Text>
            <Text>{ count }</Text>
            <Text>{ `You clicked ${count} times` }</Text>
            <Button
                onPress={ () => dispatch(increment(form)) }
                title="Click me"
            />
            <Button
                onPress={ () => increment(form)(dispatch) }
                title="Click me"
            />
            <Button onPress={ () => incrementAction() } title="Click me" />
            <Text>{ `${user} | ${pwd}` }</Text>
            <Button
                onPress={ () => {
                    setForm({ ...form, user: 'user' });
                } }
                title="Click me"
            />
            { /* <Link to="/home">to Home</Link> */ }
        </View>
    );
};

export default Example;
