// app.launchPackage("com.taobao.etao");

function channel(channelName) {
  //   var isClicked = textStartsWith(channelName).findOne().click();
  var isClicked = className("android.view.View")
    .text("浏览天猫超市频道 (0/1)")
    .findOne()
    .click();
  console.log(isClicked);
}

channel("浏览天猫超市频道");
