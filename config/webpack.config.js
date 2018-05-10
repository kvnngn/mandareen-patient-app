const chalk = require("chalk");
const fs = require('fs');
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;
if(env === 'prod' || env === 'dev') {
    useDefaultConfig[env].resolve.alias = {
        "@env": path.resolve(environmentPath())
    };

} else {
    useDefaultConfig[env] = useDefaultConfig.dev;
    useDefaultConfig[env].resolve.alias = {
        "@env": path.resolve(environmentPath())
    };

}

function environmentPath() {

    let filePath = './src/environments/environment' + (env === 'prod' ? '' : '.dev') + '.ts';
    if(!fs.existsSync(filePath)) {
        console.log(chalk.red('\n' + filePath + ' does not exist!'));
    } else {
        return filePath;
    }
}

module.exports = function() {
    return useDefaultConfig;
};

