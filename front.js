const { exec } = require('child_process');
exec('cd sec_frontend && npm start', (error, stdout, stderr) => {
    console.log("Initializing React");
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})