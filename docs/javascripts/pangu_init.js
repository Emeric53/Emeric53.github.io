/* 盘古之白：自动在中日韩文字与西文/数字之间插入细间隔。
 * pangu.js 会自动跳过 <code>/<pre> 等，不会破坏代码。
 *
 * 适配 MkDocs Material 的即时加载（navigation.instant）：
 * 用 Material 暴露的全局 document$ 观察者，首次加载与每次翻页后都重新排版。
 */
function setupPangu() {
  if (typeof pangu !== "undefined") {
    pangu.spacingElementByClassName("md-content");
  }
}

if (typeof document$ !== "undefined" && document$.subscribe) {
  document$.subscribe(function () {
    setupPangu();
  });
} else {
  // 兜底：未开启即时加载或拿不到 document$ 时
  document.addEventListener("DOMContentLoaded", setupPangu);
}
