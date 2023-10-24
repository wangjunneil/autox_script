"auto";
var common = require("common.js");

common.skeleton(
  "com.eg.android.AlipayGphone",
  10,
  1500,
  function () {
    console.log("进入蚂蚁森林");
    click("Ant Forest");
    sleep(5000);

    console.log("随机点击泡泡");
    click(221, 765);
    sleep(500);
    click(271, 729);
    sleep(500);
    click(344, 683);
    sleep(500);
    click(483, 647);
    sleep(500);
    click(522, 637);
    sleep(500);
    click(610, 639);
    sleep(500);
    click(744, 680);
    sleep(500);
    click(803, 733);
    sleep(500);
    click(898, 765);
    sleep(3000);

    console.log("检索他人能量");
    while (true) {
      if (
        className("android.widget.TextView").text("找能量共获得").exists() ||
        className("android.widget.TextView")
          .text("Find energy to get together")
          .exists() ||
        className("android.widget.TextView")
          .text("还有更多能量待你收取")
          .exists()
      ) {
        console.log("全部已找完");
        click(1013, 170);
        break;
      }

      click(1009, 1540);
      // className("android.widget.TextView").text("展开好友动态").waitFor();
      if (className("android.widget.TextView").text("展开好友动态").exists()) {
        sleep(2000);
        console.log("一键收");
        click(542, 1394);
        sleep(1000);
      }
    }
  },
  1,
  function () {
    click("Home");
    sleep(1000);
  }
);
