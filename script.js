const {execSync} = require('child_process');
const {existsSync,mkdirSync} = require('fs');
const {join, dirname} = require('path');

const aliases = {
  c: 'components',
  comp: 'components',
};

function main(group, element) {
  const dir = `${aliases[group] || group}/${element}`;
  const sourceDir = join(__dirname, dir);

  // prevent overwriting local files
  const targetDir = process.cwd() === __dirname ? join('tmp', dir) : dir;

  if (!existsSync(sourceDir)) {
    throw Error(`Directory "${sourceDir}" does not exist`)
  }

  mkdirSync(targetDir, {recursive: true});

  execSync(`cp -r "${sourceDir}" "${dirname(targetDir)}"`, {stdio: 'inherit'});

  process.stdout.write(`Copied.\n`);
}

main(process.argv[2], process.argv[3]);
