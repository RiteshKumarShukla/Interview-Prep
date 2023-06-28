function throttler(callback, delay) {
    let isThrottled = false; // Track whether the function is currently throttled

    return function (...args) {
        if (!isThrottled) {
            // Execute the callback immediately if not throttled
            callback.apply(this, args);
            isThrottled = true;

            // Set a timeout to release the throttle after the specified delay
            setTimeout(() => {
                isThrottled = false;
            }, delay);
        }
    };
}

// Example usage for a button onClick event
const button = document.getElementById("myButton");
const throttledButtonClick = throttler(() => {
    console.log("Button clicked!");
}, 1000);

button.addEventListener("click", throttledButtonClick);

// Example usage for a search bar input event
const searchBar = document.getElementById("searchBar");
const throttledSearch = throttler((event) => {
    const searchText = event.target.value;
    console.log("Search:", searchText);
}, 500);

searchBar.addEventListener("input", throttledSearch);
