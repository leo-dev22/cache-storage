if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(() => console.log("sw registered"))
    .catch((err) => console.log(err));
}
