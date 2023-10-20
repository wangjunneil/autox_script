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
  back();
  sleep(1000);
  home();
  device.cancelKeepingAwake();
  console.hide();
  sleep(1000);
  lockScreen();
}

function execute() {
  // 可能会有弹窗
  // if (id("af5").exists()) {
  //   id("af5").findOne().click();
  // }

  console.log("点击签到领钱");
  click(572, 390);
  sleep(3000);

  console.log("点击签到泡泡");
  click(488, 472);
  sleep(3000);
}

unlock();
console.info("签到-一淘");
var isStarted = startApp("com.taobao.etao");
sleep(5000);
if (isStarted) {
  console.log("应用启动");
  execute();
  console.log("应用关闭");
} else {
  console.error("启动失败");
}
shutdown();
