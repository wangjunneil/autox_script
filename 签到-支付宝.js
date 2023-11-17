"auto";
var common = require("common.js");

common.skeleton(
  "com.eg.android.AlipayGphone",
  10,
  70,
  function () {
    console.log("点击 Enter Alipay");
    click("Enter Alipay");
    sleep(5000);

    console.log("点击 Me");
    click("Me");
    sleep(5000);

    console.log("点击 Membership");
    click(756, 539);
    sleep(5000);

    console.log("点击 Get All");
    click("Get All");
    sleep(3000);

    click("Daily Sign-in");
    sleep(3000);

    var view = textStartsWith("You've signed for").findOne();
    console.log("完成签到，" + view.text());

    sleep(3000);
  },
  2,
  function () {
    click("Home");
  }
);
