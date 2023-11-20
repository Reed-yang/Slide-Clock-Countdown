var size = 86;
var columns = Array.from(document.getElementsByClassName('column'));
var d = void 0,
    c = void 0,
	d_new = void 0,
	diff = void 0,
	days = void 0,
	hours = void 0,
	minutes = void 0,
	seconds = void 0;
var classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];
var use24HourClock = true;

function padClock(p, n, i) {
	if (i === 0) {
		// 仅对数组的第一个元素（天数）进行三位格式化
		return p + ('00' + n).slice(-3);
	} else {
		// 对其它元素进行两位格式化
		return p + ('0' + n).slice(-2);
	}
}


	
	



function getClock() {
	d = new Date();
	d_new = new Date(2024, 1, 1); // 2024年2月1日
	diff = d_new - d;

	// 计算总天数
	days = Math.floor(diff / (1000 * 60 * 60 * 24));
	// 计算剩余小时
	hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	// 计算剩余分钟
	minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	// 计算剩余秒数
	seconds = Math.floor((diff % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds].reduce(padClock, '');
	
}

function getClass(n, i2) {
	return classList.find(function (class_, classIndex) {
		return Math.abs(n - i2) === classIndex;
	}) || '';
}

var loop = setInterval(function () {
	c = getClock();

	columns.forEach(function (ele, i) {
		var n = +c[i];
		var offset = -n * size;
		ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
		Array.from(ele.children).forEach(function (ele2, i2) {
			ele2.className = 'num ' + getClass(n, i2);
		});
	});
}, 200 + Math.E * 10);