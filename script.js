const btn = document.querySelectorAll(".close");
const buy = document.querySelectorAll(".buy");

btn[0].addEventListener("click", (e) => {
	buy[0].remove();
})


window.onclick = (e) => {
	if(e.target.matches(".buy")){
		buy[0].remove();
	}
}