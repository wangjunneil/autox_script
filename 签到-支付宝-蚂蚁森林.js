"auto";

function unlock() {
  if (!device.isScreenOn()) {
    device.wakeUp();
    sleep(500);
    swipe(500, 2000, 500, 1000, 210);
    sleep(500);
    var password = "134416";
    for (var i = 0; i < password.length; i++) {
      var p = text(password[i].toString()).findOne().bounds();
      click(p.centerX(), p.centerY());
      sleep(200);
    }
  }
}

function startApp(pgName) {
  console.show(true);
  console.setSize(400, 300);
  console.setPosition(10, 70);
  console.setBackgroud("#000000");

  device.keepScreenOn(60 * 1000);
  return app.launchPackage(pgName);
}

function shutdown() {
  back();
  sleep(1000);
  click("Home");
  sleep(1000);
  home();
  device.cancelKeepingAwake();
  console.hide();
  sleep(1000);
  lockScreen();
}

function execute() {
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
    if (className("android.widget.TextView").text("找能量共获得").exists()) {
      console.log("全部已找完");
      click(1013, 170);
      break;
    }

    click(1009, 1540);
    className("android.widget.TextView").text("展开好友动态").waitFor();
    console.log("一键收");
    click(542, 1394);
    sleep(1000);
  }
}

unlock();
console.info("签到-支付宝");
var isStarted = startApp("com.eg.android.AlipayGphone");
sleep(5000);
if (isStarted) {
  console.log("应用启动");
  execute();
  console.log("应用关闭");
} else {
  console.error("启动失败");
}
shutdown();
