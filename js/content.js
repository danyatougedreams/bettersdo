(() => {
    const link = document.createElement('link');
    link.id = 'bettersdo_css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL('bettersdo.css');
    link.disabled = true;
    (document.head || document.documentElement).appendChild(link);

    chrome.storage.local.get(["sdoThemeIsEnabled"]).then((result) => {
        link.disabled = !result.sdoThemeIsEnabled;
    })

    chrome.runtime.onMessage.addListener(function (m, s) {
        if (!m.themeChanged) return;

        chrome.storage.local.get(["sdoThemeIsEnabled"]).then((result) => {
            if (result.sdoThemeIsEnabled == false) {
                chrome.storage.local.set({ sdoThemeIsEnabled: true })
            } else {
                chrome.storage.local.set({ sdoThemeIsEnabled: false })
            }

            // инвертировано, тк уже записали в хранилище
            link.disabled = result.sdoThemeIsEnabled;
        });
    });
})();

