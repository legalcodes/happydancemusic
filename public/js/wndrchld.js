
var a1 = document.getElementsByClassName("bar-a1");
var b1 = document.getElementsByClassName("bar-b1");
var c1 = document.getElementsByClassName("bar-c1");
var d1 = document.getElementsByClassName("bar-d1");
var e1 = document.getElementsByClassName("bar-e1");
var f1 = document.getElementsByClassName("bar-f1");

var b2 = document.getElementsByClassName("bar-b2");
var c2 = document.getElementsByClassName("bar-c2");
var d2 = document.getElementsByClassName("bar-d2");
var e2 = document.getElementsByClassName("bar-e2");
var f2 = document.getElementsByClassName("bar-f2");

var state = {};


setTimeout(
  () => document.querySelector('.chart').classList.toggle('chart--full'),
  300
)

wobbleColumnTop(a1[0], 5)
setTimeout(()=> wobbleColumnTop(b1[0], 5), 100);
setTimeout(() => wobbleColumnTop(c1[0], 5), 200);
setTimeout(() => wobbleColumnTop(d1[0], 5), 300);
setTimeout(() => wobbleColumnTop(e1[0], 5), 400);
setTimeout(() => wobbleColumnTop(f1[0], 5), 500);

wobbleColumnTop(a1[1], 5)
setTimeout(()=> wobbleColumnTop(b1[1], 5), 100);
setTimeout(() => wobbleColumnTop(c1[1], 5), 200);
setTimeout(() => wobbleColumnTop(d1[1], 5), 300);
setTimeout(() => wobbleColumnTop(e1[1], 5), 400);

wobbleColumnBottom(b2[0], 5);
setTimeout(() => wobbleColumnBottom(c2[0], 5), 200);
setTimeout(() => wobbleColumnBottom(d2[0], 5), 300);
setTimeout(() => wobbleColumnBottom(e2[0], 5), 400);
setTimeout(() => wobbleColumnBottom(f2[0], 5), 500);

wobbleColumnBottom(b2[1], 5);
setTimeout(() => wobbleColumnBottom(c2[1], 5), 200);
setTimeout(() => wobbleColumnBottom(d2[1], 5), 300);
setTimeout(() => wobbleColumnBottom(e2[1], 5), 400);

function wobbleColumnTop(elem, n) {
    var elemStyle = getComputedStyle(elem);
    var elemId = elem.id;
    (state[elemId] == undefined) && (state[elemId] = 'down');
    setInterval(function(){
        // every 100ms, tick according to state
        (state[elemId] == 'down') && (elem.style.gridRowStart++);
        (state[elemId] == 'up') && (elem.style.gridRowStart--);
        // set state
        (elemStyle.gridRowStart == n) && (state[elemId] = 'up');
        (elemStyle.gridRowStart == 1) && (state[elemId] = 'down');
    }, 100);
}

function wobbleColumnBottom(elem, n) {
    var elemStyle = getComputedStyle(elem);
    var elemId = elem.id;
    var start = parseInt(elemStyle.gridRowStart);
    (state[elemId] == undefined) && (elem.style.gridRowStart = start);
    (state[elemId] == undefined) && (state[elemId] = 'down');
    
    setInterval(function(){    
        // every 100ms, tick according to state
        (state[elemId] == 'down') && (elem.style.gridRowStart++);
        (state[elemId] == 'up') && (elem.style.gridRowStart--);
        // set state
        (elemStyle.gridRowStart == ( start + n )) && (state[elemId] = 'up');
        (elemStyle.gridRowStart == start) && (state[elemId] = 'down');
    }, 100);
}



