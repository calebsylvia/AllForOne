let lvl0desc = document.getElementById("lvl0desc");
let lvl1desc = document.getElementById("lvl1desc");
let lvl2desc = document.getElementById("lvl2desc");
let lvl3desc = document.getElementById("lvl3desc");
let lvl4desc = document.getElementById("lvl4desc");
let lvl5desc = document.getElementById("lvl5desc");
let lvl6desc = document.getElementById("lvl6desc");
let lvl7desc = document.getElementById("lvl7desc");
let lvl8desc = document.getElementById("lvl8desc");
let lvl9desc = document.getElementById("lvl9desc");





window.addEventListener('resize', () => {

    if(window.matchMedia('(max-width: 426px)').matches){
        if(document.URL.includes("level0.html")){
            lvl0desc.textContent = "Enter in a Name";
        }else if(document.URL.includes("level1.html")){
            lvl1desc.textContent = "Enter in two numbers to get sum";
        }else if(document.URL.includes("level2.html")){
            lvl2desc.textContent = "Enter in your name and what time you woke up";
        }else if(document.URL.includes("level3.html")){
            lvl3desc.textContent = "Enter in two numbers to compare values";
        }else if(document.URL.includes("level4.html")){
            lvl4desc.textContent = "Follow prompts for a short story";
        }else if(document.URL.includes("level5.html")){
            lvl5desc.textContent = "Enter in one number"; 
        }else if(document.URL.includes("level6.html")){
            lvl6desc.textContent = "Enter in any mix of words and/or numbers";
        }else if(document.URL.includes("level7.html")){
            lvl7desc.textContent = "Enter in a digit(numbers only)";
        }else if(document.URL.includes("level8.html")){
            lvl8desc.textContent = "Ask any yes or no question";
        }else{
            lvl9desc.textContent = "Pick from Asian, Mexican, or Indian";
        }
    }
})

// Levels API

let level0 = document.getElementById("level0");
let level0btn = document.getElementById("level0btn");
let level0term = document.getElementById("level0term");
let level0term2 = document.getElementById("level0term2");

let level1num1 = document.getElementById("level1num1");
let level1num2 = document.getElementById("level1num2");
let level1btn = document.getElementById("level1btn");
let level1term = document.getElementById("level1term");
let level1term2 = document.getElementById("level1term2");

let level2name = document.getElementById("level2name");
let level2wake = document.getElementById("level2wake");
let level2btn = document.getElementById("level2btn");
let level2term = document.getElementById("level2term");
let level2term2 = document.getElementById("level2term2");
        
let level3num1 = document.getElementById("level3num1");
let level3num2 = document.getElementById("level3num2");
let level3btn = document.getElementById("level3btn");
let level3term = document.getElementById("level3term");
let level3term2 = document.getElementById("level3term2");

let level4noun1 = document.getElementById("level4noun1");
let level4noun2 = document.getElementById("level4noun2");
let level4noun3 = document.getElementById("level4noun3");
let level4verb = document.getElementById("level4verb");
let level4place = document.getElementById("level4place");
let level4adj = document.getElementById("level4adj");
let level4btn = document.getElementById("level4btn");
let level4term = document.getElementById("level4term");
let level4term2 = document.getElementById("level4term2");

let level5 = document.getElementById("level5");
let level5btn = document.getElementById("level5btn");
let level5term = document.getElementById("level5term");
let level5term2 = document.getElementById("level5term2");

let level6 = document.getElementById("level6");
let level6btn = document.getElementById("level6btn");
let level6term = document.getElementById("level6term");
let level6term2 = document.getElementById("level6term2");

let level7 = document.getElementById("level7");
let level7btn = document.getElementById("level7btn");
let level7term = document.getElementById("level7term");
let level7term2 = document.getElementById("level7term2");

let level8 = document.getElementById("level8");
let level8btn = document.getElementById("level8btn");
let level8term = document.getElementById("level8term");
let level8term2 = document.getElementById("level8term2");

