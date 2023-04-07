function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function twoSec() {
  await delay(2000);
  return '2sec';
}

async function oneSec() {
  await delay(1000);
  return '1sec';
}

twoSec().then(console.log);
oneSec().then(console.log);
