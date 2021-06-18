#!/usr/bin/env node

import meow from 'meow';
import notifier from 'node-notifier';

const cli = meow({
	importMeta: import.meta
});

const [time = 25] = cli.input;

if (Number.isNaN(time)) {
	console.log('Invalid time input');
	process.exit(1);
}

setTimeout(() => {
	notifier.notify({
		title: 'Tometo',
		message: 'Time\'s up'
	});
}, Number(time) * 1000 * 60);
