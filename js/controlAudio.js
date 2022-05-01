$(document).ready(function() {
    let audio = new Audio($("#audio").attr("src"));

    let volActual = 100;
    let mute = false;
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

        if (mute) {
            volActual = 10;
            $("span").get(0).textContent = volActual;
            audio.volume = 0.1;
            mute = false;
        } else if (audio.volume < 0.99) {
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

        if (!mute) {
            audio.volume = 0.0;
            $("span").get(0).textContent = "Mute";
            mute = true;
        } else if (mute) {

            audio.volume = volActual / 100;
            $("span").get(0).textContent = volActual;
            mute = false;
        }

    });
});