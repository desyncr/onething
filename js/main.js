$(function() {
    var $bodyHeight = $('body').height(),
        $document = $(document),
        $window = $(window),
        $keyCodeDown = $.Event('keyup', {keyCode: 40}),
        keyCodesForward = [13, 32]
    ;

    $.scrollify({
        section : "section"
    });
    $(".scroll").click(function(e) {
        e.preventDefault();
        $.scrollify("move",$(this).attr("href"));
    });

    $document.bind('keyup', function (e) {
        if ($.inArray(e.keyCode, keyCodesForward) >= 0) {
            var viewingLastSection = function () {
                var windowHeight = $window.height(),
                    currentBottomOffset = $document.scrollTop() + windowHeight;

                return ($bodyHeight - currentBottomOffset) < windowHeight;
            }
            if (viewingLastSection()) {
                $.scrollify("move", "#one-thing");
            } else {
                $document.trigger($keyCodeDown);
            }

        }
    });

    $("#top").scroll2Top({
        appearAt: 2000,
        scrollSpeed: 200
    });
});
