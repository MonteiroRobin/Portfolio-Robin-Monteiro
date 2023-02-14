
window.onscroll = function() {scrollFunction()};

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

  // Détecter le clic sur le bouton
  $("#myBtn").click(function() {
    // Récupérer les éléments icône et texte
    var icon = $("#myIcon");
    var text = $("#myText");
    
    // Changer l'icône
    icon.attr("class", "fa fa-check");
    
    // Changer le texte
    text.text("Texte copié!");
    
    // Sélectionner le texte à copier
    var textToCopy = "Le texte à copier";
    var copyText = document.querySelector("#myText");
    copyText.select();
    
    // Copier le texte
    document.execCommand("copy");
  });

  $(document).ready(function(){
    $("br").replaceWith("\n");
  });