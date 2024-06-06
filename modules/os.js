const os = require('os');

// plataform win/mac/linux

console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home dir
console.log(os.homedir());

// up time
console.log(os.uptime());
