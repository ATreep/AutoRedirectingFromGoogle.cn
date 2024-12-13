// ==UserScript==
// @name        Auto Redict Google.cn
// @match       https://*.google.cn/*
// @version 1.0
// ==/UserScript==

(function () {
	'use strict';
	// Get the current URL as a string
	const currentUrl = window.location.href;

	// Check if the URL contains "google.cn"
	if (currentUrl.includes("google.cn")) {
		// Replace "google.cn" with "google.com.hk"
		const newUrl = currentUrl.replace("google.cn", "google.com.hk");

		// Redirect to the new URL
		window.location.href = newUrl;
	}
})();
