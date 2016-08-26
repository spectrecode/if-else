var num = prompt("Ingrese un número");
	if (num % 2 == 0 && num>=2 && num<=5) {
		alert("Good");
	}
		else if (num % 2 == 0 && num>=6 && num<=20) {
			alert("Great");
		}
		else if (num % 2 == 0 && num>=20) {
			alert("Perfect");
		}
		else {
			alert("Odd");
		}