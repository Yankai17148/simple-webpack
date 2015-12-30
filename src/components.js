'use strict'
function createTitle(){
	var el = document.createElement('h2');
	el.innerHTML = 'Hello world';
	return el;
}

module.exports = createTitle;