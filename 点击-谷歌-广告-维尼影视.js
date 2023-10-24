"auto";
var common = require("common.js");

common.skeleton(
  "com.github.kr328.clash.foss",
  10,
  200,
  function () {
    if (
      id("text_view")
        .className("android.widget.TextView")
        .text("已停止")
        .exists()
    ) {
      console.log("启动代理");
      click("点此启动");
      sleep(1500);
    }

    console.log("打开维尼影视");
    app.openUrl("https://www.vinny.cc");
    sleep(5000);

    console.log("点击广告");
    swipe(530, 2000, 530, 1200, 1000);
    sleep(2000);
    click(537, 205);
    sleep(5000);
  },
  2,
  null
);
