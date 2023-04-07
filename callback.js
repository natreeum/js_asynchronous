function add5(num, callback) {
  // 100ms 후 함수로 입력받은 callback에 num + 5를 인자로 전달
  setTimeout(() => callback(num + 5), 1000);
}

add5(10, (res) => console.log(res));

// callback hell
add5(10, (res) => {
  add5(res, (res) => {
    add5(res, (res) => {
      add5(res, (res) => {
        add5(res, (res) => {
          add5(res, (res) => {
            console.log(res);
          });
        });
      });
    });
  });
});
