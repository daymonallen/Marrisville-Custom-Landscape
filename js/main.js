let navStatus = 0;
function toggleNav() {
	if (navStatus == 0) {
		document.getElementById("side-menu").style.left = "0px";
		navStatus = 1;
	} else if (navStatus == 1) {
		document.getElementById("side-menu").style.left = "-200px";
		navStatus = 0;
	}
}