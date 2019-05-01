const { fork } = require('child_process');
fork('./back.js', [], {detached: true});
fork('./front.js', [], {detached: true});
