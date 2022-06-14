var now = new Date(); 
var firstDay = new Date("2020-03-23");
var toNow = now.getTime(); 
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst ; //오늘 - 처음 만난날 
var passedDay = Math.round( passedTime / (24*60*60*1000));
document.querySelector('#accent').innerText = passedDay + "일";

// 100일, 200일, ... 입력되는 날수에 따른 계산 
function calcDate(days){
	var future = toFirst + days*(24*60*60*1000);
	var someday = new Date(future);
	var year = someday.getFullYear();
	var month = someday.getMonth() + 1;
	var date = someday.getDate();

	document.querySelector('#date'+days).innerText = year+ "년" + month + "월" +  date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);




