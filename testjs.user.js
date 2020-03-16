// ==UserScript==
// @name         TestJs
// @namespace    http://golbpw.wpblog.jp
// @description  webhook test
// @author       golbpw
// @license      MIT
// @grant        GM_getResourceText
// @grant        GM.getResourceUrl
// @resource     data https://github.com/golbpw/testjs/raw/master/data.json
// @include      *
// @version      1.0.2
// ==/UserScript==


(async () => {
	console.log('TestJs: github port test');

	const myData = JSON.parse(GM_getResourceText(data));
	console.info('getResourceText', myData);

	const myDataUrl = await GM.getResourceUrl(data);
	console.info('getResourceUrl', myDataUrl);
})();
