The "section" is a wrapper with min-width 300vw, (100vw * amount of items for the carousel).
then each div has 100vw so only one shows and it takes up the full screen.
the button is whats clicked to trigger a javascript function.
and the span is what I used to create an arrow using border styles.


 .arrowButtonL "left" & .arrowButton "right" are whats clicked to make the functions run.
 .carousel-item is the divs that rotate.
 
 without $ths.siblings().hide(); I ran into some issues only when pressing the back button as the first button clicked after loading.
 
 
