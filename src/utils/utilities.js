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
