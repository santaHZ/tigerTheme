const perf_imgSlide = document.querySelector('#perf_imgSlid');
const perf_slidImages = document.querySelectorAll('#perf_imgSlid .item');

//Buttons
const perf_prevBtn1 = document.querySelector('#perf_prevBtn1');
const perf_nextBtn1 = document.querySelector('#perf_nextBtn1');

const perf_prevBtn2 = document.querySelector('#perf_prevBtn2');
const perf_nextBtn2 = document.querySelector('#perf_nextBtn2');

//Counter
let perf_counter = 0;
const perf_size = perf_slidImages[0].clientWidth;

perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';


//Button1 Listeners
perf_nextBtn1.addEventListener('click', ()=>{
	if (perf_counter == 2){
		return;
	}
	perf_imgSlide.style.transition = "transform 0.4s ease-in-out";
	perf_counter ++;
	//console.log(counter);
	//console.log(perf_size);
	perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

	perf_nextBtn1.style.color = "rgb(66, 64, 64)";
	perf_prevBtn1.style.color = "#ddd";

});

perf_prevBtn1.addEventListener('click', ()=>{
	if (perf_counter == 0){
		return;
	}
	perf_imgSlide.style.transition = "transform 0.4s ease-in-out";
	perf_counter --;
	//console.log(counter);
	//console.log(perf_size);
	perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

	perf_nextBtn1.style.color = "#ddd";
	perf_prevBtn1.style.color = "rgb(66, 64, 64)";

});

//Button2 Listeners
perf_nextBtn2.addEventListener('click', ()=>{
	
	if (perf_counter == 2){
		return;
	}
	perf_imgSlide.style.transition = "transform 0.4s ease-in-out";
	perf_counter ++;
	//console.log(counter);
	//console.log(perf_size);
	//console.log(perf_counter);
	perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

	perf_nextBtn1.style.color = "rgb(66, 64, 64)";
	perf_prevBtn1.style.color = "#ddd";
});

perf_prevBtn2.addEventListener('click', ()=>{
	if (perf_counter == 0){
		return;
	}
	perf_imgSlide.style.transition = "transform 0.4s ease-in-out";
	perf_counter --;
	//console.log(counter);
	//console.log(perf_size);
	perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

	perf_nextBtn1.style.color = "#ddd";
	perf_prevBtn1.style.color = "rgb(66, 64, 64)";
});



gearHub = document.getElementById("gearHub");
milesPerCharge = document.getElementById("milesPerCharge");
maxTorque = document.getElementById("maxTorque");
perdalAssLevel = document.getElementById("perdalAssLevel");

let gearhub_no = 0;
let milesPerCharge_no = 0;
let maxTorque_no = 0;
let perdalAssLevel_no = 0;

function addNum1 (){
	if (gearhub_no < 500){
		gearhub_no ++;
		gearHub.innerHTML = gearhub_no + "W";
		setTimeout(addNum1, 5);
	}
}

function addNum2 (){
	if (milesPerCharge_no < 22){
		milesPerCharge_no ++;
		milesPerCharge.innerHTML = milesPerCharge_no + "+";
		setTimeout(addNum2, 15);
	}
}

function addNum3 (){
	if (maxTorque_no < 52){
		maxTorque_no ++;
		maxTorque.innerHTML = maxTorque_no + "Nm";
		setTimeout(addNum3, 25);
	}
}

function addNum4 (){
	if (perdalAssLevel_no < 5){
		perdalAssLevel_no ++;
		perdalAssLevel.innerHTML = perdalAssLevel_no;
		setTimeout(addNum4, 25);
	}
}





var myScrollFunc = function() {
  var y = window.scrollY;
  if (y > 1800) {
	  setTimeout(addNum1, 5);
	  setTimeout(addNum2, 15);
	  setTimeout(addNum3, 25);
	  setTimeout(addNum4, 25);
  } else {
    //myID.className = "bottomMenu hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

let main_banner = document.getElementById("main_banner");

main_banner.setAttribute("class") = "main_banner_02";



