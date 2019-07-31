/*------ Activité : jeu de devinette ------*/

// Déclaration des constantes
const solution = Math.floor(Math.random() * 100) + 1;
const nbrCoupsLimite = 5; //Le nombre limite de coups est de six, le décompte commence à 0 donc s'arrête à 5.
const result = document.getElementById("result");

console.log(solution);

for(var nbrCoupsJoues=0 ; nbrCoupsJoues<=nbrCoupsLimite ; nbrCoupsJoues++){ //La boucle continue tant que le nombre de coups joués est inférieur au nombre limite de coups ; le joueur commence à 0 coups, le programme incrémente de 1 à chaque tour de boucle jusqu'à ce que le joueur trouve la bonne réponse ou dépasse le nombre de coups autorisés.
  document.getElementById("button").addEventListener("click", function() {
  let reponseJoueur=document.getElementById("answer").value;; //Cette variable récupère la réponse du joueur à chaque tour de boucle.
    if (solution==reponseJoueur){
    document.getElementById('result').className = 'text-success';
    result.innerHTML = "Bien joué, tu as gagné ! La réponse était effectivement " + solution +"." ;
    } //Si la réponse du joueur correspond à la solution de l'équation, le programme s'arrête.

    else if (nbrCoupsJoues==nbrCoupsLimite){
      document.getElementById('result').className = 'text-danger';
      result.innerHTML = "Désolé mais tu as dépassé le nombre de coups autorisés, c'est perdu ! La réponse était " + solution +"..." ;
    } //Si le nombre de coups joués est égal au nombre limite de coups autorisés, le programme s'arrête.

    else if (reponseJoueur<solution){
      document.getElementById('result').className = 'text-danger';
      result.innerHTML = reponseJoueur + " : Le nombre soumis est trop petit.";
        if (reponseJoueur<1){
          result.innerHTML = reponseJoueur + " : Le nombre soumis est inférieur à 1. Choisis un nombre compris entre 1 et 100...";
        } // Si la réponse du joueur est inférieur à l'intervalle dans lequel l'équation calcule la solution, le programme indique au joueur son erreur.
    } //Si la réponse du joueur est inférieur à la solution, le programme le lui indique, le nombre de coups joués s'incrémente.

    else if (reponseJoueur>solution){
      document.getElementById('result').className = 'text-danger';
      result.innerHTML = reponseJoueur + " : Le nombre soumis est trop grand.";
      if (reponseJoueur>100){
        console.log("Votre nombre est supérieur à 100. Choisissez un nombre compris entre 1 et 100."); // Si la réponse du joueur est supérieur à l'intervalle dans lequel l'équation calcule la solution, le programme indique au joueur son erreur.
        result.innerHTML = reponseJoueur + " : Le nombre soumis est supérieur à 100. Choisis un nombre compris entre 1 et 100...";
      } //Si la réponse du joueur est supérieur à la solution, le programme le lui indique, le nombre de coups joués s'incrémente.
    }
    else {
      document.getElementById('result').className = 'text-danger';
      result.innerHTML = reponseJoueur + " : Ta saisie est invalide.";
    } //Si la réponse du joueur ne correspond à aucun des cas précédents, par exemple si c'est un string au lieu d'être un number, le programme le lui indique et le nombre de coups joués s'incrémente.
  })
}
