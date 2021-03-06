window.onload = function () {
	var canvas = document.getElementById("container");
	var context = canvas.getContext("2d");
	setInterval(start(context),1000);
}

//利用无参匿名函数向定时器传参
function start(ctx) {
	return function () {
		ctx.clearRect(0,0,1200,700);
		update(ctx);
	}
}

//更新时间
function update(ctx) {
	var dt = new Date();
	var time = [dt.getHours(),dt.getMinutes(),dt.getSeconds()];
	var leftNum = [],rightNum = [];
	var nextNum = []; //TODO下一个数字
	for (var i = 0; i < time.length; i++) {
		if(time[i] < 10) {
			leftNum[i] = 0;
			rightNum[i] = time[i];
		} else {
			leftNum[i] = parseInt(time[i] / 10);
			rightNum[i] = time[i] % 10;
		}
		if(i == 0) {
			nextNum[i] = (leftNum[i] + 1) % 3;
		} else {
			nextNum[i*2] = (leftNum[i] + 1) % 10;
		}
		nextNum[i*2 + 1] = (rightNum[i] + 1) % 10;
		drawTime(i,leftNum[i],rightNum[i],ctx);
	}
	for (var i = 0;i < 2;i++) {
		drawDots(i,ctx);
	}	
}

//绘制当前时间
function drawTime(leftbegin,leftNum,rightNum,ctx) {
	for (var i = 0; i < numbers[leftNum].length; i++) {
		for (var j = 0; j < numbers[leftNum].length; j++) {
			if(numbers[leftNum][i][j] == 1) {
				ctx.beginPath();
				ctx.fillStyle = "#FF0000";
				ctx.arc(30+412*leftbegin+j*22,100+i*22,10,0,Math.PI*2,true);
				ctx.fill();
				// ctx.fillRect(100 + j*20,100 + i*20,20,20);
				ctx.closePath();
			}
		}
	}
	for (var i = 0; i < numbers[rightNum].length; i++) {
		for (var j = 0; j < numbers[rightNum].length; j++) {
			if(numbers[rightNum][i][j] == 1) {
				ctx.beginPath();
				ctx.fillStyle = "#FF0000";
				ctx.arc(194+416*leftbegin+j*22,100+i*22,10,0,Math.PI*2,true);
				ctx.fill();
				// ctx.fillRect(100 + j*20,100 + i*20,20,20);
				ctx.closePath();
			}
		}
	}
}

//绘制冒号
function drawDots (leftbeigin,ctx) {
	for (var i = 0; i < numbers[10].length; i++) {
		for (var j = 0; j < numbers[10][0].length; j++) {
			if(numbers[10][i][j] == 1) {
				ctx.beginPath();
				ctx.fillStyle = "#FF0000";
				ctx.arc(346+leftbeigin*414+j*22,100+i*22,10,0,Math.PI*2,true);
				ctx.fill();
				// ctx.fillRect(100 + j*20,100 + i*20,20,20);
				ctx.closePath();
			}
		}
	}
}


//存取颜色数组
var colors = ['#00FF00','#006EFF','#E66EFF','#FF6E00','#FFFF00','#C8F4FA','#9664FA','#FEC783'];

//存取数据数组
var numbers = [
    [
        [0,0,1,1,1,0,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,0,1,1,0],
        [0,0,1,1,1,0,0]
    ],//0
    [
        [0,0,0,1,1,0,0],
        [0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [1,1,1,1,1,1,1]
    ],//1
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,1,1],
        [1,1,1,1,1,1,1]
    ],//2
    [
        [1,1,1,1,1,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//3
    [
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,0],
        [0,0,1,1,1,1,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,1,1,0],
        [1,1,1,1,1,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,1]
    ],//4
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,1,1,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//5
    [
        [0,0,0,1,1,1,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//6
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0]
    ],//7
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//8
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,1,1,0,0,0,0]
    ],//9
    [
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ]//:
];