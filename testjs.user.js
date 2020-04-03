// ==UserScript==
// @name         TestJs
// @namespace    http://golbpw.wpblog.jp
// @description  webhook test
// @author       golbpw
// @license      CC BY-NC-ND 4.0
// @homepageURL  https://github.com/golbpw
// @supportURL   https://github.com/golbpw/testjs/issues
// @grant        GM_getResourceText
// @grant        GM.getResourceUrl
// @resource     data https://golbpw.github.io/testjs/data.json
// @resource     icon https://golbpw.github.io/testjs/icon.png
// @resource     text https://golbpw.github.io/testjs/utf8.txt
// @include      *
// @version      1.0.36
// ==/UserScript==


const b64 = str => decodeURIComponent(escape(atob(str.replace(/^.+base64,|=+$/g, ''))));

(async () => {
	console.log('TestJs: github port test');

	const myData = JSON.parse(GM_getResourceText('data'));
//	console.info('getResourceText_json:\n', myData);

	const myIcon = await GM.getResourceUrl('icon');
//	console.log('icon.png:\n', myIcon);

	const myText = b64(await GM.getResourceUrl('text'));
//	console.info('getResourceUrl_text:\n', myText);

	unsafeWindow._testjs_ = {data: myData, icon: myIcon, text: myText};
})();
