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