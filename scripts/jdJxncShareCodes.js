let codes = ['{"smp":"1493079ef0dbd39f98cc8e33bad7268e","active":"jdnc_1_xiacheng210315_2","joinnum":1}
for (let i = 0; i < codes.length; i++) {
	const index = (i + 1 === 1) ? '' : (i + 1);
	exports['JxncShareCode.js' + index] = codes[i];
}