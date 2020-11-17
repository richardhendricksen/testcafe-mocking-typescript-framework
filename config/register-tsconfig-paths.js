const tsConfigPaths = require("tsconfig-paths");

/**
 * Helper method that can be used by our own TestCafe runners in order to append
 * a tsconfig file to the tsconfig file of the root of the runner. This is needed, because
 * TestCafe cannot handle tsconfig's aliases by default. See: https://github.com/DevExpress/testcafe/issues/4144
 */
const registerTsconfigPaths = (tsConfigPath) => {
    const tsConfig = require(tsConfigPath);
    if (tsConfig) {
        console.log(`Register tsconfig paths from: ${tsConfigPath}`);
        return tsConfigPaths.register({baseUrl: "./", paths: tsConfig.compilerOptions.paths});
    } else {
        return () => console.error(`Cannot resolve tsconfig file location: ${tsConfigPath}`);
    }
};

exports.registerTsconfigPaths = registerTsconfigPaths;
