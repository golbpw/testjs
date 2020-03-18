// ==UserScript==
// @name         TestJs
// @namespace    http://golbpw.wpblog.jp
// @description  webhook test
// @author       golbpw
// @license      CC BY-NC-ND 4.0
// @grant        GM_getResourceText
// @grant        GM.getResourceUrl
// @resource     data https://golbpw.github.io/testjs/data.json
// @resource     text https://golbpw.github.io/testjs/utf8.txt
// @include      *
// @version      1.0.28
// ==/UserScript==


const b64 = str => atob(str.replace(/^.+base64,|=+$/, ''));

(async () => {
	console.log('TestJs: github port test');

	const myData = JSON.parse(GM_getResourceText('data'));
	console.info('getResourceText_json:\n', myData);

	// const myDataUrl = b64(await GM.getResourceUrl('data'));
	// console.info('getResourceUrl:\n', myDataUrl);

	const myUTF8 = b64(await GM.getResourceUrl('text'));
	console.info('getResourceUrl_text:\n', myUTF8);
})();
