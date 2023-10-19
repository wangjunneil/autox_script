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
  click("Home");
  sleep(1000);
  home();
  device.cancelKeepingAwake();
  console.hide();
  sleep(1000);
  lockScreen();
  Power();
}

function execute() {
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

  console.log("等待 Daily Sign-in");
  className("android.widget.TextView").text("Daily Sign-in").waitFor();
  console.log("点击 Daily Sign-in");
  className("android.widget.TextView").text("Daily Sign-in").findOne().click();

  sleep(3000);
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
