var isClashStarted = app.launchPackage("com.github.kr328.clash.foss");
sleep(3000);
if (isClashStarted) {
  if (
    id("text_view").className("android.widget.TextView").text("已停止").exists()
  ) {
    click("点此启动");
  }
}

app.openUrl("https://www.jaskan.com");
sleep(10000);
// 点击广告
click(548, 1037);
sleep(5000);
back();
sleep(500);
back();
sleep(500);
home();
sleep(100);
lockScreen();