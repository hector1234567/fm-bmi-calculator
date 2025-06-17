self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("static").then(function (cache) {
      cache.addAll([
        "/",
        "/index.html",
        "/calculator.js",
        "/index.js",
        "/css/styles.css",
        "/assets/fonts/Inter-VariableFont_slnt,wght.ttf",
        "/assets/fonts/static/Inter-Regular.ttf",
        "/assets/fonts/static/Inter-SemiBold.ttf",
        "/assets/images/icon-age.svg",
        "/assets/images/icon-eating.svg",
        "/assets/images/icon-exercise.svg",
        "/assets/images/icon-gender.svg",
        "/assets/images/icon-muscle.svg",
        "/assets/images/icon-pregnancy.svg",
        "/assets/images/icon-race.svg",
        "/assets/images/icon-sleep.svg",
        "/assets/images/image-man-eating.webp",
        "/assets/images/logo.svg",
        "/assets/images/pattern-curved-line-left.svg",
        "/assets/images/pattern-curved-line-right.svg",
        "/assets/images/favicon-128x128.png",
        "/assets/images/favicon-256x256.png",
        "/assets/images/favicon-32x32.png",
        "/assets/images/favicon-512x512.png",
        "/assets/images/favicon-64x64.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  caches.match(event.request).then(function (response) {
    if (response) {
      return response;
    } else {
      return fetch(event.request);
    }
  });
});
