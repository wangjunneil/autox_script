"auto";
var common = require("common.js");

common.skeleton(
  "com.taobao.etao",
  10,
  1500,
  function () {
    // 可能会有弹窗
    // if (id("af5").exists()) {
    //   id("af5").findOne().click();
    // }

    console.log("点击签到领钱");
    click(572, 390);
    sleep(3000);

    console.log("点击签到泡泡");
    click(488, 472);
    sleep(3000);
    click(400, 472);
    sleep(3000);
  },
  2,
  null
);
