var myVideo = document.getElementById("video1"); 
var div = document.getElementsByClassName("button-pasue"); 
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
