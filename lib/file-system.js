const fs = require('fs');

const write = (file, data) => {
    fs.writeFileSync(file, data, (err) => {
        if (err) {
            console.log(err);
        }
    });
};

const read = (file) => {
    if (fs.existsSync(file)) {
        return fs.readFileSync(file, 'utf8', (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};

module.exports.write = write;
module.exports.read = read;
