'use strict';

const timeDelays = process.argv.slice(2);
console.log(timeDelays);
if (process.argv.length <= 2) {
  return;
}

for (let i = 0; i < timeDelays.length; i++) {
  setTimeout(() => {
    if (timeDelays[i] > 0 && Number.isInteger(timeDelays[i])) {
      process.stdout.write('\x07');
    }
  }, timeDelays[i] * 1000);
}