$(document).ready(function () {
  // Liste de mots pour le jeu
  var mots = [
    "voiture",
    "maison",
    "ordinateur",
    "programmation",
    "football",
    "musique",
    "carte",
    "chocolat",
    "fleur",
    "stylo",
    "fenêtre",
    "portable",
    "internet",
    "école",
    "étudiant",
  ];
  // Sélectionner un mot aléatoire
  var mot = mots[Math.floor(Math.random() * mots.length)];
  var lettres = mot.split("");
  var erreurs = 0;
  var maxErreurs = 6;
  var lettresDevinees = [];

  // Afficher les tirets bas pour chaque lettre du mot
  for (var i = 0; i < lettres.length; i++) {
    lettresDevinees[i] = "_";
  }

  $("#mot").html(lettresDevinees.join(" "));

  // Créer un bouton pour chaque lettre de l'alphabet
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (var i = 0; i < alphabet.length; i++) {
    var lettre = $("<button>").text(alphabet[i]).attr("id", alphabet[i]);
    lettre.click(function () {
      var lettreSelectionnee = $(this).attr("id");
      var trouve = false;
      for (var i = 0; i < lettres.length; i++) {
        if (lettres[i] === lettreSelectionnee) {
          lettresDevinees[i] = lettreSelectionnee;
          trouve = true;
        }
      }
      if (!trouve) {
        erreurs++;
        $("#corps div")
          .eq(erreurs - 1)
          .css("visibility", "visible");
      }
      $(this).attr("disabled", "disabled");
      $("#mot").html(lettresDevinees.join(" "));
      if (erreurs === maxErreurs) {
        $("#lettres button").attr("disabled", "disabled");
        alert("Perdu! Le mot était " + mot);
      }
      if (lettresDevinees.join("") === mot) {
        $("#lettres button").attr("disabled", "disabled");
        alert("Gagné!");
      }
    });
    $("#lettres").append(lettre);
  }

  // Recommencer le jeu
  $("#restart").click(function () {
    location.reload();
  });
});
