var audio = new Audio('media/Linkin Park - By Myself.mp3');

$('#pause').hide();

$('#play').click(function(){
    audio.play();
    $('#pause').show();
    $('#play').hide();
});

$('#pause').click(function(){
    audio.pause();
    $('#play').show();
    $('#pause').hide();
});

$('#stop').click(function() {
   audio.pause();
    audio.currentTime = 0;
});