let squares = document.querySelectorAll(".square");

for(let i = 0; i < squares.length; i++){
	squares[i].addEventListener("mouseover", colorchange);
	squares[i].addEventListener("mouseout", colorrevert);
}

function colorchange(e) {
	for(let i = 0; i < squares.length; i++){
		if(squares[i] !== e.target){
			squares[i].style.backgroundColor = "#6F4E37";
		}
	}
}

function colorrevert(e) {
	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = "#E6E6FA";
	}
}