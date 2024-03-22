let changeTheme = document.getElementById('change-theme');

changeTheme.onclick = function (e) {
    chrome.tabs.query({}, tabs => {
        for (let tab of tabs) {
            chrome.tabs.sendMessage(tab.id, { 'themeChanged': true });
        }
    });
}