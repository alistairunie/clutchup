// ClutchUp moved to /overline/. This retires the old notification worker for anyone who had the old site open.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.registration.unregister()));
