import devConfig from './dev';
import prodConfig from './prod';

// eslint-disable-next-line
let config = {};

if (process.env.NODE_ENV === 'development') {
    config = devConfig;
} else if (process.env.NODE_ENV === 'production') {
    config = prodConfig;
}

export default config;
