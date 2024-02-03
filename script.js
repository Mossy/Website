// script.js

var audio = document.getElementById("myAudio");

audio.onended = function() {
    audio.play(); // Restart the audio when it ends
};


function toggleSound() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}



// function playSoundAndAlert() {
//     if (!isPlaying) {
//         audio.play();
//         isPlaying = true;
//         showCustomDialog();
//     } else {
//         audio.pause();
//         isPlaying = false;
//     }
// }


// function myfunction(note, done) { 
//     var box = $("#ready"); 
//     box.find(".message").text(note);
//     box.find(".btn").unbind().click(function() { 
//        box.hide();
//     });
//     box.find(".btn").click(done); box.show();
//  }
 

// function showCustomDialog() {
//     var modal = document.createElement("div");
//     modal.className = "custom-modal";
//     modal.innerHTML = "Caw! Click here to stop the audio";
//     modal.onclick = function() {
//         closeModal();
//     };

//     document.body.appendChild(modal);
// }

// function closeModal() {
//     var modal = document.querySelector(".custom-modal");
//     if (modal) {
//         document.body.removeChild(modal);
//         playSoundAndAlert(); // Pause the audio when the custom dialog is clicked
//     }
// }