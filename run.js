const fs = require('fs')
const path = require('path')

const TEST_FOLDER = '1.2';
const INPUT_FILE = path.resolve(TEST_FOLDER, 'input.txt');

const code = require(`./${TEST_FOLDER}/code`);

if (fs.existsSync(INPUT_FILE)) {
    let content = fs.readFileSync(INPUT_FILE).toString();
    content = content.split('\n').filter(line => line);
    code.run(content);
}
