
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-button").style.display = "block";
  } else {
    document.getElementById("top-button").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$("#myBtn").click(function () {
  
  var icon = $("#myIcon");
  var text = $("#myText");
  icon.attr("class", "fa fa-check");
  text.text("Texte copié!");

  var textToCopy = "Le texte à copier";
  var copyText = document.querySelector("#myText");
  copyText.select();

  document.execCommand("copy");
});

$(document).ready(function () {
  $("br").replaceWith("\n");
});






const monElement = document.querySelector('.monElement');
if (window.innerWidth <= 400) {
  monElement.classList.add('hidden');
} else {
  monElement.classList.remove('hidden');
}