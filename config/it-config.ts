import { IConfig } from './testrun-config';

export const config: IConfig = {
    baseUrl: {
        app: 'http://localhost:9091'
    },
    it: {
        resolutions: {
            LOW_RES: {width: 600, height: 800, string: '600x800'},
            NORMAL_RES: {width: 1280, height: 1024, string: '1280x1024'},
            HIGH_RES: {width: 3840, height: 2160, string: '3840x2160'}
        }
    }
};

export const LOW_RES = config.it.resolutions.LOW_RES;
export const NORMAL_RES = config.it.resolutions.NORMAL_RES;
export const HIGH_RES = config.it.resolutions.HIGH_RES;
