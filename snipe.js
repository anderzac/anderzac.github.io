function onl(){
	try{
		document.getElementById("ctl00_Content_HoldButton").click();
	}catch (e){}
	var win = window.open("https://sasapps.byu.edu/secure/services/family/apartment.aspx?apt=300&area_type=WT", "_self");
	win.onload = onl;
}