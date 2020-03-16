// ==UserScript==
// @name         TestJs
// @namespace    http://golbpw.wpblog.jp
// @description  webhook test
// @author       golbpw
// @license      MIT
// @homepageURL  https://github.com/golbpw
// @supportURL   https://gist.github.com/golbpw
// @grant        GM_getResourceText
// @grant        GM.getResourceUrl
// @resource     data https://raw.githubusercontent.com/golbpw/testjs/master/data.json?latest
// @include      *
// @version      1.0.16
// ==/UserScript==


(async () => {
	console.log('TestJs: github port test');

	const myData = JSON.parse(GM_getResourceText('data'));
	console.info('getResourceText', myData);

	const myDataUrl = await GM.getResourceUrl('data');
	console.info('getResourceUrl', myDataUrl);
})();
