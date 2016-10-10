
/**********  button carousel function   **********/
(function() {

/**********  button carousel code  **********/

function $hide () {
   $("#arrowGPa").find(".carousel-item").hide().siblings().hide();

}


/**********  button carousel code  **********/

var $hideFront = $(".arrowButtonL").on("click", function () {
    var $ths = $(this).parent();

    $hide();

    if($ths.prev().is(".carousel-item")) {
            $ths.prev().show();
        }else {
            $ths.siblings().last().show();
        }
});


var $hideBehind = $(".arrowButton").on("click", function () {
    var $ths = $(this).parent();

        $hide();

    if($ths.next().is(".carousel-item")) {
            $ths.next().show();
        }else {
            $ths.siblings().first().show();
        }
    });
/**********  Runs Button Carousel   **********/
})();
