// Picture Automatic - Background Service Worker
// Monitors system focus changes and triggers PiP activation

chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log('[Picture Automatic] Tab activated:', activeInfo.tabId);
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    console.log('[Picture Automatic] System focus lost, Safari is in background');
    // Get current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        // Send message to content script to activate PiP
        chrome.tabs.sendMessage(tabs[0].id, { action: 'activatePiP' }, (response) => {
          if (chrome.runtime.lastError) {
            console.log('[Picture Automatic] Error:', chrome.runtime.lastError.message);
          } else {
            console.log('[Picture Automatic] Message sent:', response);
          }
        });
      }
    });
  }
});

console.log('[Picture Automatic] Background service worker loaded');
