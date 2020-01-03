import AsyncStorage from '@react-native-community/async-storage';

const SetAsyncStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // saving error
        console.log('setItem error', e);
    }
};

const MergeAsyncStorage = async (key, value) => {
    try {
        await AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (e) {
        // saving error
        console.log('setItem error', e);
    }
};

const GetAsyncStorage = async (key) => {
    let value;
    try {
        const result = await AsyncStorage.getItem(key);
        value = JSON.parse(result);
    } catch (e) {
        // saving error
        console.log('setItem error', e);
    }
    return value;
};

const GetMultipleAsyncStorage = async (keys) => {
    let values;
    try {
        const result = await AsyncStorage.multiGet(keys);
        values = result.map((item) => (JSON.parse(item)));
    } catch (e) {
        // read error
        console.log('multiGet error', e);
    }
    return values;
};

const RemoveAsyncStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        // saving error
        console.log('removeItem error', e);
    }
};

const ClearAllAsyncStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        // clear error
        console.log('clear error');
    }
};

export {
    SetAsyncStorage,
    MergeAsyncStorage,
    GetAsyncStorage,
    GetMultipleAsyncStorage,
    RemoveAsyncStorage,
    ClearAllAsyncStorage
};
