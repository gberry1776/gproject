

$( "div.sudiv" ).hover(function() {
  $("div.move").animate({
    'background-position-x':"0"
  },200,
);
  $("div.move").animate({
    'background-position-x':"280"
  },1,
);
  $("div.move").animate({
    'background-position-x':"280"
  },500,
);
  $("div.move").animate({
    'background-position-x':"239"
  },1,
);
$("div.move").animate({
  'background-position-x':"239"
},500,
);
$("div.move").animate({
  'background-position-x':"198"
},1,
);
$("div.move").animate({
  'background-position-x':"198"
},500,
);
$("div.move").animate({
  'background-position-x':"157"
},1,
);
$("div.move").animate({
  'background-position-x':"157"
},500,
);
$("div.move").animate({
  'background-position-x':"40"
},4000,function() {
    // Animation complete.
  });
});

$( "a" ).hover(function() {
  $(this).animate({
    'background-position-x':"240"
  },1000,
)}, function(){
  $(this).animate({
  'background-position-x':'80'
},1000,
)})

// $("div.drivediv").animate({
//   'background-position-x':'-240'
// },5000,'linear',function() {
//   loop();
// }
// )

$(document).ready(function() {

    function loop() {
        $('div.drivediv').css({  'background-position-x':'0'});
        $('div.drivediv').animate ({
          'background-position-x':'280'
        }, 5000, 'linear', function() {
            loop();
        });
    }
    loop();
 });
