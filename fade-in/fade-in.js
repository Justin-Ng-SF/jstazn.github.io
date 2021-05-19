$(function () {
    var $header = $(".landing-message");
    var header = [
        'Hello there.',
        'My name is <br>Justin Ng.',
        'Below are the projects I have built and a little bit about me.',
        'Please feel free to check out my projects on Github.'
    
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