let isEnabled = true; // Track whether the extension is enabled or not

chrome.action.onClicked.addListener((tab) => {
    isEnabled = !isEnabled; // Toggle the enabled state

    // Update the icon to reflect the enabled/disabled state
    chrome.action.setIcon({
        path: {
            "16": isEnabled ? "w-icons8-car-16.png" : "icons8-car-16.png",
            "48": isEnabled ? "w-icons8-car-48.png" : "icons8-car-48.png",
            "128": isEnabled ? "w-icons8-car-128.png" : "icons8-car-128.png"
        }
    });
    
    // Send a message to the content script to enable/disable it
    chrome.tabs.sendMessage(tab.id, { action: isEnabled ? "enable" : "disable" });
});
