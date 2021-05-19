$(function () {
    var $header = $(".landing-message");
    var header = [
        'Hello there.',
        'My name is <br>Justin Ng'
    
    ];
    var position = -1;

    !function loop() {
        position = (position + 1) % header.length;
        $header.html(header[position])
        .fadeIn(1000)
        .delay(7500)
        .fadeOut(1000, loop);
    }();
});