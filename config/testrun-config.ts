export class TestrunConfig {

    static currentConfig: IConfig;

    static setConfig(config: IConfig): void {
        this.currentConfig = config;
    }

    static getConfig(): IConfig {
        return this.currentConfig;
    }
}

export interface IConfig {
    baseUrl: {
        app: string;
    };
    e2e?: {
        [key: string]: any;
    };
    it?: {
        [key: string]: any;
    };
}
