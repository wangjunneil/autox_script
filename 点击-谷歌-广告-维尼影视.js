"auto";
var common = require("common.js");

function AD_TOP() {
  console.log("点击广告TOP");
  click(240, 188); // 顶部广告
  sleep(5000);
  return desc("关闭标签页").exists();
}

function AD_PAGE() {
  console.log("点击广告Page");
  click(950, 175);
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

    swipe(530, 2200, 530, 1000, 1000);
    sleep(1000);
    swipe(530, 2200, 530, 1000, 1000);
    sleep(1000);
    swipe(530, 2200, 530, 1000, 1000);
    sleep(1000);

    var successd = AD_TOP();
    if (!successd) {
      successd = AD_PAGE();
      if (!successd) {
        successd = AD_RECENT();
        if (!successd) {
          console.error("广告点击失败");
        }
      }
    }

    sleep(5000);
  },
  3,
  null
);
