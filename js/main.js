let calButton = document.getElementById("btn_cal");
let cleanButton = document.getElementById("btn_clean")
let resDiv = document.getElementById("res");

$(document).ready(function(){
    $(this).scrollTop(0);
});

calButton.addEventListener("click", function() {

    resDiv.hidden = false;
    window.scrollTo(0,document.body.scrollHeight);
    
});

cleanButton.addEventListener("click", function() {
    window.location.reload();
});