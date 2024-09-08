// background.js
let isEnabled = true; // Default state

// Initialize the state when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ isEnabled: isEnabled }, () => {
    console.log("Initial state set:", isEnabled);
    updateIcon(isEnabled);
  });
});

// Listen for icon clicks
chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(['isEnabled'], (result) => {
    isEnabled = !result.isEnabled;
    chrome.storage.local.set({ isEnabled: isEnabled }, () => {
      console.log("State updated:", isEnabled);
      updateIcon(isEnabled);
      notifyContentScripts(isEnabled);
    });
  });
});

// Update the icon based on the current state
function updateIcon(enabled) {
  const path = enabled ? {
    "16": "w-icons8-car-16.png",
    "48": "w-icons8-car-48.png",
    "128": "w-icons8-car-128.png"
  } : {
    "16": "icons8-car-16.png",
    "48": "icons8-car-48.png",
    "128": "icons8-car-128.png"
  };
  chrome.action.setIcon({ path: path });
}

// Notify all tabs about the state change
function notifyContentScripts(enabled) {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { action: enabled ? "enable" : "disable" });
    });
  });
}

// Respond to content script requests for the current state
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getState") {
    chrome.storage.local.get(['isEnabled'], (result) => {
      sendResponse({ isEnabled: result.isEnabled });
    });
    return true; // Indicates that the response is asynchronous
  }
});