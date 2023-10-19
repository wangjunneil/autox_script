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
      sleep(100);
    }
  }
}

function startApp() {
  console.show(true);
  console.setSize(device.width, 500);
  console.setPosition(0, 70);
  console.log("服务启动");

  // console.log('调整亮度');
  // device.setBrightness(10);

  console.log("静音模式");
  VolumeDown();
  VolumeDown();
  VolumeDown();
  VolumeDown();

  console.log("保持常亮");
  device.keepScreenOn(60 * 1000);

  console.log("打开头条应用");
  app.launchPackage("com.ss.android.article.lite");
  sleep(3000);
}

function shutdown() {
  console.log("服务退出");
  back();
  sleep(500);
  back();
  sleep(500);
  home();

  // 取消常亮
  // device.cancelKeepingAwake();
  sleep(100);

  lockScreen();
  Power();
}

/**
 * 开心收下
 * 当广告播放完成，点击“领取成功”后弹出
 */
function happyGetCoin() {
  className("com.lynx.tasm.behavior.ui.text.FlattenUIText")
    .text("开心收下")
    .waitFor();
  console.log("点击 [开心收下]");
  click(448, 1320);
  sleep(1000);
}

unlock();
startApp();

// 有时打开就显示“看视频再领取xx金币”
if (
  className("com.lynx.tasm.behavior.ui.text.FlattenUIText")
    .text("看视频再领")
    .exists()
) {
  console.log("点击看视频再领");
  click(353, 1459);

  className("com.lynx.tasm.behavior.ui.text.FlattenUIText")
    .text("领取成功")
    .waitFor();
  console.log("播放完成, 点击 [领取成功] 按钮");
  click(985, 137);

  happyGetCoin();
}

console.log("等待 [任务菜单] 控件");
id("kp").className("android.widget.TextView").text("任务").waitFor();
id("kp")
  .className("android.widget.TextView")
  .text("任务")
  .findOne()
  .parent()
  .click();
sleep(3000);

// 当天第一次访问任务菜单，可能会出现
if (text("直接领取").exists() || text("翻倍领取").exists()) {
  console.log("点击翻倍领取");
  click(570, 1509);

  console.log("播放广告, 等待 [领取成功] 按钮");
  className("com.lynx.tasm.behavior.ui.text.FlattenUIText")
    .text("领取成功")
    .waitFor();
  console.log("播放完成, 点击 [领取成功] 按钮");
  click(985, 137);

  // 开心收下
  happyGetCoin();
}

console.log("等待 [开宝箱得金币] 控件");
className("com.lynx.tasm.behavior.ui.text.UIText")
  .text("开宝箱得金币")
  .waitFor();
console.log("点击 [开宝箱得金币] 控件");
click(753, 1928);

// 若弹出“看视频领xxx金币”
console.log("等待 [看视频领xx金币] 控件");
className("com.lynx.tasm.behavior.ui.text.FlattenUIText")
  .text("看视频领")
  .waitFor();
console.log("点击 [看视频领xx金币] 控件");
click(354, 1459);

while (true) {
  console.log("播放广告, 等待 [领取成功] 按钮");
  className("com.lynx.tasm.behavior.ui.text.FlattenUIText")
    .text("领取成功")
    .waitFor();
  console.log("播放完成, 点击 [领取成功] 按钮");
  click(985, 137);

  // 开心收下
  happyGetCoin();

  // 出现“开视频再领取xx金币”
  if (
    className("com.lynx.tasm.behavior.ui.text.FlattenUIText")
      .textStartsWith("看视频再")
      .exists()
  ) {
    console.log("点击 [看视频再领xx金币] 控件");
    click(353, 1459);

    className("com.lynx.tasm.behavior.ui.text.FlattenUIText")
      .text("领取成功")
      .waitFor();
    console.log("播放完成, 点击 [领取成功] 按钮");
    click(985, 137);
  } else {
    break;
  }
}

console.log("开始休眠3秒");
sleep(3000);

// 退出应用
shutdown();