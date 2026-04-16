var setupPangu = function() {
    if (typeof pangu !== 'undefined') {
        pangu.spacingElementByClassName("md-content");
    }
};

document.addEventListener("DOMContentLoaded", setupPangu);

/* 适配 MkDocs Material 的即时加载 (Instant Loading) */
if (typeof app !== "undefined" && app.document$) {
    app.document$.subscribe(function() {
        setupPangu();
    });
}
