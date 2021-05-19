$(function () {
    var $header = $(".landing-message");
    var header = [
        'Hello there.',
        'My name is <br>Justin Ng'
    
    ];
    var position = 1;

    !function loop() {

        position = (position + 1) % header.length;

        var delayTimer = position === 0 ? 1500 : 7500;
        console.log(delayTimer)
        $header.html(header[position])
        .fadeIn(1000)
        .delay(delayTimer)
        .fadeOut(1000, loop);
    }();
});