#!/usr/bin/env node
'use strict';

const meow = require('meow');
const notifier = require('node-notifier');

const cli = meow();

const [time = 25] = cli.input;

if (isNaN(time)) {
	console.log('Invalid time input');
	process.exit(1);
}

setTimeout(() => {
	notifier.notify({
		title: 'Tometo',
		message: 'Time\'s up'
	});
}, Number(time) * 1000 * 60);
