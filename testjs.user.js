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
// @resource     data https://github.com/golbpw/testjs/raw/master/data.json?latest
// @include      *
// @version      1.0.20
// ==/UserScript==


const b64 = str => atob(str.replace(/^.+base64,|=+$/, ''));

(async () => {
	console.log('TestJs: github port test');

	const myData = JSON.parse(GM_getResourceText('data'));
	console.info('getResourceText:\n', myData);

	const myDataUrl = JSON.parse(b64(await GM.getResourceUrl('data')));
	console.info('getResourceUrl:\n', b64(myDataUrl));
})();
