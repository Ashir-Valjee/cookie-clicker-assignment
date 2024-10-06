// here you can write some functions that you can import to your components if you wish

export function updateLocalStorage(stats, storedStats) {
  localStorage.setItem(stats, JSON.stringify(storedStats));
}
export function getLocalStorage(stats) {
  return JSON.parse(localStorage.getItem(stats));
}

export function reset() {
  localStorage.clear();
  console.log("Local storage has been cleared.");
  window.location.reload();
}

// found this useful function on the internet
export function formatNumber(num) {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return num.toString();
  }
}
