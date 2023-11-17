"auto";
var common = require("common.js");

common.skeleton(
  "com.tencent.mm",
  400,
  300,
  function () {
    if (textStartsWith("你的微信号于").exists()) {
      console.log("其他设备登录提示");
      click("确定");
      sleep(1000);
    }

    if (id("iol").exists()) {
      console.log("切换登录方式");
      click("用密码登录");
      sleep(1000);

      id("d98").setText("zhang12345");
      sleep(1000);
      console.log("点击登录");
      id("iol").click();
    }

    // ----------------
    sleep(5000);
    if (text("通讯录").exists()) {
      console.log("等待搜索框");
      id("jha").waitFor();

      console.log("点击搜索框");
      id("jha").findOne().click();
      sleep(1000);

      console.log("输入南京银行");
      setText("南京银行");
      sleep(1000);

      console.log("点击南京银行");
      click("南京银行N Card");
      sleep(10000);

      click("我的");
      sleep(2000);

      click("首页");
      sleep(2000);

      console.log("点击我的N世界");
      click(527, 1954);
      sleep(8000);

      console.log("点击立即签到");
      click(540, 2049);
      sleep(2000);

      console.log("收下奖励");
      click(545,1782);
      sleep(2000);

      console.log("点击N豆");
      click(331, 1032);
      sleep(2000);

      console.log("关闭小程序");
      click(1006, 160);
      sleep(5000);
    }
  },
  1,
  null
);
