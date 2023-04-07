const promise = (flag) =>
  new Promise((res, rej) => {
    if (flag) res('Fulfilled');
    else rej('Rejected');
  });

async function true_flag_async() {
  const flag = true;
  try {
    const result = await promise(flag);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

async function false_flag_async() {
  const flag = false;
  try {
    const result = await promise(flag);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

console.log(true_flag_async());
console.log(false_flag_async());
