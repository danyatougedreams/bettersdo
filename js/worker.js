chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({}, tabs => {
        for (let tab of tabs) {
            chrome.tabs.sendMessage(tab.id, { 'themeChanged': true });
        }
    });
});