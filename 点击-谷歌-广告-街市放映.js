"auto";
var common = require("common.js");

function AD_TOP_PAGE() {
  console.log("点击广告 TOP PAGE");
  click(540, 1075);
  sleep(5000);
  return desc("关闭标签页").exists();
}

function AD_BOTTOM_PAGE() {
  console.log("点击广告 BOTTOM PAGE");
  swipe(530, 2200, 530, 800, 2000);
  swipe(530, 2200, 530, 800, 2000);
  swipe(530, 2200, 530, 800, 2000);
  click(512, 1998);
  sleep(5000);
  return desc("关闭标签页").exists();
}

function AD_RECENT() {
  console.log("点击广告RECENTS");
  recents();
  sleep(3000);
  click(543, 1214);
  sleep(3000);
  click(469, 720);
  sleep(5000);
  click(469, 1788);
  return desc("关闭标签页").exists();
}

common.skeleton(
  "com.github.kr328.clash.foss",
  10,
  70,
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

    var successd = AD_TOP_PAGE();
    if (!successd) {
      successd = AD_BOTTOM_PAGE();
      if (!successd) {
        successd = AD_RECENT();
        if (!successd) {
          console.error("广告点击失败");
        }
      }
    }

    sleep(5000);
  },
  2,
  null
);
