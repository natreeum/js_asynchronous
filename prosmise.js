let flag = true;

const promise = new Promise((res, rej) => {
  if (flag) {
    res('resolve 호출');
  } else {
    rej('reject 호출');
  }
});

const truePromiseRes = promise
  .then((resolveMsg) => {
    console.log(resolveMsg);

    return new Promise((res, rej) => {
      if (flag) {
        res('second resolve 호출');
      } else {
        rej('second reject 호출');
      }
    });
  })
  .catch((rejectMsg) => {
    console.log(rejectMsg);
  })
  .finally(() => {
    console.log('Finally');
  })
  .then((res2Msg) => {
    console.log(res2Msg);
  })
  .catch((rej2Msg) => {
    console.log(rej2Msg);
  });
