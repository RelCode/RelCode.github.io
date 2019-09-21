(function(){
	"use strict";
	var $amount = document.getElementById("amount");
	var $share = document.getElementById("share");
	var $rate = document.getElementById("rate");
	var $details = document.getElementById("details");
	var $action = document.getElementById("action");

	//If a value is entered in #amount field trigger main calculate function
	$action.addEventListener("click", function(){
		startOp();
	}, false);

	function update(element,content, klass){
		var p = element.firstChild || document.createElement("p");
		p.innerHTML = content;
		element.appendChild(p);
		if(klass){
			p.className = klass;
		}
	}

	function startOp(){
		if($amount.value === '' || $share.value === '' || $rate.value === ''){
			var details = "Please Fill All The Fields"
			update($details,details);
		}else{
			var amount = $amount.value;
			var share = $share.value;
			var rate = $rate.value;
			validator(amount,share,rate);
		}
	}

	function validator(a,b,c){
		var patternNum = /[0-9]/;
		var patternABC = "none";
		var valid;
		if(patternNum.test(a) === true && patternNum.test(b) === true){
			if(patternABC !== c){
				calculate(a,b,c);
			}else{
				valid = "Please Select Rating From Dropdown Menu";
				update($details,valid);
			}
		}else{
			valid = "Please Provide Numerical Values";
			update($details,valid);
		}
	}

	function calculate(a,b,c){
		var perc;
		switch (c){
			case "bad":
				perc = 0.02;
				break;
			case "okay":
				perc = 0.05;
				break;
			case "good":
				perc = 0.10;
				break;
			case "great":
				perc = 0.15;
				break;
			case "stars":
				perc = 0.20;
				break;
			default:
				perc = "Please Select Rating";
				break;
		}
		var tip;
		var sharedTip;
		var receipt;
		//Check If Both #Amount and #Share Are Numbers!
		if(isNaN(a) || isNaN(b)){
			receipt = "Please Enter Correct Numerical Values";
		}else {
			tip = perc * a;
			receipt = "<h4>RECEIPT!!!</h4>";
			receipt += "Total Bill Cost: R "+ a +" </br>";
			//If Number Of People Sharing The Bill, Divide Tip
			if(b > 1){
				sharedTip = tip/b;
				receipt += "Bill Shared By " + b + " people </br>";
				receipt += "Total Tip Is: R " + sharedTip.toFixed(2) + " per person</br>";
			}else{
				receipt += "Total Tip: R " + tip.toFixed(2) + " </br>";
			}
			receipt += "</br>Thanks For Using This System";
		}
		update($details,receipt);
	}
}());