var cashAmount;

function getCost(price) {
	if(document.getElementById('choices').innerHTML == "Choose a soda.") {
		document.getElementById('screen').innerHTML = "VENDING";
	}
	else {
		var sodaPrice = price.getAttribute('data-price');
		document.getElementById('screen').innerHTML = '$'+sodaPrice;
	}
}

function insertCash() {
	var dollars = document.getElementById('dollars').value;
	var cents = document.getElementById('cents').value;
	if(dollars < 100 && cents < 100)
	{

		cashAmount = parseFloat(dollars+'.'+cents).toFixed(2);

		var money = document.getElementById('money');
		var choices = document.getElementById('choices');
		var sign = document.getElementById('$');
		var dol = document.getElementById('dollars');
		var period = document.getElementById('.');
		var cen = document.getElementById('cents');
		var cashButton = document.getElementById('insert_cash_button');

		money.style.transform = "translate(-375px, -230px)";
		
		setTimeout(function() {
			money.style.animation = "fade 1s linear";
			choices.style.animation = "fade 1s linear";
			sign.style.animation = "fade 1s linear";
			dol.style.animation = "fade 1s linear";
			period.style.animation = "fade 1s linear";
			cen.style.animation = "fade 1s linear";
			cashButton.style.animation = "fade 1s linear";
		}, 2000);
		
		setTimeout(function() {
			money.style.display = "none";
			choices.style.display = "none";
			sign.style.display = "none";
			dol.style.display = "none";
			period.style.display = "none";
			cen.style.display = "none";
			cashButton.style.display = "none";
			document.getElementById('choices').innerHTML = "Choose a soda.";
		}, 3000);
		
		setTimeout(function() {
			document.getElementById('screen').innerHTML = '$'+cashAmount;
			choices.style.display = "block";
		}, 3000);
	}
	else {
		document.getElementById('screen').innerHTML = 'ERROR';
	}
}