"auto";
var common = require("common.js");

common.skeleton(
  "com.taobao.etao",
  10,
  1500,
  function () {
    var i = 0;
    while (i < 3) {
      if (text("签到领钱").exists()) {
        console.log("签到领钱");
        click(572, 390);
        sleep(3000);
        break;
      } else {
        i++;
        back();
        sleep(1500);
      }
    }

    console.log("签到泡泡");
    click(488, 472);
    sleep(3000);
    click(400, 472);
    sleep(3000);

    var view = textStartsWith("已连续").findOne();
    console.log("签到完成，" + view.text());
  },
  2,
  null
);
