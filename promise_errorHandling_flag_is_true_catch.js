const success = () => {
  console.log('Fulfilled');
};
const fail = () => {
  console.log('Rejected');
};

let flag = true;

const promise = new Promise((res, rej) => {
  if (flag) res();
  else rej();
});

promise.then(success).catch(fail);
