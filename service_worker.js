chrome.action.onClicked.addListener(tab => {
        chrome.scripting.executeScript({
                target: {tabId: tab.id},
                func: () => {
                    alert("Hello World!")
                    document.body.style.backgroundColor = "red";
                }
            }
    )
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == "complete" && tab.url.includes("amazon.com/checkout")){
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ["popup.js"]
        })
    }
})