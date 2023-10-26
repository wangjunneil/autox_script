"auto";
var common = require("common.js");

common.skeleton(
  "com.smzdm.client.android",
  10,
  1500,
  function () {
    var i = 0;
    while (i > 3) {
      var clicked = id("tab_usercenter").findOne().click();
      if (clicked) {
        console.log("点击我的");
        break;
      } else {
        console.log('尝试"点击我的"第' + (i + 1) + "次");
        i++;
        back();
        sleep(2000);
      }
    }
    sleep(3000);
    i = 0;
    while (i > 3) {
      var clicked = click("签到领奖");
      if (clicked) {
        console.log("点击签到领奖");
        break;
      } else {
        console.log('尝试"点击签到领奖"第' + (i + 1) + "次");
        i++;
        back();
        sleep(2000);
      }
    }
    console.log("完成签到");
  },
  1,
  null
);
