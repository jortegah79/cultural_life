$(document).ready(function() {
    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_N",
        cssSelectorAncestor: "#jp_container_N"
    }, {}, {
        playlistOptions: {
            enableRemoveControls: true
        },
        swfPath: "/js",
        supplied: "webmv, ogv, m4v",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true
    });
    myPlaylist.setPlaylist([{
        title: "Slastic",
        artist: "El tricicle",
        m4v: "../videos/EL_tricicle.mp4"
    }, {
        title: "Concierto Marc Anthony",
        artist: "Marc_Anthony",
        m4v: "../videos/Concierto_Marc_Anthony.mp4",
    }, {
        title: "La cuenta",
        artist: "Grupo La Familia",
        m4v: "../videos/La_Cuenta_Trailer.mp4",
    }, {
        title: "El Rey Leon",
        artist: "Compañia Disney Actors",
        m4v: "../videos/El_Rey_Leon_El_Musical.mp4"
    }]);
});