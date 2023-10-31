"auto";
var common = require("common.js");

common.skeleton(
  "com.smzdm.client.android",
  10,
  1500,
  function () {
    if (text("立即升级").exists()) {
      console.log("升级提示，关闭");
      back();
      sleep(1000);
    }

    var i = 0;
    while (i < 3) {
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
    while (i < 3) {
      if (textStartsWith("已签").findOne(3000)) {
        console.log("已签退出");
        sleep(2000);
        break;
      }

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

    var view = textStartsWith("已签").findOne();
    console.log("完成签到，" + view.text());
  },
  1,
  null
);
