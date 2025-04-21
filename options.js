document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["geminiApiKey"], ({ geminiApiKey }) => {
    // This is the fixed condition - only set the value if geminiApiKey EXISTS
    if (geminiApiKey) {
      document.getElementById("api-key").value = geminiApiKey;
    }
  });

  document.getElementById("save-button").addEventListener("click", () => {
    const apiKey = document.getElementById("api-key").value.trim();
    if (!apiKey) {
      alert("Please enter a valid API key.");
      return;
    }

    chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
      const successMessage = document.getElementById("success-message");
      successMessage.classList.add("visible");
      setTimeout(() => window.close(), 1000);
    });
  });
});
