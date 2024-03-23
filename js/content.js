(() => {
    const target = (document.head || document.documentElement);

    // css
    const css = document.createElement('link');
    css.id = 'bettersdo_css';
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = chrome.runtime.getURL('bettersdo.css');
    css.disabled = true;
    target.appendChild(css);

    // // font ???
    // const font = document.createElement('link');
    // font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap';
    // font.rel = 'stylesheet';
    // target.appendChild(font);

    chrome.storage.local.get(["sdoThemeIsEnabled"]).then((result) => {
        css.disabled = !result.sdoThemeIsEnabled;
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
            css.disabled = result.sdoThemeIsEnabled;
        });
    });
})();

