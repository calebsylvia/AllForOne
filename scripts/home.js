let lvl0 = document.getElementById("lvl0");
let lvl1 = document.getElementById("lvl1");
let lvl2 = document.getElementById("lvl2");
let lvl3 = document.getElementById("lvl3");
let lvl4 = document.getElementById("lvl4");
let lvl5 = document.getElementById("lvl5");
let lvl6 = document.getElementById("lvl6");
let lvl7 = document.getElementById("lvl7");
let lvl8 = document.getElementById("lvl8");
let lvl9 = document.getElementById("lvl9");

let levels = document.getElementById("levels");
let welcome = document.getElementById("welcome");



window.addEventListener('resize',() => {
    if(window.matchMedia('(max-width: 426px').matches){
        lvl0.innerHTML = "0";
        lvl1.innerHTML = "1";
        lvl2.innerHTML = "2";
        lvl3.innerHTML = "3";
        lvl4.innerHTML = "4";
        lvl5.innerHTML = "5";
        lvl6.innerHTML = "6";
        lvl7.innerHTML = "7";
        lvl8.innerHTML = "8";
        lvl9.innerHTML = "9";
        welcome.innerHTML = "";


    }
});

