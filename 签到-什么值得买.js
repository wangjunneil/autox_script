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

    if (!id("tab_usercenter").exists()) {
      console.log("弹窗广告，关闭");
      back();
      sleep(2000);
    }

    console.log("点击我的");
    id("tab_usercenter").findOne().click();
    sleep(2000);
    
    if(!text("种草小公主").exists()) {
        back();
        sleep(2000);
    }

    if (textStartsWith("已签").findOne(3000)) {
      console.log("已签退出");
      sleep(2000);
    } else {
      console.log("点击签到领奖");
      click("签到领奖");
      sleep(2000);

      if (id("iv_close").exists()) {
        console.log("关闭提示");
        id("iv_close").findOne().click();
        sleep(1000);
        back();
      }
    }

    var view = textStartsWith("已签").findOne();
    console.log("完成签到，" + view.text());
  },
  1,
  null
);
