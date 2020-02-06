"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const conf_1 = require("./config/conf");
const Server_1 = require("./Server");
common_1.$log.level = conf_1.conf.logger.level;
common_1.$log.appenders.set('stdout', {
    type: 'stdout',
    levels: ['info', 'debug'],
    layout: {
        type: 'pattern',
        pattern: conf_1.conf.logger.format
    }
});
common_1.$log.appenders.set('stderr', {
    levels: ['trace', 'fatal', 'error', 'warn'],
    type: 'stderr',
    layout: {
        type: 'pattern',
        pattern: conf_1.conf.logger.format
    }
});
new Server_1.Server().start();
//# sourceMappingURL=app.js.map