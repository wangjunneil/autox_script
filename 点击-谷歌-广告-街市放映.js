"auto";
var common = require("common.js");

common.skeleton(
  "com.github.kr328.clash.foss",
  10,
  1500,
  function () {
    if (
      id("text_view")
        .className("android.widget.TextView")
        .text("已停止")
        .exists()
    ) {
      console.log("启动代理");
      click("点此启动");
      sleep(1000);
    }

    console.log("打开街市放映");
    app.openUrl("https://www.jaskan.com");
    sleep(10000);

    console.log("点击广告");
    click(710, 1260);
    sleep(10000);
  },
  2,
  null
);
