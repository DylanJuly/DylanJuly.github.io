
let button = document.getElementsByClassName('button')[0];
let box = document.getElementsByClassName('box')[0];
let pirze = box.getElementsByTagName('div');
console.log(pirze);

let k = 0;
let time = 300;
let count = 0;
let int;
let rom = 0;
button.onclick = eve;
// 抽奖
function eve() {
    pirze[k].style.background = "pink";
    int = setInterval(pu, time)
    rom = Math.floor(Math.random() * pirze.length);
    button.onclick = null;
}

function pu() {
    if (k < pirze.length - 1) {
        k++;
        pirze[k - 1].style.background = "skyblue";
        pirze[k].style.background = "pink";
    } else {
        k = 0;
        count++;
        pirze[pirze.length - 1].style.background = "skyblue";
        pirze[k].style.background = "pink";
    }
    if (count <= 5) {
        if (time <= 100) {
            time = 100;
        } else {
            time -= 20;
        }
    } else {
        if (time >= 300) {
            time = 300;
        } else {
            time += 20;
        }

    }
    if (count > 7 && rom == k) {
        clearInterval(int);
        count = 0;
        rom = 0;
        time = 300;
        button.onclick = eve;
        let text = pirze[k].innerHTML;
        setTimeout(function () {
            alert("恭喜您获得：" + text);
        }, 300)

    } else {
        clearInterval(int);
        int = setInterval(pu, time)
    }

}
