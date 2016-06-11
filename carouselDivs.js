/*button carousel*/


var $hideBehind = $(".arrowButton").on("click", function () {
    var $ths = $(this).parent();


$ths.hide();
$ths.siblings().hide();

if($ths.next().is(".carousel-item")) {
        $ths.next().show();
    }else {
        $ths.siblings().first().show();
    }
});


var $hideFront = $(".arrowButtonL").on("click", function () {
    var $ths = $(this).parent();


$ths.hide();
$ths.siblings().hide();

if($ths.prev().is(".carousel-item")) {
        $ths.prev().show();
    }else {
        $ths.siblings().last().show();
    }
});


/**********  Runs Button Carousel   **********/


$hideBehind;
$hideFront;