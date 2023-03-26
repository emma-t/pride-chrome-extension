(function(){
	let s1 = 'linear-gradient(to left, violet, rgb(157, 83, 210), rgb(91, 220, 91), rgb(125, 163, 244), yellow, orange, red)';
	let s2 = 'linear-gradient(to left, rgb(124, 238, 255), pink, white, pink, rgb(124, 238, 255))';
	let s3 = 'linear-gradient(to left, black, purple, white, yellow)';
	let s4 = 'linear-gradient(to left, rgb(199, 36, 77), rgb(228, 73, 189), rgb(255, 163, 232), white, rgb(255, 164, 137), rgb(255, 130, 92), rgb(255, 90, 40))';
	let s5 = 'linear-gradient(to left, violet, rgb(157, 83, 210), rgb(91, 220, 91), rgb(125, 163, 244), yellow, orange, red)';

	let arr = [s1, s2, s3, s4, s5];

	
	textReplaceTag = ['p', 'h1', 'code', 'title', 'dd', 'h2', 'h3', 'h4', 'h5', 'h6', 'yt-formatted-string', 'td', 'th'];
	
	textReplaceClass = ['yt-simple-endpoint', 'style-scope ytd-watch-metadata', 'text-dark-gray text-semibold lh-title', 'inline-metadata-item style-scope ytd-video-meta-block', 'style-scope ytd-rich-grid-slim-media', 'yt-simple-endpoint style-scope yt-formatted-string'];
	
	for (e of textReplaceTag){
		colourTag(e);
	}
	
	for (e of textReplaceClass){
		colourClass(e);
	}
	
	function colourTag(s){
		let bigS = document.getElementsByTagName(s);
		for (elt of bigS) {
			elt.style['background-image'] = arr[Math.floor(Math.random()*5)];
			elt.style['-webkit-background-clip'] = 'text';
			elt.style['color'] = 'transparent';
		}
	}
	
	function colourClass(s){
		let bigS = document.getElementsByClassName(s);
		for (elt of bigS) {
			elt.style['background-image'] = arr[Math.floor(Math.random()*5)];
			elt.style['-webkit-background-clip'] = 'text';
			elt.style['color'] = 'transparent';
		}
	}
})();