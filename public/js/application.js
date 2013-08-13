$(document).ready(function(){
  $("body").keyup(function(event) {
    var startTime = new Date();
    if (event.keyCode==81){ 
      var active = $('#player1_strip').find('.active');
      $(active).next().addClass('active');
      $(active).removeClass('active');
        if ($(active).siblings(':last').hasClass('active')) {
          var endTime = new Date();
          var totalTime = (endTime.getSeconds() - startTime.getSeconds());
          var winnerId = $('#player1_strip').attr('data-player');
          $.post('/results', {winner: winnerId, time: totalTime}, function() {
          window.location.href = "/winner";
          });
        };
    };
    if (event.keyCode==80){
      var active = $('#player2_strip').find('.active');
      $(active).next().addClass('active');
      $(active).removeClass('active');
        if ($(active).siblings(':last').hasClass('active')) {
          var endTime2 = new Date();
          console.log(startTime);
          console.log(endTime2);
          var totalTime2 = (endTime2.getTime() - startTime.getTime()/1000);
          var winnerId = $('#player2_strip').attr('data-player');
          $.post('/results', {winner: winnerId, time: totalTime}, function() {
          window.location.href = "/winner";
          });
        };
    };
  });
});

// First solution to javascript racer
//          
// $(document).ready(function(){
//   var player1_location = 1;  
//   var player2_location = 1;   
//   $("body").keyup(function(e) {
//     if (e.which==81){
//       var startTime = new Date();
//       $('#player1_strip > td:nth-child('+player1_location+')').removeClass("active");
//       player1_location = player1_location + 1;
//       $('#player1_strip > td:nth-child('+player1_location+')').addClass("active");
//       if (player1_location === 20) {
//         var endTime = new Date();
//         var totalTime = (endTime.getSeconds() - startTime.getSeconds());
//         var winnerId = $('#player1_strip').attr('data-player');
//         console.log(totalTime);
//         $.post('/results', {winner: winnerId, time: totalTime}, function() {
//           window.location.href = "/winner";
//         });
//       };
//     }
//     else if (e.keyCode==80){
//       $('#player2_strip > td:nth-child('+player2_location+')').removeClass("active");
//       player2_location = player2_location + 1;
//       $('#player2_strip > td:nth-child('+player2_location+')').addClass("active");
//       if (player2_location === 20) {
//         $.post('/results', {winner: "winnerID", time: "time"} );
//         var winnerId = $('#player2_strip').attr('data-player');
//         $.post('/results', {winner: winnerId}, function() {
//           window.location.href = "/winner";
//         });
//       }
//     };
//   });
// });

