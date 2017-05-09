const cp = require('child_process');
const path = require('path');
const util = require('util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const createWebpackServer = config => {
    const webpackConfig = require(config.webpackConfig);

    return new WebpackDevServer(webpack(webpackConfig), { quiet: false });
};

const getConfig = options => {
    let nightwatchConfig = path.resolve(process.cwd(), 'conf/nightwatch.conf.js');

    const config = Object.assign({
        nightwatchConfig,
        nightwatchEnv: 'chrome',
        webpackConfig: path.resolve(process.cwd(), 'conf/webpack.config.js'),
        port: 5000,
        tunnelIdentifier: undefined
    }, options);

    console.log(`Running with config:\n${util.inspect(config, { depth: 0, colors: true })}`);

    return Object.assign({}, config, {
        server: createWebpackServer(config)
    });
};

module.exports = options => {
    const config = getConfig(options);

    const startServer = callback => {
        config.server.listen(config.port, '0.0.0.0', callback);
    }

    const onServerStarted = seleniumChild => err => {
        if (err) {
            console.error(err.stack);
            process.exit(1);
        }

        const args = [
            '--config', config.nightwatchConfig,
            '--env', config.nightwatchEnv
        ];

        var spawn = require('cross-spawn');

        spawn('./node_modules/.bin/nightwatch', args, { stdio: 'inherit' })
            .on('error', err2 => {
                config.server.close();
                throw err2;
            })
            .on('exit', code => {
                config.server.close();
                process.exit(code);
            });
    };

    startServer(onServerStarted());
};
