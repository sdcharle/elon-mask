let isEnabled = false;
let observer = null;

// Initialize the content script
function initialize() {
  chrome.runtime.sendMessage({ action: "getState" }, (response) => {
    isEnabled = response.isEnabled;
    console.log("Initial state:", isEnabled);
    if (isEnabled) {
      startObserving();
      maskElonContent();
    }
  });
}

// Start observing DOM changes
function startObserving() {
  if (!observer) {
    observer = new MutationObserver(maskElonContent);
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

// Stop observing DOM changes
function stopObserving() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

// Main content masking function
function maskElonContent() {
  const regex = /\belon\b/gi;

  const elements = document.body.getElementsByTagName('*');
  for (let element of elements) {
    if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
      if (regex.test(element.textContent)) {
        element.style.backgroundColor = 'black';
        element.style.color = 'black';
      }
    }
  }

  const images = document.getElementsByTagName('img');
  for (let img of images) {
    if ([...img.attributes].some(attr => regex.test(attr.value))) {
      img.style.filter = 'brightness(0%)';
    }
  }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "enable") {
    isEnabled = true;
    startObserving();
    maskElonContent();
  } else if (message.action === "disable") {
    isEnabled = false;
    stopObserving();
    // You might want to add a function to unmask content here
  }
});

// Initialize the content script
initialize();