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
  console.setSize(400, 200);
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
  console.log("打开街市放映");
  app.openUrl("https://www.jaskan.com");
  sleep(10000);

  console.log("点击广告");
  click(710, 1260);
  sleep(10000);
}

unlock();
console.info("点击-谷歌-广告-街市放映");
var isStarted = startApp("com.github.kr328.clash.foss");
sleep(5000);
if (isStarted) {
  if (
    id("text_view").className("android.widget.TextView").text("已停止").exists()
  ) {
    console.log("启动代理");
    click("点此启动");
  }

  console.log("应用启动");
  execute();
  console.log("应用关闭");
} else {
  console.error("启动失败");
}
shutdown();
