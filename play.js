const connect = require('./client');

const connect = () => {
	const conn = net.createConnection({
		host: 'localhost',
		port: 50541,
	});

  console.log('Connecting...');

	conn.setEncoding('utf8');

	// detecting incoming data from the server then log the data
	conn.on('data', data => {
		console.log('you ded cuz you idled');
	});
	return conn;
};

console.log('Connecting ...');
connect();