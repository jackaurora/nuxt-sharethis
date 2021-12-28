export const addHighLight = (elStr, scroll = false) => {
	if(!elStr || elStr.length === 0) return 0;
	var el = document.createElement('div');
	el.innerHTML = elStr;
	el.firstChild.style.backgroundColor = scroll ? "#a7078663": "#ff000021";
	document.body.append(el)
	return parseInt(el.firstChild.style.top, 10);
}