let level9 = document.getElementById("level9");
let level9btn = document.getElementById("level9btn");
let level9term = document.getElementById("level9term");
let level9term2 = document.getElementById("level9term2");


async function submitZero(){
    let zeroInput = level0.value;

    const zeroProm = await fetch(`https://allforonesylvia.azurewebsites.net/SayHello/${zeroInput}`);
    const zeroResp = await zeroProm.text();

    level0term.innerText = `> ${zeroResp}`;
    level0term2.innerText = `> ${zeroResp}`;
    level0.value = "";
}

async function submitOne(){
    let oneInput1 = level1num1.value;
    let oneInput2 = level1num2.value;

    const oneProm = await fetch(`https://allforonesylvia.azurewebsites.net/TwoSum/${oneInput1}/${oneInput2}`);
    const oneResp = await oneProm.text();

    level1term.innerText = `> ${oneResp}`;
    level1term2.innerText = `> ${oneResp}`;
    level1num1.value = "";
    level1num2.value = "";
}

async function submitTwo(){
    const twoProm = await fetch(`https://allforonesylvia.azurewebsites.net/WakeUp/${level2name.value}/${level2wake.value}`);
    const twoResp = await twoProm.text();

    level2term.innerText = `> ${twoResp}`;
    level2term2.innerText = `> ${twoResp}`;
    level2name.value = "";
    level2wake.value = "";
}

async function submitThree(){
    const threeProm = await fetch(`https://allforonesylvia.azurewebsites.net/Compare/${level3num1.value}/${level3num2.value}`);
    const threeResp = await threeProm.text();

    level3term.innerText = `> ${threeResp}`;
    level3term2.innerText = `> ${threeResp}`;
    level3num1.value = "";
    level3num2.value = "";
}

async function submitFour(){
    const fourProm = await fetch(`https://allforonesylvia.azurewebsites.net/MadLib/${level4noun1.value}/${level4noun2.value}/${level4noun3.value}/${level4verb.value}/${level4place.value}/${level4adj.value}`);
    const fourResp = await fourProm.text();

    level4term.innerText = `> ${fourResp}`;
    level4term2.innerText = `> ${fourResp}`;
    level4noun1.value = "";
    level4noun2.value = "";
    level4noun3.value = "";
    level4place.value = "";
    level4verb.value = "";
    level4adj.value = "";
}

async function submitFive(){
    const fiveProm = await fetch(`https://allforonesylvia.azurewebsites.net/OddOrEven/${level5.value}`);
    const fiveResp = await fiveProm.text();

    level5term.innerText = `> ${fiveResp}`;
    level5term2.innerText = `> ${fiveResp}`;
    level5.value = "";
}

async function submitSix(){
    const sixProm = await fetch(`https://allforonesylvia.azurewebsites.net/ReverseIt1/${level6.value}`);
    const sixResp = await sixProm.text();

    level6term.innerText = `> ${sixResp}`;
    level6term2.innerText = `> ${sixResp}`;
    level6.value = "";
}

async function submitSeven(){
    const sevenProm = await fetch(`https://allforonesylvia.azurewebsites.net/Reverse2/${level7.value}`);
    const sevenResp = await sevenProm.text();

    level7term.innerText = `> ${sevenResp}`;
    level7term2.innerText = `> ${sevenResp}`;
    level7.value = "";
}

async function submitEight(){
    const eightProm = await fetch(`https://allforonesylvia.azurewebsites.net/Magic8Ball/${level8.value}`);
    const eightResp = await eightProm.text();

    level8term.innerText = `> ${eightResp}`;
    level8term2.innerText = `> ${eightResp}`;
    level8.value = "";
}


async function submitNine(){
    const nineProm = await fetch(`https://allforonesylvia.azurewebsites.net/RestaurantPicker/${level9.value}`);
    const nineResp = await nineProm.text();

    level9term.innerText = `> ${nineResp}`;
    level9term2.innerText = `> ${nineResp}`;
    level9.value = "";
}


