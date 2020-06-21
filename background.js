const HEADERS_TO_STRIP_LOWERCASE = [
  'content-security-policy',
  'x-frame-options',
];

// this page by default has a header that prevents inclusion in a frame
chrome.webRequest.onHeadersReceived.addListener(
	details => ({
	  responseHeaders: details.responseHeaders.filter(header =>
		  !HEADERS_TO_STRIP_LOWERCASE.includes(header.name.toLowerCase()))
	}),
	{
	  urls: ['https://messages.google.com/*']
	},
	['blocking', 'responseHeaders']
);
