// Picture Automatic - Content Script
// Manages Picture in Picture for YouTube videos

const PIP_CONFIG = {
  enabled: true,
  autoActivate: true,
  videoSelectors: [
    'video',
    '.html5-main-video',
    '.video-stream'
  ]
};

// Get the video element
function getYouTubeVideo() {
  for (const selector of PIP_CONFIG.videoSelectors) {
    const video = document.querySelector(selector);
    if (video && video.duration > 0) {
      return video;
    }
  }
  return null;
}

// Activate Picture in Picture
async function activatePiP() {
  try {
    const video = getYouTubeVideo();
    if (!video) {
      console.log('[Picture Automatic] No video found');
      return;
    }

    // Check if video is playing
    if (video.paused) {
      console.log('[Picture Automatic] Video is paused, skipping PiP');
      return;
    }

    // Check if already in PiP
    if (document.pictureInPictureElement) {
      console.log('[Picture Automatic] Already in PiP');
      return;
    }

    // Activate PiP
    await video.requestPictureInPicture();
    console.log('[Picture Automatic] Picture in Picture activated');
  } catch (error) {
    console.error('[Picture Automatic] Error activating PiP:', error);
  }
}

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'activatePiP') {
    activatePiP();
    sendResponse({ status: 'PiP activation attempted' });
  }
});

// Monitor focus changes
window.addEventListener('blur', () => {
  if (PIP_CONFIG.autoActivate) {
    console.log('[Picture Automatic] Window lost focus');
    setTimeout(activatePiP, 100);
  }
});

console.log('[Picture Automatic] Content script loaded on:', window.location.href);
