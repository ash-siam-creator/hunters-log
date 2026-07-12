let wakeLock = null;

async function keepScreenAwake() {
    try {
        if ("wakeLock" in navigator && !wakeLock) {
            wakeLock = await navigator.wakeLock.request("screen");
            console.log("Screen will stay awake.");
        }
    } catch (err) {
        console.log(err);
    }
}

// Start keeping the screen awake as soon as the page loads
window.addEventListener("load", keepScreenAwake);

// If the user leaves the app and comes back, request it again
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        keepScreenAwake();
    }
});
