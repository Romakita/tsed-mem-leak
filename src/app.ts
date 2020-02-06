import { $log } from '@tsed/common';
import { conf } from './config/conf';
import { Server } from "./Server";

$log.level = conf.logger.level;
$log.appenders.set('stdout', {
	type: 'stdout',
	levels: ['info', 'debug'],
	layout: {
		type: 'pattern',
		pattern: conf.logger.format
	}
});

$log.appenders.set('stderr', {
	levels: ['trace', 'fatal', 'error', 'warn'],
	type: 'stderr',
	layout: {
		type: 'pattern',
		pattern: conf.logger.format
	}
});
new Server().start()