
// Task 1

document.querySelector('.ex1').onmousemove = function (par1) {
	var x1 = document.getElementById('x1');
	var y1 = document.getElementById('y1');
	x1.innerHTML  = 'X - ' + par1.offsetX;
	y1.innerHTML  = 'Y - ' + par1.offsetY;

}


// Task 2

document.querySelector('.ex2').ondblclick = function (par2) {
	this.style.backgroundImage = 'url(https://cdn1.iconfinder.com/data/icons/ballicons/128/folder-128.png)';
}

// Task 3
var ex3 = document.querySelector('.ex3');
for (var i = 0 ; i<=300; i++) {
	ex3.innerHTML += '<div class="ex31"></div>';
}
var ex31 = document.getElementsByClassName('ex31');
for (var i = 0 ; i<ex31.length; i++){
	ex31[i].onmouseenter = aa;
}

function aa() {

	// this.style.transition = '3s';
	this.style.borderRadius = '60px';
	
}

// Task 4

var imgmain = document.querySelector('.imgxxl');

var myimg = document.getElementsByClassName('m-img');
 for (var i = 0; i<myimg.length; i++) {
 	myimg[i].onclick = change1;
 }

 function change1 () {
 	imgmain.style.backgroundImage = 'url(' + this.src + ')';
 }




// Task 5 
var vir = 0;
var c = document.querySelector('.cube');
c.onclick = function () {
	vir = vir + 100;
	c.style.marginTop = vir + 'px';
}



// Task 6

var ex6 = document.querySelector('.ex6');
var block1 = document.querySelector('.block1');
var posinf = document.querySelector('#blockpos');

document.querySelector('#button1').onclick = chageposition;

function chageposition () {
	if (block1.classList.contains('left')) {
		block1.classList.remove('left');
		block1.classList.add('center');
		posinf.innerHTML = 'Положение 1';
	}
	else if (block1.classList.contains('center')) {
		block1.classList.remove('center');
		block1.classList.add('right');
		posinf.innerHTML = 'Положение 2';
	}
	else if (block1.classList.contains('right')) {
		block1.classList.remove('right');
		block1.classList.add('left');
		posinf.innerHTML = 'Положение 0';
	}
}


