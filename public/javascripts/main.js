$(function() {
    $("#observationTable").tablesorter({
        theme: 'jui',
    });
});

function redirect(uri){
    window.location.href=uri;
}

function init() {

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
}

function doSampleJson(url, tag) {
    $.getJSON( url, function( data ) {
        $(tag).text(JSON.stringify(data));
    }).fail((data) => {$(tag).text(JSON.stringify(data.responseJSON));});
}