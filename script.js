//your code here
document.getElementById("swap").addEventListener("click",swapTheme);

function swapTheme(){
	let div=document.getElementById("app");
	let btn=document.getElementById("swap");
	if(div.className=="day"){
		div.className="night";
		btn.className="button_night";
	}
	else{
		div.className="day";
		btn.className="button_day";
	}
}