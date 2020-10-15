export const config = {
  baseUrl: 'http://localhost:9091',
  resolutions: {
    LOW_RES: {width: 600, height: 800, string: '600x800'},
    NORMAL_RES: {width: 1280, height: 1024, string: '1280x1024'},
    HIGH_RES: {width: 3840, height: 2160, string: '3840x2160'}
  }
};

export const LOW_RES = config.resolutions.LOW_RES;
export const NORMAL_RES = config.resolutions.NORMAL_RES;
export const HIGH_RES = config.resolutions.HIGH_RES;
