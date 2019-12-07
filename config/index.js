import devConfig from './dev';
import prodConfig from './prod';

const environment = 'DEV';

// eslint-disable-next-line
let config = {};

if (environment === 'DEV') {
    config = devConfig;
} else if (environment === 'PROD') {
    config = prodConfig;
}

export default config;
