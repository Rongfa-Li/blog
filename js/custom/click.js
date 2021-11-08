var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = "✨";
        var element = $("<span/>").text(a);
        var x = e.pageX;
        var y = e.pageY;
        element.css({
            "z-index": 100000000,
            "top": y - 20,
            "left": x,
            "position": "absolute",
        });
        $("body").append(element);
        element.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function() {
            element.remove();
        });
    });
});