
const disneyBtn = document.getElementById('disney');

disneyBtn.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true, });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: disneyScript,
  });
});

function disneyScript() {
  const videoPlayer = document.querySelector('video.btm-media-client-element');
  if (videoPlayer) {
    videoPlayer.style.objectFit = 'cover';
  }
}