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

function wait(n) {
  let count = n;
  const timer = setInterval(() => {
    console.log(count);
    count--;

    if (count === 0) {
      clearInterval(timer);
    }
  }, 1000);
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
  console.log("等待搜索框");
  id("jha").waitFor();

  console.log("点击搜索框");
  id("jha").findOne().click();
  sleep(1000);

  console.log("输入南京银行");
  setText("南京银行");
  sleep(1000);

  console.log("点击南京银行");
  click("南京银行N Card");
  sleep(5000);

  console.log("点击我的N世界");
  click(527, 1954);
  sleep(8000);

  console.log("点击立即签到");
  click(540, 2049);
  sleep(2000);

  console.log("点击N豆");
  click(331, 1032);
  sleep(2000);

  console.log("关闭小程序");
  click(1006, 160);
  sleep(500);
}

unlock();
console.info("签到-微信-南京信用卡");
var isStarted = startApp("com.tencent.mm");
sleep(5000);
if (isStarted) {
  console.log("应用启动");
  execute();
  console.log("应用关闭");
} else {
  console.error("启动失败");
}
shutdown();
