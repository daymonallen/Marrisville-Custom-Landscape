let navStatus = 0;
function toggleNav() {
	if (navStatus == 0) {
		document.getElementById("side-menu").style.left = "0px";
		navStatus = 1;
	} else if (navStatus == 1) {
		document.getElementById("side-menu").style.left = "-100vw";
		navStatus = 0;
	}
}





/*
let sectionStatus = 0;
function sectionIn(el, pos) {
	if (sectionStatus == 0) {
	var elem = document.getElementById(el)
	elem.style.display = pos
	sectionStatus = 1
} else if (sectionStatus == 1) {
	el.style.marginLeft = none
}
*/
