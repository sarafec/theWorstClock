//initially run through markings functionality based on current time
let initApp = function(){
	let currentDate = new Date();

	return getCurrentTime(currentDate);
} 

//repeat the markings functionality every minute to update clock
let repeatApp = window.setInterval(function(){
	let currentDate = new Date();

	return getCurrentTime(currentDate);
}, 60000);

//perform operations to find the current time
function getCurrentTime(date){
	let currentDateString = date.toString();
	let currentDateArr = currentDateString.split(" ");
	let currentTime = currentDateArr[4];
	let currentTimeArr = currentTime.split(":");
	let currentHour = currentTimeArr[0];
	let currentMinute = currentTimeArr[1];

	return defineMinuteMark(currentMinute, currentHour);
}

//add correct markings to the markingsArr based on the current minute
function defineMinuteMark(minute, hour){
	if(minute > 59){
		handleClockError();
	}
	let zeroToFour = minute < 5;
	let fiveToNine = (minute > 4) && (minute < 10);
	let tenToFourteen = (minute > 9) && (minute < 15); 
	let fifteenToNineteen = (minute > 14) && (minute < 20);
	let twentyToTwentyNine = (minute > 19) && (minute < 30);
	let thirtyToThirtyNine = (minute > 29) && (minute < 40);
	let fortyToFortyFour = (minute > 39) && (minute < 45);
	let fortyFiveToFortyNine = (minute > 44) && (minute < 50);
	let fiftyToFiftyFour  = (minute > 49) && (minute < 55);
	let fiftyFiveToFiftyNine = (minute > 54) && (minute < 60);

	let minuteArr = [];
	let currentHour = +hour;

	let halfDescription = document.querySelector(".half-description");
	let tenDescription = document.querySelector(".ten-description");
	let quarterDescription = document.querySelector(".quarter-description");
	let twentyDescription = document.querySelector(".twenty-description");
	let fiveDescription = document.querySelector(".five-description");
	let minutesDescription = document.querySelector(".minutes-description");
	let toDescription = document.querySelector(".to-description");
	let pastDescription = document.querySelector(".past-description");

	switch(true){
		case zeroToFour:
			break;
		case fiveToNine: 
			minuteArr.push(fiveDescription);
			minuteArr.push(minutesDescription);
			minuteArr.push(pastDescription);
			break;
		case tenToFourteen:
			minuteArr.push(tenDescription);
			minuteArr.push(minutesDescription);
			minuteArr.push(pastDescription);
			break;
		case fifteenToNineteen:
			minuteArr.push(quarterDescription);
			minuteArr.push(pastDescription);
			break;
		case twentyToTwentyNine:
			minuteArr.push(twentyDescription);
			minuteArr.push(minutesDescription);
			minuteArr.push(pastDescription);
			break;
		case thirtyToThirtyNine:
			minuteArr.push(halfDescription);
			minuteArr.push(pastDescription);
			break;
		case fortyToFortyFour:
			minuteArr.push(twentyDescription);
			minuteArr.push(minutesDescription);
			minuteArr.push(toDescription);
			currentHour += 1;
			break;
		case fortyFiveToFortyNine:
			minuteArr.push(quarterDescription);
			minuteArr.push(toDescription);
			currentHour += 1;
			break;
		case fiftyToFiftyFour:
			minuteArr.push(tenDescription);
			minuteArr.push(minutesDescription);
			minuteArr.push(toDescription);
			currentHour += 1;
			break;
		case fiftyFiveToFiftyNine:
			minuteArr.push(fiveDescription);
			minuteArr.push(minutesDescription);
			minuteArr.push(toDescription);
			currentHour += 1;
			break;
	}

	return defineHourMark(minuteArr, currentHour);

}

