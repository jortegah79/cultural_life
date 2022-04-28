$(document).ready(function() {
    let audio = new Audio("../audios/webPmix.mp3");
    let $text = $("span").get(0).textContent;
    let volActual = 100;
    let valorMute;
    $("#rw").click(function() {
        audio.pause();
        audio.currentTime = 0;
    });
    $("#playAudio").click(function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        };
    });
    $("#fw").click(function() {
        audio.pause();
        audio.currentTime = audio.duration;
    });
    $("#volplus").click(function() {

        if (audio.volume < 0.99) {
            audio.volume += 0.1;
            volActual = volActual + 10;
            $("span").get(0).textContent = volActual;

        } else {
            audio.volume = 1.0;
        }

    });
    $("#vol-").click(function() {
        if (audio.volume > 0.01) {
            audio.volume -= 0.1;
            volActual = volActual - 10;
            $("span").get(0).textContent = volActual;
        } else {
            audio.volume = 0;
            volActual = 0;
        }
    });
    $("#mute").click(function() {
        if (audio.volume == 0) {
            audio.volume = 0.6;
            $("span").get(0).textContent = 60;
            volActual = 60;
        } else {
            audio.volume = 0;
            $("span").get(0).textContent = 0;
            volActual = 0;
        }

    });
});
if (audio.volume === 0 && valorMute !== 0) {
    audio.volume = volActual / 100;
    $("span").get(0).textContent = volActual;
    console.log("desmuteando");
} else {
    valorMute = audio.volume;
    audio.volume = 0;
    $("span").get(0).textContent = 0;
    console.log("muteando");
}
audio.volume = 0;