//add correct svg text elements to the markingsArr based on the current hour
function defineHourMark(markingsArr, hour){
	if(hour > 26){
		handleClockError();
	} else if (hour === 25){
		hour = 1;
	} else if (hour > 12){
		hour = hour - 12;
	} else if (hour === 0){
		hour = 12;
	}

	switch(hour){
		case 1:
			markingsArr.push(document.querySelector(".one-time"));
			break;
		case 2:
			markingsArr.push(document.querySelector(".two-time"));
			break;
		case 3: 
			markingsArr.push(document.querySelector(".three-time"));
			break;
		case 4:
			markingsArr.push(document.querySelector(".four-time"));
			break;
		case 5:
			markingsArr.push(document.querySelector(".five-time"));
			break;
		case 6:
			markingsArr.push(document.querySelector(".six-time"));
			break;
		case 7:
			markingsArr.push(document.querySelector(".seven-time"));
			break;
		case 8:
			markingsArr.push(document.querySelector(".eight-time"));
			break;
		case 9:
			markingsArr.push(document.querySelector(".nine-time"));
			break;
		case 10:
			markingsArr.push(document.querySelector(".ten-time"));
			break;
		case 11:
			markingsArr.push(document.querySelector(".eleven-time"));
			break;
		case 12:
			markingsArr.push(document.querySelector(".twelve-time"));
			break;
	}


	return changeClockMarkings(markingsArr);
}

//changes fill and outline based on what elements are in the markingsArr
function changeClockMarkings(markingsArr){
	removePreviousMarkings();

	for(let i = 0; i < markingsArr.length; i++){
		markingsArr[i].setAttribute("fill", "#e3408e");
		markingsArr[i].setAttribute("stroke", "#e3408e");
	}

	return repeatApp;
}

//removes previous fill and outline from svg text
function removePreviousMarkings(){
	let clockAreaText = document.querySelectorAll("text");

	for(let i = 1; i < clockAreaText.length; i++){
		clockAreaText[i].setAttribute("fill", "none");
		clockAreaText[i].setAttribute("stroke", "black");
	}

}

function handleClockError(){
	//you should add a 404 type page or redirect
	console.log("Something went wrong");
}



window.setTimeout(function(){
//events for footer buttons
document.querySelector(".btn-why").addEventListener("click", function(){
	return makeWhyVisible();
});
document.querySelector(".btn-why").addEventListener("touchstart", function(){
	return makeWhyVisible();
});
document.querySelector(".btn-why").addEventListener("keyup", function(evt){
	if(evt.which === 13){
		return makeWhyVisible();
	}
});


document.querySelector(".modal-why").addEventListener("click", function(){
	return makeWhyVisible();
});
document.querySelector(".modal-why").addEventListener("touchstart", function(){
	return makeWhyVisible();
});
document.querySelector(".modal-why").addEventListener("keyup", function(evt){
	if(evt.which === 13){
		return makeWhyVisible();
	}
});

document.querySelector(".btn-time").addEventListener("click", function(){
	return makeTimeVisible();
});
document.querySelector(".btn-time").addEventListener("touchstart", function(){
	return makeTimeVisible();
});
document.querySelector(".btn-time").addEventListener("keyup", function(evt){
	if(evt.which === 13){
		return makeTimeVisible();
	}
});

document.querySelector(".modal-time").addEventListener("click", function(){
	return makeTimeVisible();
});
document.querySelector(".modal-time").addEventListener("touchstart", function(){
	return makeTimeVisible();
});
document.querySelector(".modal-time").addEventListener("keyup", function(evt){
	if(evt.which === 13){
		return makeTimeVisible();
	}
});
}, 1000);

//makes why does this exist footer visible or invisible
function makeWhyVisible(){
	let whyModal = document.querySelector(".modal-why");
	whyModal.style.visibility = (whyModal.style.visibility == "visible") ? "hidden" : "visible";

}

//makes what time is it footer visible or invisible
function makeTimeVisible(){
	let timeModal = document.querySelector(".modal-time");
	timeModal.style.visibility = (timeModal.style.visibility == "visible") ? "hidden" : "visible";
	return setCurrentTime();
}

//calculates and appends the current tiem to the time modal window
function setCurrentTime(){
	let thisTime = new Date();

	let currentDateString = thisTime.toString();
	let currentDateArr = currentDateString.split(" ");
	let currentTime = currentDateArr[4];
	let currentTimeArr = currentTime.split(":");
	let currentHour = currentTimeArr[0];
	let currentMinute = currentTimeArr[1];
	let formatHour;

	//afternoon hours may use 24 hour days
	if (currentHour > 12){
		formatHour = currentHour - 12;
	//12am may show up as 0 using new Date()
	} else if (+currentHour === 0){
		formatHour = 12;
	} else {
		formatHour = +currentHour;
	}

	let finalTimeFormat = formatHour + ":" + currentMinute; 

	let currentTimeDiv = document.querySelector(".current-time");
	currentTimeDiv.textContent = finalTimeFormat; 
}

initApp();